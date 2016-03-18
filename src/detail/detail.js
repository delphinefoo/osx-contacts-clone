angular.module('ContactsApp.detail', [])

.controller('DetailCtrl', ['$scope',function($scope) {
  console.log($scope.currentContact);
}]);