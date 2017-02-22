angular
  .module('venueApp')
  .controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function EventsNewCtrl(User, CurrentUserService, $state) {
  const vm = this;
  const today = new Date();
  vm.today = today.toDateString();

  vm.create = function eventsCreate(){
    console.log('creating');
    Event
      .new({ event: { date: vm.events.date, duration: vm.duration }})
      .$promise
      .then(() => {
        $state.go('profile');
      });
  };
}
