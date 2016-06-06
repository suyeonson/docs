# Quick start
Simpla is a content management API that lets developers create dynamic content in pure HTML and update it inline.

[download sample template](https://github.com/simplaio/sample-template/archive/master.zip) <!-- {.button} -->

### Setup a project
```comment
Include this snippet in your <head>
```

```html
<script src="https://app.simpla.io"></script>
<script>
  // TODO: Enter project key
  Simpla('PROJECT-KEY');
</script>
```

Login to your [dashboard](https://www.simpla.io/projects) and create a project, then include the Simpla library in your HTML document and call `Simpla()` with your project's API key.

### Use the elements
Drop Simpla's elements into your code wherever you want editable content.

Use `<simpla-text>` for editable text:

```comment
Use simpla-text for editable text
```

```html
<simpla-text sid="text"></simpla-text>
```

<simpla-text sid="example-text" class="simpla-example" editable></simpla-text>

Use `<simpla-img>` for editable images:

```comment
Use simpla-img for editable images
```

```html
<simpla-img sid="img"></simpla-img>
```

<simpla-img sid="example-img" class="simpla-example" editable></simpla-img>

All Simpla elements must have a unique _Content ID_ (usually contained in the `sid` attribute) and both opening and closing HTML tags.

### Create content
Open your page in a browser, add `#edit` to the end of the URL (eg: `https://mysite.com#edit`), and login to start editing your content. When you're finished press save to publish your changes. Remove `#edit` from the URL to exit edit mode.

# Concepts
Simpla is very different to legacy CMSs. Content is served from the cloud over a RESTful API, to a library of new HTML elements that you use to create, structure, and manipulate data in your code.

## Web Components
At Simpla's core is an ecosystem of new HTML elements, like `<simpla-text>` and `<simpla-img>`. They exist as legitimate HTML on your site, thanks to an emerging family of standards called [Web Components](https://www.w3.org/wiki/WebComponents/). Web Components allows us to register custom elements on a page that are fully interoperable with the browser's built-in elements. 

The elements have their own UI and logic, fully encapsulated in the [Shadow DOM](http://webcomponents.org/articles/introduction-to-shadow-dom/), allowing Simpla to exist inline on your site without interferring with any of your code.

### Using the elements
Simpla's elements require both opening and closing tags, even if they are effectively void (eg: simpla-text and simpla-img).

```comment
Set element properties as attributes
```

```html
<simpla-text sid="text" inline></simpla-text>    
```

```comment
Or with Javascript
```

```js
var text = document.querySelector('simpla-text');
text.inline = true;
```

Properties can be set as HTML attributes or with Javascript. If a property name is multi-word, it's kebab cased in HTML (eg: `my-property`), and camel cased in Javascript (eg: `myProperty`).


## Content API
Your content is stored securely in the cloud and served through a RESTful API to Simpla's HTML elements. Simpla isn't involved in presentation, it doesn't require page templates or knowledge of how your project works. You can pull content from Simpla's API to use anywhere (see [Javascript SDK](#javascript-sdk)).

## Inline editing
Simpla doesn't have any admin areas or forms. Content is contained inside the new HTML elements, so you can edit everything inline, and it stays strictly structured.
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

Every Simpla project has an API key associated to it. Simpla can't fetch or save data without a valid project key defined.

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

**Note:** All elements _must_ be loaded from the same place, otherwise dependencies wont be properly resolved.

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

If you're working with [Polymer](https://www.polymer-project.org) serve Simpla's elements locally to avoid dependancy conflicts. Install them with Bower then change the `base` property to your bower components directory.

**Note:** If possible, hotlinking from Simpla's element CDN (`elements.simpla.io`) is highly recommended, since it multiplexes requests over HTTP/2.

# Editable text

```comment
Simpla-text can be a container or inner content
```

```html
<simpla-text sid="text-container"></simpla-text>
<h1><simpla-text sid="text-content"></simpla-text></h1>
```

`<simpla-text>` contains editable rich-text. You can use it as a standalone container or as the content inside other textual elements (eg: headings).

<simpla-text sid="example" class="simpla-example" editable></simpla-text>

## Options 

### Inline mode
```comment
Force line-breaks with the 'inline' property
```

```html
<simpla-text sid="inline-text" inline></simpla-text>
```

By default simpla-text creates paragraphs for new lines. You can disable paragraphs and force line-breaks instead with the `inline` property. Inline mode is automatically enabled when simpla-text is used inside other textual elements (eg: headings).

### Placeholders
```comment
Set a custom placeholder with the 'placeholder' property
```

```html
<simpla-text sid="title" placeholder="Start typing..."></simpla-text>
```

Simpla-text shows a placeholder in edit mode when it has no content. You can customize the default placeholder with the `placeholder` property.
# Editable images
```comment
Simpla-img is an editable image
```

```html
<simpla-img sid="img"></simpla-img>
```

`<simpla-img>` is an editable image. Use it in place of static the HTML `<img>` element.

<simpla-img sid="example" class="simpla-example" editable></simpla-img>

**Note:** Currently setting `width` and `height` attributes directly on a `<simpla-img>` is not supported, sizing must be done via CSS.

## Options

### Popout mode
If a `<simpla-img>` is partially off-screen whilst editing it will 'pop' into view when clicked.

```comment
Force a simpla-img to always popout
```

```html
<simpla-img sid="img" popout></simpla-img>
```

You can force a simpla-img to always pop into view when editing with the `popout` attribute. This is useful for when editing controls are obscured by something other than the viewport, eg: inside a rounded container with `overflow: hidden`.

### Placeholders
```comment
simpla-img supports any valid CSS background as a placeholder
```

```html
<simpla-img sid="img-1" placeholder="http://placekitten.com/g/600/400"></simpla-img>
<simpla-img sid="img-2" placeholder="#64d8e8"></simpla-img>
<simpla-img sid="img-3" placeholder="pink"></simpla-img>

```

Simpla-img shows a placeholder in edit mode when it has no content. You can customize it with the `placeholder` property. Placeholders can be a path to an image or any valid CSS color value. 

**Note:** If an image is used as a placeholder it doesn't determine the size of `<simpla-img>` like actual content does.

<div class="simpla-example">
  <simpla-img sid="example" placeholder="http://placekitten.com/g/600/400" editable></simpla-img>
  <simpla-img sid="example" placeholder="#64d8e8" editable></simpla-img>
  <simpla-img sid="example" placeholder="pink" editable></simpla-img>
</div>

# Structuring data
Simpla's data structure is determined on the fly by your code. With a few simple tools you can achieve powerful schemas straight in HTML.

## Content IDs
```comment
A Content ID can be any string that doesn't contain spaces or periods
```

```html
<simpla-text sid="text"></simpla-text>
<simpla-img sid="img"></simpla-img>
```

The most basic unit of structuring Simpla data is the Content ID. All Simpla elements require a unique ID to identify their content in your project. In most cases you'll want to specify this in the `sid` (Simpla ID) property. 

A Content ID can be any string that doesn't contain spaces or periods (`.`), since Simpla uses periods internally to represent hierarchies.


## Namespacing

```comment
Create namespaces with simpla-block
```

```html
<simpla-block sid="block">

  <!-- This 'text' is scoped to 'block' -->
  <simpla-text sid="text"></simpla-text>

</simpla-block>
```

You can create namespaces with the `<simpla-block>` element. The SIDs of elements inside a `<simpla-block>` are scoped to that block, ensuring that their content is unique. Like other Simpla elements, simpla-block requires a Content ID to identify the namespace it creates.

```comment
Nest blocks to create complex structures
```

```html
<simpla-block sid="page">
 
  <!-- page > title -->
  <simpla-text sid="title"></simpla-text>
  
  <simpla-block sid="feature">
    <!-- page > feature > title -->
    <simpla-text sid="title"></simpla-text>
  </simpla-block>

</simpla-block>
```

You can infinitely nest simpla-blocks to create complex schemas. Their SID acts the same as other elements, scoped to their parent block.

## Global data

<hr>

```comment
Break out of namespaces with Global IDs
```

```html
<simpla-block sid="block">

  <!-- This 'global-text' is NOT scoped to 'block' -->
  <simpla-text gid="global-text"></simpla-text>

</simpla-block>

<!-- This 'global-text' has the same data -->
<simpla-text gid="global-text"></simpla-text>
```

You can break out of namespaces with Global IDs, defined in the `gid` property. Elements with a GID ignore scoping and are accessible anywhere in your project. Edits in one element will be reflected in all others with the same GID. This is useful for pieces of content that are the same no matter where they're used (eg: contact details, headers and footers).

Simpla-blocks can use GIDs as well, to create globally unique namespaces.

**Note:** If a Simpla element has both an SID and GID, the GID takes precedence.


## Dynamic reloading 

<hr>

```comment
Changing Content IDs reloads data
```

```html
<!-- Change sid to load a new post -->
<simpla-block sid="post-123">

  <h1><simpla-text sid="title"></simpla-text></h1>

  <simpla-text sid="content"></simpla-text>

</simpla-block>
```

Whenever the Content ID of a Simpla element changes it re-fetches its data, and in the case of `<simpla-block>`, forces all of its children to recalculate their data as well. This means you can swap whole sections of content by just changing the `sid` of a surrounding block, and instantly update data without refreshing the page.

For example, you can create a simple frontend blog with a few lines of HTML and Javascript.

## Best practices

### Scope pages with a `<body>` SID

```comment
Scope page content by setting an sid on <body>
```

```html
<body sid="page-id">
  <simpla-text sid="title"></simpla-text>
  ...
</body>
```

Elements not inside a `<simpla-block>` are by definition in the global scope. This usually isn't desirable when working with multiple pages. Scope data to a page by setting an `sid` on the `<body>` element. This creates a new namespace for the whole document, equivalent to wrapping everything in a `<simpla-block>`.

```comment
Use object notation to set an sid on <body> programatically
```

```javascript
document.body.sid = 'page-id';
```

**Note:** Setting an `sid` on `<body>` with Javascript using `.setAttribute()` isn't supported, use object notation instead.

### Load conditional content dynamically

<hr>

```comment
Set Content IDs conditionally with Javascript, for example localization
```

```html
<body sid="content#en">
  <simpla-text sid="text"></simpla-text>
  ...
</body>
```

```js
var locale = function() {
  // Return locale code based on geolocation
};

document.body.sid = 'content#' + locale;
```

Use the fact that elements are reloaded when their Content ID changes to serve conditional content. For example, you could create versions of your site in different languages, then use a simple script to change the `sid` on the `<body>` based on frontend geolocation to localize all your content. 

Other cases where this could be handy are changing content based on viewport size, reacting to user input, personalizing content to different users, etc.

### Use GIDs to create collections  

<hr>

```comment
The GID 'blog' now contains two items, 'post-1' and 'post-2'
```

```html
<simpla-block gid="blog">
  <simpla-block sid="post-1"></simpla-block>
</simpla-block>

<simpla-block gid="blog">
  <simpla-block sid="post-2"></simpla-block>
</simpla-block>
```

Since GIDs are accessible globally throughout your project, you can use them in multiple places on simpla-blocks to create collections of content. For example, by wrapping blog posts in a `<simpla-block>` with a GID of `blog`, you will have a collection of content under 'blog', which contains all of your posts. 

This is handy anywhere you need a content index, like blog feeds, site menus, products, etc.

# Javascript SDK

```comment
Store the Simpla SDK in a variable when initializing a project
```

```js
var simpla = Simpla('PROJECT-KEY');
```

The `Simpla()` constructor returns a client SDK that can be used to interact with Simpla's API. Store it in a variable when you initialize your project.

## Authentication
You can authenticate users programatically with the `login()` and `logout()` methods.

### Login
```comment
Authenticate a user with login()
```

```js
simpla
  .login({
    email: '...', 
    password: '...'
  })
  .then(function(token) {
    // Login successful
  })
  .catch(function(error) {
    // Login failed
  });
```

The `login()` method takes an object containing the user's credentials as `email` and `password` properties. It returns a promise with the user's auth token.

### Logout

```comment
Log a user out with logout()
```

```js
simpla
  .logout()
  .then(function() {
    // User logged out
  });
```

The `logout()` method clears the user's token and returns a promise, it doesn't take any arguments. 

## Getting and setting
Use the low-level `get()` and `set()`  methods to get and set content straight from Simpla's API.

### Get content

```comment
Fetch content with get()
```

```html
<simpla-text sid="my-text"></simpla-text>
```

```js
simpla
  .get('my-text')
  .then(function(data) {
    // JSON data
  });
```

Use the `get()` method to fetch any piece of content from the API. It takes a single argument, the ID of the content, and returns a promise with JSON data.

### Get a namespace

<hr>

```comment
Calling get() on a namespace returns its children
```

```html
<simpla-block sid="section">
  <simpla-text sid="my-text"></simpla-text>
  <simpla-img sid="my-img"></simpla-img>
</simpla-block>
```

```js
simpla
  .get('section')
  .then(function(elements) {
    // Array of items
  });
```

Calling `get()` on the Content ID of a namespace (created with `<simpla-block>`) returns an array of the children in that namespace. 

### Set content

<hr>

```comment
Save JSON data with set()
```

```js
simpla
  .set('id', {
    id: 'id',
    ...
  })
  .then(function() {
    // Successfully set data
  });
```

You can save arbitrary JSON data to any Content ID with the `set()` method. It takes two arguments, an ID in a string and a JSON data object, and returns a promise.

You must be authenticated (see [Authentication](#authentication)) to use `set()`.

### Nested SIDs

<hr>

```comment
Chain SIDs with periods to traverse namespaces
```

```html
<simpla-block sid="page">
  <simpla-block sid="section">
    <simpla-text sid="title"></simpla-text>
  </simpla-block>
</simpla-block>
```

```js
simpla.get('page.section.title');
simpla.set('page.section.content', {});
```

To access content inside namespaces, chain SIDs with periods. This also allows you to create arbitrary data structures instantly with `set()`.

# Contributing
Simpla is open-source under the MIT license, visit our GitHub repos:

**[github.com/simplaio/simpla][simplaio/simpla]** 
The core Simpla library

**[github.com/SimplaElements][SimplaElements]** 
Simpla's element catalogue, hosted on [elements.simpla.io][elements]

[simplaio/simpla]: https://github.com/simplaio/simpla
[SimplaElements]: https://github.com/SimplaElements
[elements]: https://elements.simpla.io

### The ecosystem
The bulk of Simpla's functionality comes from elements in the ecosystem, each talking independantly to Simpla's API.

## Simpla elements
These are the new dynamic HTML elements themselves, use them in your code to create, structure, and manipulate content.

### [`simpla-block`][simpla-block]
Structures data by creating namespaces for SIDs.

### [`simpla-text`][simpla-text]
Contains editable rich-text.

### [`simpla-img`][simpla-img]
An editable image.

[simpla-block]: https://github.com/SimplaElements/simpla-block
[simpla-text]: https://github.com/SimplaElements/simpla-text
[simpla-img]: https://github.com/SimplaElements/simpla-img

## UI components
Visual components that are used throughout the Simpla ecosystem to achieve a consistent UI.

### [`sm-ui-core`][ui-core]
Core UI resources (CSS, icons, etc).

### [`sm-ui-button`][ui-button]
Extends `<button>` with various properties and methods.

### [`sm-ui-toolbar`][ui-toolbar]
Pluggable toolbar used by textual elements for formatting controls.

### [`sm-ui-modal`][ui-modal] 
A simple modal/dialog element.

### [`sm-ui-callout`][ui-callout]
A flexible callout box with moveable pointer.

[ui-core]: https://github.com/SimplaElements/sm-ui-core
[ui-button]: https://github.com/SimplaElements/sm-ui-button
[ui-toolbar]: https://github.com/SimplaElements/sm-ui-toolbar
[ui-modal]: https://github.com/SimplaElements/sm-ui-modal
[ui-callout]: https://github.com/SimplaElements/sm-ui-callout

## Modules
Modules provide independent functionality for Simpla, but aren't used directly by the user to create dynamic content.

### [`sm-module-save`][module-save]
Contains the UI and logic that requests all elements save their data back to the API.

### [`sm-module-login`][module-login]
Contains the UI and logic to log a user in when entering edit mode.

### [`sm-module-notify`][module-notify]
Simpla's notification centre. Handles all success, warning, and error messages by logging them and/or notifying with toasts.

[module-save]: https://github.com/SimplaElements/sm-module-save
[module-login]: https://github.com/SimplaElements/sm-module-login
[module-notify]: https://github.com/SimplaElements/sm-module-notify

## Reporting issues
If you find a bug, please report it! If you know which component in the ecosystem is causing the trouble, open a GitHub issue on the appropriate repository. Otherwise open an issue on [simplaio/simpla][simplaio/simpla] or jump on our [Slack] channel and let us know.

Thorough bug reports with expected behavior and steps required to duplicate the issue are greatly appreciated and will help us move quickly.

[slack]: https://slack.simpla.io
[simplaio/simpla]: https://github.com/simplaio/simpla

# Browser support

Simpla supports all modern browsers:

| Browser           | Supported Version   |  
| :---------------- | :------------------ |  
| Google Chrome     | Current             |  
| Internet Explorer | 10+                 |  
| Microsoft Edge    | Current             |  
| Firefox           | Current             |  
| Safari            | 7+                  |  
| Opera             | Current             |  
| Safari Mobile     | Current             |  
| Chrome Mobile     | Current             |  

Simpla relies on an emerging family of specifications called [Web Components](https://www.w3.org/wiki/WebComponents/). Support for Web Components is being actively developed by all major vendors - Google Chrome currently has full support, other browsers have partial support and require polyfills. 

In practice this means Simpla enjoys native-level performance in Chrome, and performance similar to other leading Javascript libraries in other browsers.


| Browser           | Supported Version   | Method     |  
| :---------------- | :------------------ | :--------- |  
| Google Chrome     | Current             | Native     |  
| Internet Explorer | 10+                 | Polyfill   |  
| Microsoft Edge    | Current             | Polyfill   |  
| Firefox           | Current             | Polyfill   |  
| Safari            | 7+                  | Polyfill   |  
| Opera             | Current             | Native     |  
| Safari Mobile     | Current             | Polyfill   |  
| Chrome Mobile     | Current             | Native     |  
