<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Description;
use App\Foods;

class DescriptionController extends Controller
{
    public function index($foodID)
    {
        return Description::ofFoods($foodID)->paginate();
    }

    public function show($foodID , $descriptionID)
    {
        $description = Description::ofFoods($foodID)->findOrFail($descriptionID);

        return $description;
    }

    public function store(Request $request , $foodID)
    {
        $this->validate($request , [
            'description'  => 'required',
            'author'       => 'required',
            'title'        => 'required'
        ]);


        $foods = Foods::findOrFail($foodID);
        $foods->descriptions()->save(new Description([
            'title'   => $request->input('title'),
            'description' => $request->input('description'),
            'author'  => $request->input('author')
        ]));

        return $foods->descriptions;
    }

    public function update(Request $request , $foodID , $descriptionID)
    {
         $description = Description::ofFoods($foodID)->findOrFail($descriptionID);

         if($request->input('author') == $description['author']){
             $description->update([
                  'title'   => $request->input('title'),
                  'description'  => $request->input('description'),
                  'author' => $request->input('author')
             ]);


             return $description;
         }else{
            return response()->json(['name' => 'Failure! You are not the author description'] , 422);
         }
    }

    public function destroy($foodID , $descriptionID)
    {
         $description = Description::ofFoods($foodID)->findOrFail($descriptionID);
         $description->delete();
         return $description;
    }
}
