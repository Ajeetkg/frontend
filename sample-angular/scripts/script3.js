/**
 * Created by agupta2 on 6/15/16.
 */

var myController = function($scope){
    var hostname  =  "https://{0}.use1.informatics.testing-domain.illumina.com/platform-services-admin";
    console.log("Check the URL" ,"{0}.workgroup.illumina.com");

    var newName = hostname.replace('{0}',"ajeet");
    console.log(newName);
    console.log("href value: " + location.href);

    var employee = {
        name: "Ajeet",
        title: "CEO",
        country: "India"
    }
    $scope.employee=employee;
};

var myApp = angular
            .module("myModule4",[])
    .controller("myController", ['$scope', '$location',myController]);


// myApp.controller("myController",myController);