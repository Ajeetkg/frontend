var directiveModule = angular
            .module("directiveModule",[]);

var directiveController = function($scope){
    var employee = {
        name: "Narendra Modi",
        title: "Prime-minister",
        country: "India"
    }
    $scope.employee=employee;
};


directiveModule.controller("directiveController", ['$scope', directiveController]);
directiveModule.directive('mySharedScope', function(){
    return {
        restrict: 'EA',  //E = element, A = attribute, C = class, M = comment     
        template: 'Name: {{ employee.name }} <br/> Title: {{ employee.title }}',
        //templateUrl: 'myDirectiveTemplate.html',
        controller: directiveController
    }
});