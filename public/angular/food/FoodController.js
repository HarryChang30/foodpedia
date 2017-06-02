app.controller('FoodController' , function($scope , $http , $location , $routeParams , API_URL){

      //set current page for pagination purpose
      $scope.food_id = $routeParams.foodID;
      $scope.food_name = "";
      $scope.food_author = "";
      $scope.food_overview = "";
      $scope.food_create_date = "";

      //modal title
      $scope.modal_title = "Add a new Description for " + $scope.food_name;
      $scope.modal_button = "Add Description";

      //pagination
      $scope.currentPage = 1;
      $scope.lastPage = 1;
      $scope.loadMoreText = 'Load More Descriptions...';

      //retrieve information about food based on foodID
      $http.get(API_URL + "foods/" + $scope.food_id).success(function(response){
          $scope.food_name = response.name;
          $scope.food_author = response.author;
          $scope.food_overview = response.overview;
          $scope.food_create_date = response.created_at;

          //get description from API after get food
          $http.get(API_URL + "foods/" + $scope.food_id + "/description").success(function(response){
              $scope.descriptions = response.data;
              $scope.currentPage = response.current_page;
              $scope.lastPage = response.last_page;

              if($scope.currentPage >= $scope.lastPage){
                  $scope.loadMoreText = 'All Descriptions Loaded!';
              }

          }).error(function(response){

              $scope.error_message = 'Failed to load descriptions record';
              $('#errorModal').modal('show');

              setTimeout(function(){
                  $('#errorModal').modal('hide');
              } , 2000);
          });

      }).error(function(response){
          //redirect to the main page
          $scope.loadFoodsPage();
      });

      //infinite scroll of the food descriptions
      $scope.loadMoreDescriptions = function(){

          $scope.currentPage++;

          $http.get(API_URL + "foods/" + $scope.food_id + "/description" , {params: {page : $scope.currentPage }}).success(function(response){
              $scope.descriptions = $scope.descriptions.concat(response.data);
              $scope.currentPage = response.current_page;
              $scope.lastPage = response.last_page;

              if($scope.currentPage >= $scope.lastPage){
                 $scope.loadMoreText = 'All Descriptions Loaded!';
              }

          }).error(function(response){

              $scope.error_message = 'Failed to load descriptions record';
              $('#errorModal').modal('show');

              setTimeout(function(){
                  $('#errorModal').modal('hide');
              } , 2000);

          });
      }

      //confirm delete modal
      $scope.confirmDelete = function(descriptionID){

          var url = API_URL + "foods/" + $scope.food_id + "/description/" + descriptionID;
          $('#deleteModal').modal('show');

          $scope.closeDelete = function(){
              $('#deleteModal').modal('hide');
          }


          $scope.saveDelete = function(){

              $http({
                 method : 'DELETE',
                 url : url
              }).success(function(response){
                 $('#deleteModal').modal('hide');
                 $scope.success_message = "Delete Record Description Success!";

                 $http.get(API_URL + "foods/" + $scope.food_id + "/description").success(function(response){
                     $scope.descriptions = response.data;
                     $scope.currentPage = response.current_page;
                     $scope.lastPage = response.last_page;

                     if($scope.currentPage >= $scope.lastPage){
                         $scope.loadMoreText = 'All Descriptions Loaded!';
                     }

                 }).error(function(response){

                     $scope.error_message = 'Failed to load descriptions record';
                     $('#errorModal').modal('show');

                     setTimeout(function(){
                         $('#errorModal').modal('hide');
                     } , 2000);
                 });


                 $('#successModal').modal('show');

                 setTimeout(function(){
                    $('#successModal').modal('hide');
                 } , 1000);


              }).error(function(response){


                $scope.error_message = 'Failed to delete descriptions record';
                $('#errorModal').modal('show');

                setTimeout(function(){
                    $('#errorModal').modal('hide');
                } , 2000);


              });
          }
      }

      //add description
      $scope.addDescription = function(descriptionID){
           var url = API_URL + "foods/" + $scope.food_id + "/description";
           if($scope.modal_button === "Edit Description"){

              url += "/" + descriptionID;


              $http({
                 method : 'PUT',
                 url : url,
                 data : $.param($scope.description),
                 headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
              }).success(function(response){

                 $scope.success_message = "Update Record Description Success!";

                 $http.get(API_URL + "foods/" + $scope.food_id + "/description").success(function(response){
                     $scope.descriptions = response.data;
                     $scope.currentPage = response.current_page;
                     $scope.lastPage = response.last_page;

                     if($scope.currentPage >= $scope.lastPage){
                         $scope.loadMoreText = 'All Descriptions Loaded!';
                     }

                 }).error(function(response){

                     $scope.error_message = 'Failed to load descriptions record';
                     $('#errorModal').modal('show');

                     setTimeout(function(){
                         $('#errorModal').modal('hide');
                     } , 2000);
                 });


                 $('#descriptionModal').modal('hide');
                 $('#successModal').modal('show');

                 setTimeout(function(){
                    $('#successModal').modal('hide');
                 } , 1000);

              }).error(function(response){

                  $scope.error_message = "Update Record Description Failed!";

                  $('#descriptionModal').modal('hide');
                  $('#errorModal').modal('show');

                  setTimeout(function(){
                      $('#errorModal').modal('hide');
                  } , 2000);

              });


           }else{

               $http({
                  method : 'POST',
                  url : url,
                  data : $.param($scope.description),
                  headers : {'Content-Type': 'application/x-www-form-urlencoded'}
               }).success(function(response){

                  $scope.success_message = "Add Record Description Success!";

                  $http.get(API_URL + "foods/" + $scope.food_id + "/description").success(function(response){
                      $scope.descriptions = response.data;
                      $scope.currentPage = response.current_page;
                      $scope.lastPage = response.last_page;

                      if($scope.currentPage >= $scope.lastPage){
                          $scope.loadMoreText = 'All Descriptions Loaded!';
                      }

                  }).error(function(response){

                      $scope.error_message = 'Failed to load descriptions record';
                      $('#errorModal').modal('show');

                      setTimeout(function(){
                          $('#errorModal').modal('hide');
                      } , 2000);
                  });

                  $('#descriptionModal').modal('hide');
                  $('#successModal').modal('show');

                  setTimeout(function(){
                     $('#successModal').modal('hide');
                  } , 1000);

               }).error(function(response){

                  $scope.error_message = "Add Record Description Failed!";

                  $('#descriptionModal').modal('hide');
                  $('#errorModal').modal('show');

                  setTimeout(function(){
                    $('#errorModal').modal('hide');
                  } , 2000);

               });


           }

      }

      //show modal
      $scope.showModal = function(action,descriptionID){

          switch(action){

              case 'edit' :
                $scope.modal_title = "Edit Description for " + $scope.food_name;
                $scope.modal_button = "Edit Description";
                $http.get(API_URL + "foods/" + $scope.food_id + "/description/" + descriptionID).success(function(response){
                    $scope.description = response;
                })
              break;

              case 'add' :
                $scope.description = null;
                $scope.modal_title = "Add a new Description for " + $scope.food_name;
                $scope.modal_button = "Add Description";
              break;
          }

          $('#descriptionModal').modal('show');
      }

      //close modal
      $scope.closeModal = function(response){
          $('#descriptionModal').modal('hide');
      }

      //back to page foods
      $scope.loadFoodsPage = function(){
          $location.path("foods");
      }
});
