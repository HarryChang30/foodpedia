<?php global $base_url ?>
<!DOCTYPE html>
<html lang="en" ng-app="Foodpedia">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Foodpedia</title>

    <!-- Load Own style CSS -->
    <link rel="stylesheet" href="../css/foodpedia.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!-- Angular Material CSS -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.1/angular-material.min.css">

    <!-- Load Javascript Libraries -->
    <script src="../js/angular/angular.min.js"></script>
    <script src="../js/angular/angular-route.min.js"></script>
    <script src="../js/angular/angular-animate.min.js"></script>
    <script src="../js/angular/angular-aria.min.js"></script>
    <script src="../js/angular/angular-messages.min.js"></script>
    <script src="../js/angular/angular-resource.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.1/angular-material.min.js"></script>

    <!-- Load AngularJS Script -->
    <script src="../angular/app.js"></script>
    <script src="../angular/food/FoodController.js"></script>
    <script src="../angular/foods/FoodsController.js"></script>

  </head>
  <body>

      <!-- nav bar header -->
      <nav class="navbar navbar-light bg-faded navbar-fixed-top" style="background-color:#0091ea; padding-bottom:10px;">
          <div class="container">
              <div class="navbar-header" style="padding-bottom:10px;">
                  <a href="#"class="navbar-brand"style="font-weight:bold; text-transform:uppercase; font-size:22px; display:inline;margin-top:7px; color:#f9f9f9;">
                     <span class="logo-header">
                       <img src="../images/icon.ico" alt="Foodpedia" width="35" height="35" style="margin-right:5px;">
                     </span>
                      Foodpedia
                  </a>
              </div>
          </div>
      </nav>

      <!-- main content and injected view -->
      <div id="main">
          <div ng-view></div>
      </div>

  </body>
</html>
