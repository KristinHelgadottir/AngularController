
var app = angular.module('viewApp', ['ngRoute']); // injecting third party module: ng-route, remember to include of angular route
// Route Provider Start
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
    .when("/company", {
      template: "<h2 style='margin:20px;'>General Info about the Company</h2>",
      controller: "CompanyController"
    })
    .when("/blog", {
      template: "<h2 style='margin:20px;'>Our great Company Blog</h2>"
      //controller: "BlogController"
    })
    .when("/info/:index", {
      templateUrl: "views/bookdetail.html",
      controller: "ProductController"
    })
    .otherwise({
      redirectTo: "/home"
    })
})
// Route Provider End

// Controllers Start
app.controller("HomeController",function($scope){
  $scope.home = "Home View for this site";
})

app.controller("CompanyController",function($scope){
  $scope.Company = "General info about the company";
})

app.controller("BlogController",function($scope){
  $scope.blog = "Blog for this site";
})


app.factory("personList",function()
{  
    var persons = [
        {id: 1, name: "Jonas", age: 21},
        {id: 2, name: "Angeline", age: 15},
        {id: 3, name: "Moe", age: 54}
    ];
  return {
    getAll : function(){ return persons; },
    addPerson : function(person){persons.push(person);},
    getTotal : function(){return persons.length;}
  };
});

app.controller('PersonController', function ($scope, $routeParams,personList) {
  $scope.persons = "Persons";
  $scope.persons = personList.getAll();
  personList.addPerson({id: "xxx", info: "Study hard"});

  if (angular.isDefined($routeParams.index)) {
    var i = $routeParams.index;
    $scope.person = $scope.persons[i];
  }
});
// Controllers End