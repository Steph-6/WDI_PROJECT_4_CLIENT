angular
  .module('venueApp')
  .controller('ReqIndexCtrl', ReqIndexCtrl);

ReqIndexCtrl.$inject = [];
function ReqIndexCtrl(){
  const vm = this;
  vm.requests = Request.query();
}
