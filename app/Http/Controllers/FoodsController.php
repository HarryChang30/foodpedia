<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Foods;

class FoodsController extends Controller
{
    //
    public function index($id = null)
    {
         if($id == null){
            return Foods::orderBy('id' , 'asc')->get();
         }else{
            return $this->show($id);
         }
    }

    public function show($id)
    {
         return Foods::find($id);
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name'   => 'required',
            'author'  => 'required',
            'overview'  => 'required'
        ]);

        $foods = new Foods;
        $foods->name = $request->input('name');
        $foods->author = $request->input('author');
        $foods->overview = $request->input('overview');
        $foods->save();

        return 'Food record successfully created with id'.$foods->id;
    }

    public function update(Request $request , $id)
    {
        $foods = Foods::find($id);
        $foods->name = $request->input('name');
        $foods->author = $request->input('author');
        $foods->overview = $request->input('overview');
        $foods->save();

        return 'Food record successfully updated with id'.$foods->id;
    }

    public function delete($id)
    {
        $foods = Foods::destroy($id);
        return 'Food record successfully deleted';
    }
}
