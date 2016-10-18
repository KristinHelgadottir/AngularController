var app = angular.module('viewApp', ['ngRoute']); // injecting third party module: ng-route, remember to include of angular route

app.config(function ($routeProvider) // injection of routprovider
{
  $routeProvider
    .when("/home", {
      templateUrl: "views/home.html",
      controller: "HomeController"
    })
     .when("/persons", {
      templateUrl: "views/persons.html",
      controller: "PersonController"
    })
    .when("/info/:index", {
      templateUrl: "views/personDetails.html",
      controller: "PersonController"
    })
    .otherwise({
      redirectTo: "/home"
    })
})

app.controller("HomeController",function($scope){
  $scope.home = "Home View for this site";
})

app.controller("PersonController", function($scope, $routeParams)
{
    $scope.persons = "Our Persons";

   $scope.persons = 
    [
        {id: 1, name: "Jonas", age: 21},
        {id: 2, name: "Angeline", age: 15},
        {id: 3, name: "Moe", age: 54}
    ];
    if (angular.isDefined($routeParams.index)) 
    {
      var i = $routeParams.index;
      $scope.person = $scope.persons[i];
    }
});
