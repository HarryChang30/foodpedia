var app = angular.module('Foodpedia',['ngMaterial' , 'ngRoute']);

//define API URL constant
app.constant('API_URL' , 'http://localhost:8000/api/');

//configure foodpedia route
app.config(function($routeProvider){

    //route for the foods page
    $routeProvider.when('/',{
        templateUrl : 'angular/foods/foods.template.htm',
        controller  : 'FoodsController'
    }).when('/food/:foodID',{
        //route for the single food page
        templateUrl : 'angular/food/food.template.htm',
        controller  : 'FoodController'
    }).otherwise({
        //default route
        redirectTo  : '/'
    });
});

app.filter('pagination' , function(){
    return function(input,start){
        if(!input || !input.length){
            return;
        }
        start = parseInt(start,10);
        return input.slice(start);
    }
});
