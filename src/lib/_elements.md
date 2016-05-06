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
