angular.module('pdf')
  .directive('pdfViewer', [
    '$window',
    '$log',
    'pdfDelegate',
  function($window, $log, pdfDelegate) {
    return {
      restrict: 'E',
      template: '<pdf-viewer-toolbar ng-if="showToolbar" delegate-handle="{{id}}" page-count="pageCount"></pdf-viewer-toolbar><canvas></canvas>',
      scope: true,
      delegateHandle: '@',
      controller: 'PdfCtrl',
      link: function(scope, element, attrs) {
        scope.id = scope.delegateHandle;
        console.log('pdfViewer id: ', scope.id);
        scope.showToolbar = scope.$eval(attrs.showToolbar) || false;
      }
    };
}]);
