angular
  .module('venueApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user    = CurrentUserService.currentUser;
    console.log(vm.user, 'main user');
    vm.hasUser = true;
    $state.go('users');
  });

  $rootScope.$on('loggedOut', () => {
    vm.user    = null;
    vm.hasUser = false;
  });

  vm.logout = () => {
    console.log('logging out');
    CurrentUserService.removeUser();
  };

}
