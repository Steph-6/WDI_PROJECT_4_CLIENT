angular
  .module('venueApp')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['CurrentUserService', 'Event', 'User', '$stateParams', '$state', 'Request'];
function UsersProfileCtrl(CurrentUserService, Event, User, $stateParams, $state, Request) {
  const vm = this;

  vm.user     = User.get({id: $stateParams.id})
  Event.query().$promise.then((data)=>{
    vm.events = data;
    console.log(vm.events);
  });

  // console.log(vm.user);

  vm.delete = function usersDelete() {
    User
      .delete($stateParams)
      .$promise
      .then(() => {
        $state.go('login');
      });
  };
}
