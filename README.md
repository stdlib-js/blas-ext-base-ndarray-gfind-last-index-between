<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gfindLastIndexBetween

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the index of the last element in a one-dimensional ndarray which passes a test implemented by a predicate function within a specified range.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-ndarray-gfind-last-index-between
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var gfindLastIndexBetween = require( '@stdlib/blas-ext-base-ndarray-gfind-last-index-between' );
```

#### gfindLastIndexBetween( arrays, clbk\[, thisArg] )

Returns the index of the last element in a one-dimensional ndarray which passes a test implemented by a predicate function within a specified range.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var vector = require( '@stdlib/ndarray-vector-ctor' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = vector( [ 2.0, 1.0, 3.0, 4.0, 5.0 ], 'generic' );

var fromIndex = scalar2ndarray( 4, {
    'dtype': 'generic'
});

var toIndex = scalar2ndarray( 1, {
    'dtype': 'generic'
});

var idx = gfindLastIndexBetween( [ x, fromIndex, toIndex ], isEven );
// returns 3
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the index from which to begin searching.
    -   a zero-dimensional ndarray containing the index at which to stop searching (exclusive).

-   **clbk**: callback function.

-   **thisArg**: callback execution context (_optional_).

The callback function is provided the following arguments:

-   **value**: current array element.
-   **idx**: current array element index.
-   **array**: the input ndarray.

If no element passes a test implemented by a predicate function, the function returns `-1`.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var vector = require( '@stdlib/ndarray-vector-ctor' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = vector( [ 2.0, 1.0, 3.0, 5.0, 7.0 ], 'generic' );

var fromIndex = scalar2ndarray( 4, {
    'dtype': 'generic'
});

var toIndex = scalar2ndarray( 1, {
    'dtype': 'generic'
});

var idx = gfindLastIndexBetween( [ x, fromIndex, toIndex ], isEven );
// returns -1
```

To set the callback execution context, provide a `thisArg`.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var vector = require( '@stdlib/ndarray-vector-ctor' );

function isEven( v ) {
    this.count += 1;
    return v % 2.0 === 0.0;
}

var x = vector( [ 2.0, 1.0, 3.0, 4.0, 5.0 ], 'generic' );
var ctx = {
    'count': 0
};

var fromIndex = scalar2ndarray( 4, {
    'dtype': 'generic'
});

var toIndex = scalar2ndarray( 1, {
    'dtype': 'generic'
});

var v = gfindLastIndexBetween( [ x, fromIndex, toIndex ], isEven, ctx );
// returns 3

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `-1`.
-   If a specified starting search index is negative, the function resolves the starting search index by counting backward from the last element (where `-1` refers to the last element).
-   If a specified ending search index is negative, the function resolves the ending search index by counting backward from the last element (where `-1` refers to the last element).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var gfindLastIndexBetween = require( '@stdlib/blas-ext-base-ndarray-gfind-last-index-between' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var fromIndex = scalar2ndarray( 8, {
    'dtype': 'generic'
});

var toIndex = scalar2ndarray( 2, {
    'dtype': 'generic'
});

var idx = gfindLastIndexBetween( [ x, fromIndex, toIndex ], isEven );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-gfind-last-index-between.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-gfind-last-index-between

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index-between/main/LICENSE

</section>

<!-- /.links -->
