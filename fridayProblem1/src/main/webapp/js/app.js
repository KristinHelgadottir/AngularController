var app = angular.module('viewApp', ['ngRoute']); // injecting third party module: ng-route, remember to include of angular route

app.config(function ($routeProvider) // injection of routprovider
{
  $routeProvider
    .when("/home", 
    {
      templateUrl: "views/home.html",
      controller: "HomeController"
    })
    .when("/newPerson",
    {
       templateUrl: "views/newPerson.html",
       controller: "PersonController"
    })
    .when("/persons", 
    {
      templateUrl: "views/persons.html",
      controller: "PersonController"
    })
    .when("/name/:index", 
    {
      templateUrl: "views/personDetails.html",
      controller: "PersonController"
    })
     .when("/cars",
    {
       templateUrl: "views/cars.html",
       controller: "CarController"
    })
    .when("/brand/:index",
    {
        templateUrl: "views/carDetail.html",
        controller: "CarController"
    })
    .otherwise(
    {
      redirectTo: "/home"
    })
})

app.controller("HomeController",function($scope)
{
  $scope.home = "This is Kristín's page";
})

app.controller("CarController", function($scope, $routeParams)
{
    $scope.cars = "These cars";
    $scope.cars =
    [
        {id: 1, brand: "Chevrolett", driven: 25000, model: "Camaro", year: 1998},
        {id: 2, brand: "Toyota", driven: 130000, model: "Aygo", year: 2010},
        {id: 3, brand: "Fiat", driven: 122000, model: "Uno", year: 1986},
        {id: 4, brand: "Ford", driven: 12000, model: "Mondeo", year: 2015},
    ];
    
    if (angular.isDefined($routeParams.index))
    {
        var i = $routeParams.index;
        $scope.car = $scope.cars[i];
    }
    
})

app.controller("PersonController", function($scope, $routeParams)
{
   var uId = 1;
    $scope.persons = "Our Persons";
    $scope.persons = 
    [
        {id: 2, name: "Jonas", age: 21},
        {id: 3, name: "Angeline", age: 15},
        {id: 4, name: "Moe", age: 54}
    ];
    
    if (angular.isDefined($routeParams.index)) 
    {
      var i = $routeParams.index;
      $scope.person = $scope.persons[i];
    }
    
    $scope.save = function()
    {
        if ($scope.newbee.id == null)
        {
            $scope.newbee.id = uId++;
            $scope.persons.push($scope.newbee);
        }else
        {
            for (var i in $scope.persons)
            {
                if ($scope.persons[i].id == $scope.newbee.id)
                {
                    $scope.persons[i] = $scope.newbee;
                }
            }
        }
        $scope.newbee = {};
    }
});
