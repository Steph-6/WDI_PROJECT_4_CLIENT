angular
  .module('venueApp')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', 'CurrentUserService', '$state', '$stateParams'];
function UsersEditCtrl(User, CurrentUserService, $state, $stateParams) {
  const vm = this;
  vm.user = User.get($stateParams);

  vm.update = () => {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then((data) => {
        console.log(data);
        $state.go('show');
      });
  };
}
