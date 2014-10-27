angular.module('testApp', ['pdf'])
  .controller('AppCtrl', [
    '$scope',
    'pdfDelegate',
  function($scope, pdfDelegate) {
    $scope.pdfUrl = 'pdf/relativity.pdf';
}]);