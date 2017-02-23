angular
  .module('venueApp')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['TokenService', 'API'];
function AuthInterceptor(TokenService, API) {
  return {
    request(config) {
      if (config.url.includes(API)) {
        const token = TokenService.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    response(res) {
      if (res.data.token) {
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}
