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