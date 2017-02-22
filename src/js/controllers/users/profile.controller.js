angular
  .module('venueApp')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['CurrentUserService', 'Event', 'User', '$stateParams', '$state'];
function UsersProfileCtrl(CurrentUserService, Event, User, $stateParams, $state) {
  const vm = this;

  vm.user = CurrentUserService.currentUser;

  console.log(vm.user);

  vm.delete = function usersDelete() {
    User
      .delete($stateParams)
      .$promise
      .then(() => {
        $state.go('login');
      });
  };
}
