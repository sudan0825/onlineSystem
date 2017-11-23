var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
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
});

app.controller('myCtrl', ['$scope', '$http', function($scope, $http){
   
    $scope.showContent=function(myflag){
         $scope.myflag=true;
       
    }
//    
//     $http({
//      method: 'GET',
//      url: '/api/display',
//      headers: {
//           
//      }
//   }).then(function (res){
//         
//         $scope.mydata=res.data;
//         $scope.imgsrc=$scope.mydata[1].image;
////        $scope.encodedImage = Base64.encode(res);
//       //  console.log($scope.mydata);
//          console.log($scope.imgsrc);
//         
//         
//        
//
//   },function (error){
//        var x=JSON.stringify(error);
//      console.log('Error ' + x);
//   });
}])

