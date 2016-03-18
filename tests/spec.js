describe('Unit: ContactsApp', function() {
  beforeEach(module('ContactsApp'));
  beforeEach(module('ContactsApp.edit'));
  beforeEach(module('ContactsApp.detail'));
  beforeEach(module('$routeProvider'));

  describe('Edit controller', function() {
    var $_controller
    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;
    }));


    var john = {
      name: 'John Bucklin',
      phone: '+1 (808) 666-6666',
      email: 'jbucklin@yahoo.com'
    }



    it('should expose the current contact\'s information', function() {
      var $scope = {};
      var controller = $controller('ContactsCtrl', { $scope: $scope });
      expect($scope.contacts.length).toBe(4);
      // expect(scope.viewDetail(john).name).toEqual('John Bucklin');
    })

  });
});