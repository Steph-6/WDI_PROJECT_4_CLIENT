angular
  .module('venueApp')
  .factory('Event', eventFactory);

eventFactory.$inject = ['$resource', 'API'];
function eventFactory($resource, API){
  return $resource(`${API}/users/:id`, { id: '@_id'},
    { 'new': { method: 'POST', url: `${API}/events`}});
}
