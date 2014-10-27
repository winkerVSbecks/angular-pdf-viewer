# Angular PDF Viewer

Version: 0.1.0

An AngularJS directive to display PDFs.


## Dependencies

1. [AngularJS](http://angularjs.org/)
1. [PDFJS](http://mozilla.github.io/pdf.js/)


## Usage

1. `bower install angular-pdf-viewer`

2. Include the path to the lib:

```
<script src="js/vendor/angular-pdf/dist/angular-pdf-viewer.min.js"></script>
```

3. Include the lib as a dependency in your angular app:

```
var app = angular.module('App', ['pdf']);
```


## Directive

The URL, scale and delegate-handle can be set using the attributes:

```
<pdf-viewer
    delegate-handle="relativity-special-general-theory"
    url="pdfUrl"
    scale="1"></pdf-viewer>
```


### Delegate Service (pdfDelegate)

The pdfDelegate service allows you to access and control individual instances of a directive. This allows us to have multiple instances of the same directive in the same controller.

Inject the `pdfDelegate` service into your controller. You can then fetch an instance using it's delegate handle and call methods on it:

```
pdfDelegate.$getByHandle('relativity-special-general-theory').zoomIn();
```

The following methods are available to the delegate:
- prev
- next
- zoomIn
- zoomOut
- rotate *(clockwise by 90 degrees)*
- getPageCount
- getCurrentPage
- goToPage(pageNumber)


## Similar projects

1. [angularjs-pdf](https://github.com/sayanee/angularjs-pdf)
2. [ng-pdfviewer](https://github.com/akrennmair/ng-pdfviewer)


## Credit

PDF example used is [Relativity: The Special and General Theory by Albert Einstein](http://www.gutenberg.org/ebooks/30155) as kindly organized and made available free by [Project Gutenberg](http://www.gutenberg.org/wiki/Main_Page).