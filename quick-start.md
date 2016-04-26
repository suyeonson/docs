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
<simpla-img sid="my-img"></simpla-img>
```
<!-- {is="syntax-highlight"} -->

### Edit content

[take interactive tour](https://sample.simpla.io) <!-- {.button target="_blank"} -->

Open your HTML page in a browser. It will look pretty empty since there's no existing content saved.

Enter edit mode and start editing content by by appending `#edit` to the end of your page's URL (eg: `https://mysite.com#edit`).

In edit mode you can click text to edit it and highlight text to format it. Click images to open editing controls, where you can zoom and crop, upload a new image, and change the title of the image.

Once you've finished editing hit the save button to publish your changes. Remove `#edit` from the URL to exit edit mode.

Congratulations! You just created and published your first project with Simpla.
