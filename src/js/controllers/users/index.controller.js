angular
  .module('venueApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User){
  const vm = this;
  User
  .query().$promise
  .then(users => {
    vm.users = users.filter(user => {
      return user.is_bar === 'no';
    });
  });
}
