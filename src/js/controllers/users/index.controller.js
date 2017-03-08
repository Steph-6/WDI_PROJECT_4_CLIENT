angular
  .module('venueApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', 'CurrentUserService'];
function UsersIndexCtrl(User, CurrentUserService){
  const vm = this;

  // User
  //   .get({id: CurrentUserService.currentUser.id})
  //   .$promise
  //   .then(data => {
  //     vm.user = data;
  //     console.log(vm.user, 'current user');
  //   });

  vm.users = User.query();
}
