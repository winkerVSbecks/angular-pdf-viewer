angular.module('testApp', ['pdf'])
  .controller('AppCtrl', [
    '$scope',
    'pdfDelegate',
    '$log',
  function($scope, pdfDelegate, $log) {

    $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
    $scope.pdfUrl = '/pdf/relativity.pdf';
    $scope.scroll = 0;
}]);