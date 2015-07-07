// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).
        when('/services', {
            templateUrl: 'views/template.html',
            controller: 'services'
        }).
        when('/portfolio', {
            templateUrl: 'views/template.html',
            controller: 'portfolio'
        }).
        when('/contact', {
            templateUrl: 'views/template.html',
            controller: 'contact'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

firstapp.filter('rawHtml', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);

function splitarray(fullarray, splitsize) {
    var newarray = [];
    var k = 0;
    for (var i = 0; i < fullarray.length; i++) {
        var arrindex = Math.floor(i / splitsize);
        console.log(arrindex);
        if ((newarray.length - 1) != arrindex) {
            newarray[arrindex] = [];
        }
        newarray[arrindex].push(fullarray[i]);
    }
    return newarray;
};