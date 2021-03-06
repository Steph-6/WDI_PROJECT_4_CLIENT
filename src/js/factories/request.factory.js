angular
  .module('venueApp')
  .factory('Request', requestFactory);

requestFactory.$inject = ['$resource', 'API'];
function requestFactory($resource, API){
  return $resource(`${API}/requests/:id`, { id: '@_id'}, {
    accept: { method: 'PUT', url: `${API}/requests/accept/:id`},
    reject: { method: 'PUT', url: `${API}/requests/reject/:id`},
    delete: { method: 'DELETE', url: `${API}/requests/:id`}
  });
}
