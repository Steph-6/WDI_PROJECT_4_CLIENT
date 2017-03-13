angular
  .module('venueApp')
  .controller('VenuesIndexCtrl', VenuesIndexCtrl);

VenuesIndexCtrl.$inject = ['User'];
function VenuesIndexCtrl(User){
  const vm = this;
  User
  .query().$promise
  .then(users => {
    vm.users = users.filter(user => {
      return user.is_bar === 'yes';
    });
  });
}
