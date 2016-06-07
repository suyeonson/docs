# Installation and setup
Simpla serves content over a RESTful API to its HTML library, so it can be setup on any stack.

### Install
```comment
Include Simpla from our CDN
```

```html
<script src="https://app.simpla.io"></script>
```

```comment
Or locally via Bower
```

```sh
$ bower install --save simpla
```

Include the [core library](https://github.com/simplaio/simpla) either from our high-redundancy CDN or locally via Bower. 

### Setup

<hr> 

```js
// Init with project key
Simpla('PROJECT-KEY');

// Init with options object
Simpla({
  project: 'PROJECT-KEY'
});

```
<!-- {data-lang="JS"} -->

To boot Simpla call `Simpla()` with your project key, either as a string or a property in an options object.

`Simpla()` returns a client that can be used to interact with Simpla's API. See [Javascript SDK](#javascript-sdk) for more.

## Options

<hr>

```comment
Defaults of Simpla()
```

```js
Simpla({
  project: '',
  elements: {
    base: 'https://elements.simpla.io',
    paths: [
      '/simpla-block/simpla-block.html',
      '/simpla-text/simpla-text.html',
      '/simpla-img/simpla-img.html',
      '/sm-admin/sm-admin.html'
    ]
  }
});
```

Simpla is configurable via the `Simpla()` constructor. You can even define your own API by extending the core SDK at [simplaio/simpla-core](https://github.com/simplaio/simpla-core).

**`project`**

Every Simpla project has an API key associated with it. Simpla can't fetch or save data without a valid project key defined.

**`elements`**

```comment
The elements property can also be given an array of full URLs
```

```js
Simpla({
  elements: [
    'https://elements.simpla.io/simpla-block/simpla-block.html',
    'https://elements.simpla.io/simpla-text/simpla-text.html',
    'https://elements.simpla.io/simpla-img/simpla-img.html',
    'https://elements.simpla.io/sm-admin/sm-admin.html'
  ]
})
```

Simpla's HTML elements need to be loaded onto your page before you can use them. The `elements` property takes either an array of full paths to elements, or an object with a `base` url and an array of relative `paths`.

**Note:** All elements _must_ be loaded from the same place, otherwise dependencies won't be properly resolved.

## Hosting elements locally

<hr>

```comment
Install with bower and change the 'base' property when initializing
```

```sh
$ bower install --save SimplaElements/simpla-block SimplaElements/simpla-text SimplaElements/simpla-img SimplaElements/sm-admin
```

```js
Simpla({
  elements: {
    base: '/bower_components'
  }
});
```

If you're working with [Polymer](https://www.polymer-project.org), serve Simpla's elements locally to avoid dependancy conflicts. Install them with Bower then change the `base` property to your bower components directory.

**Note:** If possible, hotlinking from Simpla's element CDN (`elements.simpla.io`) is highly recommended, since it multiplexes requests over HTTP/2.
