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
