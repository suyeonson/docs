# Editable images
```comment
Simpla-img is an editable image
```

```html
<simpla-img sid="img"></simpla-img>
```

`<simpla-img>` is an editable image. Use it in place of the static HTML `<img>` element.

<simpla-img sid="example" class="simpla-example" editable></simpla-img>

**Note:** Currently setting `width` and `height` attributes directly on a `<simpla-img>` is not supported. Sizing must be done via CSS.

## Options

### Popout mode
If a `<simpla-img>` is partially off-screen whilst editing, it will 'pop' into view when clicked.

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
