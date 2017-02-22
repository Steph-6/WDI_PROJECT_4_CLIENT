angular
  .module('venueApp')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['CurrentUserService', 'User', '$stateParams', '$state'];
function UsersProfileCtrl(CurrentUserService, User, $stateParams, $state) {
  const vm = this;

  vm.user = CurrentUserService.currentUser;

  vm.delete = function usersDelete() {
    User
      .delete($stateParams)
      .$promise
      .then(() => {
        console.log(`deleted ${vm.user}`);
        $state.go('login');
      });
  };
}
