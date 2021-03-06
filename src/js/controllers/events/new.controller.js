angular
  .module('venueApp')
  .controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['Event', 'CurrentUserService', '$state', '$stateParams'];
function EventsNewCtrl(Event, CurrentUserService, $state, $stateParams) {
  const vm = this;

  vm.create = function eventsCreate(){
    Event
      .save(vm.event)
      .$promise
      .then(() => {
        $state.go('profile', {id: $stateParams.id});
      });
  };
}
