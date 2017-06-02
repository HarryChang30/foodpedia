<?php

use Illuminate\Database\Seeder;
use App\Foods;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('foods')->delete();

        Foods::create(array(
            'name'  => 'Chicken Wing',
            'author' => 'Bambang',
            'overview' => 'a deep-fried chicken wing, not in spicy sauce'
        ));

        Foods::create(array(
           'name'  => 'Beef ribs',
           'author' => 'Frank',
           'overview' => 'Slow baked beef ribs rubbed in spices'
        ));

        Foods::create(array(
           'name'  => 'Ice cream',
           'author' => 'Lou',
           'overview' => ' A sweetened frozen food typically eaten as a snack or dessert.'
        ));

    }
}
