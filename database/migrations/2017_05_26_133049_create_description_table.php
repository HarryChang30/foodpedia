<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDescriptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('description' , function(Blueprint $table){
            $table->increments('id');
            $table->integer('foods_id')->unsigned();
            $table->foreign('foods_id')->references('id')->on('foods');
            $table->string('author');
            $table->string('title');
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Scheme::drop('description');
    }
}
