angular.module('ContactsApp', ['Detail'])

.controller('ContactsCtrl', ['$scope', function($scope) {
  $scope.contacts =
  [
    {
      name: 'John Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    },
    {
      name: 'John Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    },
    {
      name: 'John Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    },
    {
      name: 'John Doe',
      mobile: '+1 (831) 252-2992',
      email: 'jdoe@gmail.com'
    }
  ]
}]);