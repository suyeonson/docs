# Developing With Simpla
Simpla lets you create editable content in plain HTML, by using new dynamic HTML elements like `<simpla-text>` and `<simpla-img>`. Authenticated users can permanently edit the _content_ of these new elements on your site. Each element talks independently to a RESTful API to save and fetch content in your project.

Simpla is not a framework. It's a HTML library for editable content that can be used instead of a CMS, inside a CMS, or alongside whatever framework, backend, or platform you're already using.

## Installation and setup <a is="populate-menu" anchor="setup" menu-item="Installation and setup" target="#developing">#</a>
Login to your Simpla dashboard and create a new project by pressing the _create project_ button. Every Simpla project has an API key that you use to connect to it.

Include a script tag in the `<head>` of your HTML document with a `src` of `https://app.simpla.io` and an attribute called `simpla-api` containing your project's API key.

```html
<script src="https://app.simpla.io" simpla-api="PROJECT-API-KEY"></script>
```
<!-- {is="syntax-highlight"} -->

This will hotlink Simpla's library from our high performance global CDN ([Akamai](https://akamai.com)). Alternatively, you can install Simpla locally with [Bower](https://bower.com).

```bash
$ bower install simpla --save
```
<!-- {is="syntax-highlight"} -->

And include `simpla/simpla.js` from Bower instead

```html
<script src="/bower_components/simpla/simpla.js" simpla-api="PROJET-API-KEY"></script>
```
<!-- {is="syntax-highlight"} -->

