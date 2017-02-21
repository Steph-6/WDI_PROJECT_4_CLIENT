angular
  .module('venueApp')
  .controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function EventsNewCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.create = function eventsCreate(){
    return Event
      .save({ event: { date: vm.events.date }})
      .$promise
      .then(() => {
        console.log(`${vm.events.date}`);
        $state.go('profile');
      });
  };
}
