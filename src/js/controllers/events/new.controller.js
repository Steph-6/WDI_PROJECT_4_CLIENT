angular
  .module('venueApp')
  .controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['Event', 'CurrentUserService', '$state'];
function EventsNewCtrl(Event, CurrentUserService, $state) {
  const vm = this;
  // const today = new Date();
  // vm.today = today.toDateString();

  vm.create = function eventsCreate(){
    console.log('creating');
    Event
      .new({ slot: { date: vm.date, duration: vm.duration }})
      .$promise
      .then(() => {
        $state.go('profile');
      });
  };
}
