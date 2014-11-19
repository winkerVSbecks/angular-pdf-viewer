angular.module('testApp', ['pdf'])
  .controller('AppCtrl', [
    '$scope',
    'pdfDelegate',
    '$timeout',
  function($scope, pdfDelegate, $timeout) {
    $scope.pdfUrl = 'pdf/relativity.pdf';

    $scope.loadNewFile = function() {
      pdfDelegate
        .$getByHandle('my-pdf-container')
        .load('pdf/material-design.pdf');
    };
}]);