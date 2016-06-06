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
