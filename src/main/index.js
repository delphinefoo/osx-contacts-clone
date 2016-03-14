angular.module('ContactsApp', [
  'Detail',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
  ])

.controller('ContactsCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.contacts =
  [
    {
      name: 'John Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    },
    {
      name: 'Jane Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    },
    {
      name: 'Joan Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    },
    {
      name: 'Jack Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    }
  ]

  $scope.changeView = function(view) {
    $location.path(view);
  };

}])

.config(function ( $routeProvider ) {
  $routeProvider
   .when('detail', {
      templateUrl: 'detail/detail.html',
      controller: 'DetailCtrl'
   })
   .when('edit', {
      templateUrl: 'edit/edit.html',
      controller: 'EditCtrl'
   });