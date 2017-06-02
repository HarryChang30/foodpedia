app.controller('FoodsController' , function($scope , $http , $location , API_URL){

    //pagination
    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    $scope.foodItem = 0;

    $scope.range = function(){
        var rangeSize = 4;
        var ps = [];
        var start;

        start = $scope.currentPage;
        if(start > $scope.pageCount() - rangeSize){
            start = $scope.pageCount() - rangeSize + 1;
        }

        for(var i = start; i < start+rangeSize; i++){
            if(i >= 0){
               ps.push(i);
            }
        }

        return ps;
    }

    $scope.prevPage = function(){
        if($scope.currentPage > 0){
            $scope.currentPage--;
        }
    }

    $scope.DisablePrevPage = function(){
        return $scope.currentPage === 0 ? "disabled" : "";
    }

    $scope.nextPage = function(){
        if($scope.currentPage < $scope.pageCount()){
            $scope.currentPage++;
        }
    }

    $scope.DisableNextPage = function(){
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    }

    $scope.pageCount = function(){
        return Math.ceil($scope.foodItem/$scope.itemsPerPage)-1;
    }

    $scope.setPage = function(n){
        $scope.currentPage = n;
    }

    //retrieve all foods
    $http.get(API_URL + "foods").success(function(response){
        $scope.foods = response;
        $scope.foodItem = response.length;
    });

    var modalstates = "";

    //toggle modal add
    $scope.toggle = function(modalstate,id){
        modalstates = modalstate;

        if(modalstates === 'add'){
            $scope.form_title = 'Add New Food to Database';
            $scope.food = "";
        }

        $('#foodModal').modal('show');
    }

    //save food data to Database
    $scope.save = function(){
        var url = API_URL + "foods";
        $http({
            method: 'POST',
            url: url,
            data:$.param($scope.food),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response){
            $scope.success_message = 'Add Record Successfully';
            $('#foodModal').modal('hide');
            $('#successModal').modal('show');

            setTimeout(function(){
                $('#successModal').modal('hide');
            } , 1000);


            $http.get(API_URL + "foods").success(function(response){
                $scope.foods = response;
            });


        }).error(function(response){

            $scope.error_message = 'Failed to save record';
            $('#foodModal').modal('hide');
            $('#errorModal').modal('show');

            setTimeout(function(){
                $('#errorModal').modal('hide');
            } , 1000);

        });
    }

    //load page for individual food
    $scope.loadFoodPage = function(id){
       $location.path("food/" + id);
    }

});
