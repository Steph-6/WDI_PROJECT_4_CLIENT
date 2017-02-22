angular
  .module('venueApp')
  .factory('Event', eventFactory);

eventFactory.$inject = ['$resource', 'API'];
function eventFactory($resource, API){
  return $resource(`${API}/events/:id`, { id: '@_id'},
    { 'new': { method: 'POST', url: `${API}/events`}});
}
