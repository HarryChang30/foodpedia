<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Foods;

class Description extends Model
{
    //
    public $table = "description";
    public $fillable = ['author' , 'title' , 'description'];

    public function foods(){
        return $this->belongsTo(Foods::class);
    }

    public function scopeofFoods($query , $foodId){
        return $query->where('foods_id' , $foodId);
    }
}
