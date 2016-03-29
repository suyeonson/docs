# Elements Reference
This is a reference guide for Simpla's user-facing content elements. There are many more internally used components within the Simpla ecosystem, refer to the [Contributing](contributing) guide to learn more about them.

## Simpla Block <a is="populate-menu" anchor="simpla-text" menu-item="Simpla Block" target="#elements">#</a>
`<simpla-block>` helps structure your project by creating namespaces. Any Simpla element with an `sid` inside a simpla-block is scoped to that block.

```html
<simpla-text sid="foo"></simpla-text>

<simpla-block sid="block">

  <!-- This 'foo' is scoped to 'block' -->
  <simpla-text sid="foo"></simpla-text>

</simpla-block>
```

| Attribute | Type   | Expects                                | Default Value | Description                                                                    |
|:----------|:-------|:---------------------------------------|:--------------|:-------------------------------------------------------------------------------|
| `sid`     | String | ID name without spaces or periods (`.`) | `undefined`   | ID used to identify Simpla content, scoped relative to Simpla parents |
| `gid`     | String | ID name without spaces or periods (`.`) | `undefined`   | Globally unique ID used to identify Simpla content, ignores Simpla parents                           |

## Simpla Text <a is="populate-menu" anchor="simpla-text" menu-item="Simpla Text" target="#elements">#</a>
`<simpla-text>` contains editable rich-text.

```html
<simpla-text sid="text"></simpla-text>
```

<simpla-text sid="example" class="simpla-example"></simpla-text>

| Attribute     | Type    | Expects                                | Default Value          | Description                                                                      |
|:--------------|:--------|:---------------------------------------|:-----------------------|:---------------------------------------------------------------------------------|
| `sid`         | String  | ID name without spaces or periods (`.`) | `undefined`            | ID used to identify Simpla content, scoped relative to Simpla parents |
| `gid`         | String  | ID name without spaces or periods (`.`) | `undefined`            | Globally unique ID used to identify Simpla content, ignores Simpla parents |
| `placeholder` | String  | Plaintext                              | `'Enter your text...'` | Shown in edit mode when simpla-text is empty                             |
| `default`     | String  | Any valid HTML string                  | `''`                   | Output when simpla-text cannot fetch data, mostly used as starting content       |
| `block`       | Boolean | N/A                                    | `true` / `false`       | If true, new lines create paragraphs. Defaults to true/false based on context    |
| `inline`      | Boolean | N/A                                    | `true` / `false`       | If true, new lines create line breaks. Defaults to true/false based on context   |

## Simpla Img <a is="populate-menu" anchor="simpla-img" menu-item="Simpla Img" target="#elements">#</a>
`<simpla-img>` is an editable image.

```html
<simpla-img sid="img"></simpla-img>
```

<simpla-img sid="example" class="simpla-example"></simpla-img>

| Attribute     | Type    | Expects                                        | Default Value      | Description                                                                      |
|:--------------|:--------|:-----------------------------------------------|:-------------------|:---------------------------------------------------------------------------------|
| `sid`         | String  | ID name without spaces or periods (`.`)         | `undefined`        | ID used to identify Simpla content, scoped relative to Simpla parents   |
| `gid`         | String  | ID name without spaces or periods (`.`)         | `undefined`        | Globally unique ID used to identify Simpla content, ignores Simpla parents |
| `placeholder` | String  | Path to an image, or any valid CSS color value | `rgb(180,180,180)` | Shown in edit mode when simpla-img is empty.                             |
| `default`     | String  | Path to an image                               | `''`               | Output when simpla-img cannot fetch data, mostly used as starting content        |
| `popout`      | Boolean | N/A                                            | `false`            | Force simpla-img to always 'pop' out of place when clicked in edit mode          |
