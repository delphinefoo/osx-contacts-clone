angular.module('ContactsApp', [
  'ContactsApp.detail',
  'ContactsApp.edit',
  'ngRoute'
  ])

.config(['$routeProvider', function ( $routeProvider ) {
  $routeProvider
   .when('/detail', {
      templateUrl: 'detail/detail.html',
      controller: 'DetailCtrl'
   })
   .when('edit', {
      templateUrl: 'edit/edit.html',
      controller: 'EditCtrl'
   })
}])

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
  ];

  $scope.showAdd = false;

  $scope.viewDetail = function(contact) {
    $location.path('detail');
    $scope.currentContact = contact;
  };

}]);

