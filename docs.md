# Quick Start
Simpla lets you create editable content anywhere by using new dynamic HTML elements, like `<simpla-text>` and `<simpla-img>`.

[download sample template](https://github.com/simplaio/sample-template/archive/master.zip) <!-- {.button} -->

### Create a project
Login to your dashboard at [simpla.io/projects](https://www.simpla.io/projects) and create a new project by pressing the _+ new_ button.

### Insert code snippet
Put a script tag in the `<head>` of your HTML document with a `src` of `https://app.simpla.io` and an attribute called `simpla-api` containing your project's API key.

```html
<script src="https://app.simpla.io" simpla-api="PROJECT-API-KEY"></script>
```
<!-- {is="syntax-highlight"} -->

### Use the elements
Now you can use Simpla’s new HTML elements on your page. Drop them into your code wherever you want editable content.

Use `<simpla-text>` for editable text:

<simpla-text sid="example-text" class="simpla-example" editable></simpla-text>

Use `<simpla-img>` for editable images:

<simpla-img sid="example-img" class="simpla-example" editable></simpla-img>

All Simpla elements must have an `sid` (Simpla ID) attribute containing a unique ID, and both opening and closing HTML tags. For example:

```html
<simpla-text sid="my-text"></simpla-text>
<simpla-img sid="my-img"></simpla-text>
```
<!-- {is="syntax-highlight"} -->

### Edit content

[take interactive tour](https://sample.simpla.io) <!-- {.button target="_blank"} -->

Open your HTML page in a browser. It will look pretty empty since there's no existing content saved.

Enter edit mode and start editing content by by appending `#edit` to the end of your page's URL (eg: `https://mysite.com#edit`).

In edit mode you can click text to edit it and highlight text to format it. Click images to open editing controls, where you can zoom and crop, upload a new image, and change the title of the image.

Once you've finished editing hit the save button to publish your changes. Remove `#edit` from the URL to exit edit mode.

Congratulations! You just created and published your first project with Simpla.
;
# Developing With Simpla
Simpla lets you create editable content in plain HTML, by using new dynamic HTML elements like `<simpla-text>` and `<simpla-img>`. Authenticated users can permanently edit the _content_ of these new elements on your site. Each element talks independently to a RESTful API to save and fetch content in your project.

Simpla is not a framework. It's a HTML library for editable content that can be used instead of a CMS, inside a CMS, or alongside whatever framework, backend, or platform you're already using.

## Installation and setup <a is="populate-menu" anchor="setup" menu-item="Installation and setup" target="#developing">#</a>
Login to your Simpla dashboard and create a new project by pressing the _+ new_ button. Every Simpla project has an API key that you use to connect to it.

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
All of Simpla's elements act as _void_ elements, which means that you can't put anything inside them. However, they are _not_ self-closing, which means you need to include both opening and closing HTML tags.

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

<simpla-text sid="example" class="simpla-example" editable></simpla-text>

### Inline mode
By default, simpla-text creates paragraphs for new lines of text. You can disable paragraphs and have new lines create `<br/>` line-breaks instead by setting the `inline` property on `<simpla-text>`.

```html
<simpla-text sid="inline-text" inline></simpla-text>
```
<!-- {is="syntax-highlight"} -->

Inline mode is automatically enabled when simpla-text is used inside other textual elements (eg: headings, links, paragraphs, spans).

```html
<!-- Inline mode automatically enabled inside other textual elements -->
<h1><simpla-text sid="inline-text"></simpla-text></h1>
```
<!-- {is="syntax-highlight"} -->

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

<simpla-img sid="example" class="simpla-example" editable></simpla-img>

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
  <simpla-img sid="example" placeholder="http://placekitten.com/g/600/400" editable></simpla-img>
  <simpla-img sid="example" placeholder="#64d8e8" editable></simpla-img>
  <simpla-img sid="example" placeholder="pink" editable></simpla-img>
</div>

### Popout mode
If a `<simpla-img>` is partially off-screen whilst editing it will 'pop' into view when clicked, so you have full access to editing controls.

You can force a simpla-img to always pop into view when editing with the `popout` attribute. This is useful for cases where a simpla-img is obscured for reasons other than screen position, eg: when placed inside a rounded container with `overflow: hidden`.

```html
<simpla-img sid="always-popout" popout></simpla-img>
```
<!-- {is="syntax-highlight"} -->

## Structuring data <a is="populate-menu" anchor="structuring-data" menu-item="Structuring data" target="#developing">#</a>
With Simpla your code determines the structure of your data, rather than the other way around. With a few simple tools you can create powerful data structures directly in your markup.

### Content IDs
The most basic unit in structuring Simpla data is the Content ID. All Simpla elements require a unique ID to identify their content in your project. In most cases you'll want to specify this ID in an `sid` (Simpla ID) attribute on the element.

```html
<simpla-text sid="my-text"></simpla-text>
<simpla-img sid="my-img"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

A Content ID can be any string that doesn't contain spaces or periods (`.`), since Simpla uses periods internally to represent data hierarchies.

### Creating namespaces
You can create a new _namespace_ for Simpla content with the `<simpla-block>` element. The Simpla elements inside a `<simpla-block>` are scoped to that block, ensuring that their content is unique. Like other Simpla elements, `<simpla-block>` requires a Content ID to identify the namespace it creates.

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

  <!-- This 'global-block' has the same data as the other 'global-block' -->
  <simpla-block gid="global-block">
    <simpla-text sid="foo"></simpla-text>
  </simpla-block>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

If a Simpla element has both an SID and GID, the GID takes precedence.

### Scoping whole pages
Any Simpla element that is not inside a simpla-block is by default in the global scope. This usually isn't desirable when working with multiple pages, where the elements on each page should be scoped to that page.

To achieve this you can place an `sid` on the `<body>` element, which creates a new namespace for the whole document, equivalent to wrapping your entire page in a `<simpla-block>`.

```html
<body sid="page-id">

  <simpla-text sid="foo"></simpla-text>

  ...
</body>
```
<!-- {is="syntax-highlight"} -->

**Note:** Currently setting an `sid` on body using the `.setAttribute()` Javascript method is not supported. If you want to set an sid with Javascript use the following syntax:

```javascript
document.body.sid = 'my-sid';
```
<!-- {is="syntax-highlight"} -->

## Dynamic content  <a is="populate-menu" anchor="dynamic-content" menu-item="Dynamic content" target="#developing">#</a>
Whenever the Content ID of a Simpla element changes it re-fetches its data. And since an element's content is determined by the namespace it lives in (if it uses an SID), you can swap whole sections of content by changing the ID of its surrounding namespace.

For example, you could use `<simpla-block>` to create a frontend blog

```html
<!-- Change the sid to load a new post -->
<simpla-block sid="post-123">

	<h1><simpla-text sid="title"></simpla-text></h1>

	<simpla-text sid="content"></simpla-text>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

Or change page content with JavaScript for single page apps

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
;
# Elements Reference
This is a reference guide for Simpla's user-facing content elements. There are many more internally used components within the Simpla ecosystem, refer to the [Contributing](contributing) guide to learn more about them.

## Simpla Block <a is="populate-menu" anchor="simpla-block" menu-item="Simpla Block" target="#elements">#</a>
`<simpla-block>` helps structure your project by creating namespaces. Any Simpla element with an `sid` inside a simpla-block is scoped to that block.

```html
<simpla-text sid="foo"></simpla-text>

<simpla-block sid="block">

  <!-- This 'foo' is scoped to 'block' -->
  <simpla-text sid="foo"></simpla-text>

</simpla-block>
```
<!-- {is="syntax-highlight"} -->

| Attribute:    | `sid`                                                                  |
|:--------------|:-----------------------------------------------------------------------|
| Type          | String                                                                 |
| Expects       | ID name without spaces or periods (`.`)                                |
| Default       | `undefined`                                                            |
| Description   | ID used to identify block namespace, scoped relative to Simpla parents |


| Attribute:    | `gid`                                                                       |
|:--------------|:----------------------------------------------------------------------------|
| Type          | String                                                                      |
| Expects       | ID name without spaces or periods (`.`)                                     |
| Default       | `undefined`                                                                 |
| Description   | Globally unique ID used to identify block namespace, ignores Simpla parents |

## Simpla Text <a is="populate-menu" anchor="simpla-text" menu-item="Simpla Text" target="#elements">#</a>
`<simpla-text>` contains editable rich-text.

```html
<simpla-text sid="text"></simpla-text>
```
<!-- {is="syntax-highlight"} -->

<simpla-text sid="example" class="simpla-example" editable></simpla-text>

| Attribute:    | `sid`                                                                 |
|:--------------|:----------------------------------------------------------------------|
| Type          | String                                                                |
| Expects       | ID name without spaces or periods (`.`)                               |
| Default       | `undefined`                                                           |
| Description   | ID used to identify Simpla content, scoped relative to Simpla parents |


| Attribute:    | `gid`                                                                      |
|:--------------|:---------------------------------------------------------------------------|
| Type          | String                                                                     |
| Expects       | ID name without spaces or periods (`.`)                                    |
| Default       | `undefined`                                                                |
| Description   | Globally unique ID used to identify Simpla content, ignores Simpla parents |

| Attribute:    | `placeholder`                                |
|:--------------|:---------------------------------------------|
| Type          | String                                       |
| Expects       | Plaintext                                    |
| Default       | `'Enter your text...'`                       |
| Description   | Shown in edit mode when simpla-text is empty |

| Attribute:    | `inline`                                                                       |
|:--------------|:-------------------------------------------------------------------------------|
| Type          | Boolean                                                                        |
| Expects       | N/A                                                                            |
| Default       | `true` / `false`                                                               |
| Description   | If true, new lines create line-breaks instead of paragraphs. Defaults to true/false based on context |

## Simpla Img <a is="populate-menu" anchor="simpla-img" menu-item="Simpla Img" target="#elements">#</a>
`<simpla-img>` is an editable image.

```html
<simpla-img sid="img"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

<simpla-img sid="example" class="simpla-example" editable></simpla-img>

| Attribute:    | `sid`                                                                 |
|:--------------|:----------------------------------------------------------------------|
| Type          | String                                                                |
| Expects       | ID name without spaces or periods (`.`)                               |
| Default       | `undefined`                                                           |
| Description   | ID used to identify Simpla content, scoped relative to Simpla parents |

| Attribute:    | `gid`                                                                      |
|:--------------|:---------------------------------------------------------------------------|
| Type          | String                                                                     |
| Expects       | ID name without spaces or periods (`.`)                                    |
| Default       | `undefined`                                                                |
| Description   | Globally unique ID used to identify Simpla content, ignores Simpla parents |

| Attribute:    | `placeholder`                                  |
|:--------------|:-----------------------------------------------|
| Type          | String                                         |
| Expects       | Path to an image, or any valid CSS color value |
| Default       | `rgb(180,180,180)`                             |
| Description   | Shown in edit mode when simpla-img is empty    |

| Attribute:    | `popout`                                                                |
|:--------------|:------------------------------------------------------------------------|
| Type          | Boolean                                                                 |
| Expects       | N/A                                                                     |
| Default       | `false`                                                                 |
| Description   | Force simpla-img to always 'pop' out of place when clicked in edit mode |
;
# Contributing
The Simpla elements are open-source under the MIT license. If you'd like to contribute, please head over to our GitHub repositories and dive in!

**[github.com/simplaio/simpla][simplaio/simpla]** is the entrypoint to Simpla's open-source ecosystem and the package that is used to install Simpla locally with Bower.

**[github.com/SimplaElements][SimplaElements]** is Simpla's element catalogue. These elements are hosted on [elements.simpla.io][elements]

**[github.com/simplaio][simplaio]** hosts Simpla's supporting repositories, like development tools and the aforementioned `simpla` Bower installer.

[simplaio/simpla]: https://github.com/simplaio/simpla
[SimplaElements]: https://github.com/SimplaElements
[simplaio]: https://github.com/simplaio
[elements]: https://elements.simpla.io

## The element catalogue <a is="populate-menu" anchor="catalogue" menu-item="The element catalogue" target="#contributing">#</a>
Simpla's elements function independently, talking to other elements in the ecosystem in a decentralized manner. There are a lot of components that make up Simpla, and we've adopted a simple taxonomy to organize them by.

## Simpla content elements <a is="populate-menu" anchor="simpla-elements" menu-item="Simpla elements" target="#contributing">#</a>
These are the new dynamic HTML elements themselves, use them in your markup to create editable content.

### [`simpla-block`][simpla-block]
Helps structure your data by creating new namespaces for Simpla `sid`s.

### [`simpla-text`][simpla-text]
Contains editable rich-text.

### [`simpla-img`][simpla-img]
An editable image.

[simpla-block]: https://github.com/SimplaElements/simpla-block
[simpla-text]: https://github.com/SimplaElements/simpla-text
[simpla-img]: https://github.com/SimplaElements/simpla-img

## Utility components <a is="populate-menu" anchor="utility-components" menu-item="Utility components" target="#contributing">#</a>
Utilities that are used throughout the Simpla ecosystem to provide shared behaviors and functionality.

### [`sm-utility-connect`][utility-connect]
Connects an element to a RESTful API.

### [`sm-utility-placeholder`][utility-placeholder]
Provides an interface for elements to create placeholder content.

### [`sm-utility-auth`][utility-auth]
Provides an interface to Simpla's authentication and user-management system.

[utility-connect]: https://github.com/SimplaElements/sm-utility-connect
[utility-placeholder]: https://github.com/SimplaElements/sm-utility-placeholder
[default-content]: https://github.com/SimplaElements/default-content
[utility-auth]: https://github.com/SimplaElements/sm-utility-auth

## UI components <a is="populate-menu" anchor="ui-components" menu-item="UI components" target="#contributing">#</a>
Visual components that are used throughout the Simpla ecosystem to achieve a consistent UI.

### [`sm-ui-core`][ui-core]
Core UI resources for Simpla elements (CSS, icons, etc).

### [`sm-ui-button`][ui-button]
Extends HTML `<button>` element with various properties and methods.

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

## Modules <a is="populate-menu" anchor="modules" menu-item="Modules" target="#contributing">#</a>
Modules provide independent functionality for Simpla, but aren't used directly by the user to create dynamic content.

### [`sm-module-save`][module-save]
Contains the UI and logic that requests all elements save their data back to the API.

### [`sm-module-login`][module-login]
A visual wrapper for `sm-utility-auth` to log a user in when entering edit mode.

### [`sm-module-notify`][module-notify]
Simpla's notification centre. Handles all success, warning, and error messages by logging them and/or notifying with toasts

[module-save]: https://github.com/SimplaElements/sm-module-save
[module-login]: https://github.com/SimplaElements/sm-module-login
[module-notify]: https://github.com/SimplaElements/sm-module-notify

## Reporting issues
If you find a bug, please report it! If you know which component in the ecosystem is causing the trouble, open a GitHub issue on the appropriate repository. Otherwise [let us know][contact] or open an issue on [simplaio/simpla][simplaio/simpla] and we can move it if need be.

Thorough bug reports with expected behavior and steps required to duplicate the issue are greatly appreciated and will help us move quickly.

[contact]: /contact
[simplaio/simpla]: https://github.com/simplaio/simpla
;
