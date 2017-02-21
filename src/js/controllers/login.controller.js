angular
  .module('venueApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService'];
function LoginCtrl(User, CurrentUserService) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(() => {
        console.log('logging in');
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      });
  };
}
