angular.module('testApp', ['pdf'])
  .controller('AppCtrl', [
    '$scope',
    'pdfDelegate',
    '$timeout',
  function($scope, pdfDelegate, $timeout) {
    $scope.pdfUrl = 'pdf/material-design.pdf';

    $scope.loadNewFile = function(url) {
      pdfDelegate
        .$getByHandle('my-pdf-container')
        .load(url);
    };
}]);