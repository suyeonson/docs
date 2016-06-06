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