## Using Simpla elements <a is="populate-menu" anchor="using-elements" menu-item="Using the elements" target="#developing">#</a>
Simpla's new elements exist as legitimate HTML on your site. You can do everything with them that you would with regular HTML. You can select them, style them, and manipulate them. You can see them in your browser's web inspector. This is possible thanks to a family of emerging specifications called [Web Components](https://www.w3.org/wiki/WebComponents/), which let us register custom HTML elements on a web page.

### Content IDs
All Simpla elements require a unique ID to identify their content in your project. You can specify this ID in an `sid` (Simpla ID) attribute on the element.

```html
<simpla-text sid="my-text"></simpla-text>
<simpla-img sid="my-img"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

Read [structuring data](#structuring-data) to learn more about how to scope and structure content in your project.

### Void vs. self-closing
All of Simpla's elements act as _void_ elements, which means that you can't put anything inside them. The one exception to this is [default content](#default-content). However, they are _not_ self-closing, which means you need to include both opening and closing HTML tags.

This is valid
```html
<simpla-text sid="text"></simpla-text>
```
<!-- {is="syntax-highlight"} -->

This is not
```html
<simpla-text sid="text" />
```
<!-- {is="syntax-highlight"} -->

And the markup inside this won't get output
```html
<simpla-text sid="text">
  <span>Some text</span>
</simpla-text>
```
<!-- {is="syntax-highlight"} -->

## Editable text <a is="populate-menu" anchor="text" menu-item="Editable text" target="#developing">#</a>
`<simpla-text>` contains editable rich-text. You can use it as a standalone container (containing paragraphs of text) or as the content inside other textual elements (eg: headings).

```html
<simpla-text sid="text-container"></simpla-text>

<h1><simpla-text sid="text-content"></simpla-text></h1>
```
<!-- {is="syntax-highlight"} -->

<simpla-text sid="example" class="simpla-example"></simpla-text>

### Inline vs. block mode
Simpla-text has two content structuring modes:
1. Block mode - new line creates `<p>`.
2. Inline mode - new line creates `<br/>`.

The mode is set automatically based on context. You can force a mode by adding a `block` or `inline` attribute to a `<simpla-text>` element.

```html
<simpla-text sid="inline-text" inline></simpla-text>

<simpla-text sid="block-text" block></simpla-text>
```
<!-- {is="syntax-highlight"} -->

Note that forcing block mode when simpla-text is used inside textual elements like headings will produce invalid markup and could result in unexpected behavior.

### Placeholders
Simpla-text shows a placeholder in edit mode when it has no content. You can change the default placeholder with the `placeholder` attribute

```html
<simpla-text sid="title" placeholder="Enter a title..."></simpla-text>
```
<!-- {is="syntax-highlight"} -->

<simpla-text sid="example" class="simpla-example" placeholder="Enter a title..."></simpla-text>

## Editable images <a is="populate-menu" anchor="images" menu-item="Editable images" target="#developing">#</a>
`<simpla-img>` is an editable image. Use it in place of static HTML `<img>` elements.

```html
<simpla-img sid="editable-img"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

<simpla-img sid="example" class="simpla-example"></simpla-img>

### Image sizing
Simpla-img behaves in the same way as a regular `<img>`, with the size of uploaded content determining its dimensions. You can constrict the size of a `<simpla-img>` with CSS.

**Note:** Currently setting `width` and `height` attributes directly on a `<simpla-img>` is not supported, all sizing must be done via CSS.

### Placeholders
Simpla-img shows a placeholder in edit mode when it has no content. You can change the default placeholder with the `placeholder` attribute. Placeholders can be a path to an image or any valid CSS color value. Note that if an image placeholder is used, it does _not_ determine the size of `<simpla-img>` like actual content does.

```html
<simpla-img sid="placeholder-1" placeholder="http://placekitten.com/g/600/400"></simpla-img>

<simpla-img sid="placeholder-2" placeholder="#64d8e8"></simpla-img>

<simpla-img sid="placeholder-3" placeholder="pink"></simpla-img>

```
<!-- {is="syntax-highlight"} -->

<div class="simpla-example">
  <simpla-img sid="example" placeholder="http://placekitten.com/g/600/400"></simpla-img>
  <simpla-img sid="example" placeholder="#64d8e8"></simpla-img>
  <simpla-img sid="example" placeholder="pink"></simpla-img>
</div>

### Popout mode
If a `<simpla-img>` is partially off-screen whilst editing it will 'pop' into view when clicked, so you have full access to editing controls.

You can force a simpla-img to always pop into view when editing with the `popout` attribute. This is useful for cases where a simpla-img is obscured for reasons other than screen position, eg: when placed inside a rounded container with `overflow: hidden`.

```html
<simpla-img sid="always-popout" popout></simpla-img>
```
<!-- {is="syntax-highlight"} -->

## Default content
You can provide starting content for Simpla elements with default content. Default content is shown when a Simpla element cannot fetch data, ie: when you have yet to save content for it. If an element has content saved in your project, its default content is not used. An element's default content is never 'updated' by Simpla.

Default content can be defined with `<default-content>` tags inside a Simpla element or in a `default` attribute on the element. While `<default-content>` tags can be used inside Simpla elements, the elements are still essentially _void_, other markup inside them is not output.

### Default content for simpla-text
To provide default content to simpla-text specify HTML rich-text in either internal `<default-content>` tags or the `default` attribute. The following are equivalent:

```html
<simpla-text sid="default" default="<p>Lorem ipsum dolor sit amet.</p>"></simpla-text>

<simpla-text sid="default">
  <default-content>
    <p>Lorem ipsum dolor sit amet.</p>
  </default-content>
</simpla-text>

```
<!-- {is="syntax-highlight"} -->

<simpla-text sid="example" class="simpla-example" default="<p>Lorem ipsum dolor sit amet</p>"></simpla-text>

### Default content for simpla-img
To provide default content to simpla-img specify a path to an image in the `default` attribute.

```html
<simpla-img sid="default" default="/path/to/img.jpg"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

<simpla-img sid="example" class="simpla-example" default="/path/to/img.jpg"></simpla-img>

### Using default content to convert static content
Using default content, you can easily convert static HTML content to Simpla content. Just use your existing HTML markup as default content for Simpla elements, then open edit mode on your site and press save. All of your content will now be saved as Simpla content in your project, and you can safely remove the old HTML markup from your code.

### Using default content as a fallback
Default content can also act as an emergency fallback for Simpla elements. If Simpla's API is ever unreachable, elements will not be able to fetch data and will therefore show their default content. This strategy is only recommended if a) an element's content is unlikely to change significantly (eg: page titles), or b) you specifically use default content for '404 not found' type purposes.

## Structuring data <a is="populate-menu" anchor="structuring-data" menu-item="Structuring data" target="#developing">#</a>
With Simpla your code determines the structure of your data, rather than the other way around. With a few simple tools you can create powerful data structures directly in your markup.

### Content IDs
The most basic unit in structuring Simpla data is the content ID. All Simpla elements require a unique ID to identify their content in your project. In most cases you'll want to specify this ID in an `sid` (Simpla ID) attribute on the element.

```html
<simpla-text sid="my-text"></simpla-text>
<simpla-img sid="my-img"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

A content ID can be any string that doesn't contain spaces or periods (`.`), since Simpla uses periods internally to represent data hierarchies.

### Creating namespaces
You can create a new _namespace_ for Simpla content with the `<simpla-block>` element. The Simpla elements inside a `<simpla-block>` are scoped to that block, ensuring that their content is unique. Like other Simpla elements, `<simpla-block>` requires a content ID to identify the namespace it creates.

In the following example, both `<simpla-text>` elements with an SID of 'foo' contain unique content, thanks to simpla-block:

```html
<simpla-text sid="foo"></simpla-text>

<simpla-block sid="block">

  <!-- This 'foo' is scoped to 'block' -->
  <simpla-text sid="foo"></simpla-text>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

You can infinitely nest simpla-blocks to create complex data structures

```html
<simpla-block sid="block">

  <!-- block > foo -->
  <simpla-text sid="foo"></simpla-text>

  <simpla-block sid="block">

    <!-- block > block > foo -->
    <simpla-text sid="foo"></simpla-text>

  </simpla-block>

  <simpla-block sid="another-block">

      <!-- block > another-block > foo -->
      <simpla-text sid="foo"></simpla-text>

  </simpla-block>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

### Making data global
Simpla elements that use an SID are scoped to simpla-blocks. You can break out of a block and place an element in the global scope by using a Global ID instead, specified in the `gid` attribute.

```html
<simpla-text gid="global-content"></simpla-text>
```
<!-- {is="syntax-highlight"} -->

Elements with a GID ignore simpla-block namespaces, and are accessible anywhere in your project.

In the following example, both `<simpla-text>` elements with a GID of 'foo' point to the _same_ content:

```html
<simpla-text gid="foo"></simpla-text>

<simpla-block sid="block">

  <!-- This 'foo' is NOT scoped to 'block' -->
  <simpla-text gid="foo"></simpla-text>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

Simpla-blocks can use GIDs as well, to create globally unique namespaces.

```html
<simpla-block gid="global-block">
  <simpla-text sid="foo"></simpla-text>
</simpla-block>

<simpla-block sid="block">

  <simpla-block gid="global-block">
    <simpla-text sid="foo"></simpla-text>
  </simpla-block>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

If a Simpla element has both an SID and GID, the GID takes precedence.

### Scoping whole pages
Any Simpla element that is not inside a simpla-block is by default in the global scope. This usually isn't desirable when working with multiple pages, where the elements on each page should be scoped to that page.

To achieve this you can place an `sid` on the `<body>` of your page, which creates a new namespace for that page, equivalent to wrapping the entire page in a `<simpla-block>`.

```html
<body sid="page-id">

  <simpla-text sid="foo"></simpla-text>

  ...
</body>
```
<!-- {is="syntax-highlight"} -->

### Dynamically changing data
Whenever the content ID of a Simpla element changes it re-fetches its data. And since an element's content is determined by the namespace it lives in (if it uses an SID), you can swap whole sections or pages of content by changing the ID of its surrounding namespace.

For example, you could use `<simpla-block>` to create a frontend blog

```html
<!-- Change the sid to load a new post -->
<simpla-block sid="post-123">

	<h1><simpla-text sid="title"></simpla-text></h1>

	<simpla-text sid="content"></simpla-text>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

Or change page namespaces with JavaScript for single page apps

```html
<!-- Change the sid when page/route changes -->
<body sid="about-page">
  ...
</body>
```
<!-- {is="syntax-highlight"} -->

Or provide localized versions your content with frontend geolocation

```html
<!-- Change #en in sid with js geolocation -->
<body sid="about-page#en">
 ...
</body>
```
<!-- {is="syntax-highlight"} -->

## Browser support <a is="populate-menu" anchor="browser-support" menu-item="Browser support" target="#developing">#</a>
Simpla supports all modern browsers:

| Browser       | Supported Version |
|:--------------|:------------------|
| Chrome        | Current           |
| IE            | 10+               |
| Edge          | Current           |
| Firefox       | Current           |
| Safari        | 7+                |
| Opera         | Current           |
| Safari Mobile | Current           |

In more detail, Simpla uses an emerging family of specifications called [Web Components](https://www.w3.org/wiki/WebComponents/). The technology behind Web Components is being actively developed by all major browser vendors - currently Google Chrome has full support, while other browsers have partial support and require polyfills (additional code that provides missing features).

In practice this just means Simpla currently enjoys native-level performance in Chrome, and performance similar to other leading javascript libraries in other browsers.

| Browser       | Supported Version | Method   |
|:--------------|:------------------|:---------|
| Chrome        | Current           | Native   |
| IE            | 10+               | Polyfill |
| Edge          | Current           | Polyfill |
| Firefox       | Current           | Polyfill |
| Safari        | 7+                | Polyfill |
| Opera         | Current           | Native   |
| Safari Mobile | Current           | Polyfill |
