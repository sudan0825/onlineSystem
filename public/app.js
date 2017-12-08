"use strict"

var app = angular.module('myApp', ['ngRoute']);
//, function($compileProvider){
//    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
//}
app.config(['$routeProvider', '$locationProvider', '$compileProvider',function($routeProvider, $locationProvider,$compileProvider){

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|mailto|chrome-extension):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob|mailto|chrome-extension):|data:image\//);

    $routeProvider
        .when('/',{
        templateUrl:'views/brand.html',
    })
        .when('/home',{
        templateUrl:'views/home.html',
    })
        .when('/women',{
        templateUrl:'views/women.html',
    })
        .when('/men',{
        templateUrl:'views/men.html',
    })
        .when('/kids',{
        templateUrl:'views/kids.html',
    })
        .when('/beauty',{
        templateUrl:'views/beauty.html',
    })
        .when('/sale',{
        templateUrl:'views/sale.html',
    })


    $locationProvider.html5Mode(true);
}]);

app.controller('myCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){

    $http({
        method: 'GET',
        url: '/api/display',
        headers: {

        }
    }).then(function (res){

        $scope.mydata=res.data;
        //     $scope.imgsrc=$scope.mydata.data;
        //     
        //       //  console.log($scope.mydata);
        //       





    },function (error){
        var x=JSON.stringify(error);
        console.log('Error ' + x);
    });


    $scope.timeeclipse;
    $scope.md=function(){
        $scope.result=true;


        $scope.timeeclipse=$timeout(function(){
           $scope.myval="please input "
        },1000);

    }
    $scope.kd=function(){
        $timeout.cancel($scope.timeeclipse);


    }
    $scope.kp=function(){
        $scope.timeeclipse=$timeout(function(){
            //             $scope.myval="work function";  
        },1000);
    }
    $scope.leave=function(){
        $scope.result=false;
        $timeout.cancel($scope.timeeclipse);
    }
}]);

//
//
//var timeeclipse;
//
//$("#mysearch").focus(function(){
//    
//    timeeclipse =setTimeout(function(){
//        $("#demo").text("please input a value");
////        var xhp=new XMLHttpRequest();
////        xhp.onreadystatechange=function(){
////          if(this.readyState==4&&this.status==200){
////            
////        }  
////        }
////        xhp.open("GET", "URL", true);
////        XHP.send();
////        
////        
//    },1000);
//    
//}).keydown(function(){
//    var value = $("#myinput").val();
//     $("#demo").text(value);
//     
//     clearTimeout(timeeclipse);
//}).keyup(function(){
//    timeeclipse=setTimeout(function(){
//            var value = $("#mysearch").val();
//           $("#demo").append("<p>The input value is: " + value+ ", now key up exceed the time</p>");
//    },2000);
//}).mouseleave(function(){
////    $("#demo").val("");
//   
//         clearTimeout(timeeclipse);
//    
//   
//    
//})
//
//
