angular
.module('venueApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['CurrentUserService', 'User', '$stateParams', '$state'];
function UsersShowCtrl(CurrentUserService, User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);
  console.log(vm.user);

  vm.delete = function usersDelete() {
    User
    .delete($stateParams)
    .$promise
    .then(() => {
      console.log(`deleted ${vm.user}`);
      $state.go('users');
    });
  };
}
