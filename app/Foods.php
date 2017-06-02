<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Description;

class Foods extends Model
{
    //
    public $table = "foods";
    public $fillable = ['name' , 'overview' , 'author'];

    public function descriptions(){
        return $this->hasMany(Description::class);
    }
}
