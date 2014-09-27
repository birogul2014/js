angular.module('website', []).
config(function ($routeProvider) {
 $routeProvider.
  when('/home', {templateUrl:'partials/home.html' }).
  when('/object', {templateUrl:'partials/object.html'}).
when('/funkisya', {templateUrl:'partials/funkisya.html'}).
when('/array', {templateUrl:'partials/array.html'}).
when('/tiplar', {templateUrl:'partials/types.html'}).
when('/typeof', {templateUrl:'partials/typeof.html'}).
when('/instance', {templateUrl:'partials/instanceof.html'}).
  otherwise({redirectTo:'/home', templateUrl:'partials/home.html'});
});

function MainControler($scope, $location, $routeParams) {
    $scope.setRoute = function(route) {
    $location.path(route);
  };
}

function ControllerCntl($scope, $routeParams) {
  $scope.name = "ControllerCntl";
  $scope.params = $routeParams;
  $scope.loc = document.location.href;
}