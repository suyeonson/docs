# Contributing
The Simpla elements are open-source under the MIT license. If you'd like to contribute, please head over to our GitHub repositories and dive in!

**[github.com/simplaio/simpla][simplaio/simpla]** is the entrypoint to Simpla's open-source ecosystem and the package that is used to install the core Simpla elements locally with Bower.

**[github.com/SimplaElements][SimplaElements]** is Simpla's element catalogue. These elements are hosted on [elements.simpla.io][elements]

**[github.com/simplaio][simplaio]** hosts Simpla's supporting repositories, like development tools and the aforementioned `simpla` Bower installer.

**Note:** We are currently in the process of migrating Simpla's elements from _simplaio_ to the new _SimplaElements_ organization.

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

[simpla-block]: https://github.com/simplaio/simpla-block
[simpla-text]: https://github.com/simplaio/simpla-text
[simpla-img]: https://github.com/simplaio/simpla-img

## Utility components <a is="populate-menu" anchor="utility-components" menu-item="Utility components" target="#contributing">#</a>
Utilities that are used throughout the Simpla ecosystem to provide shared behaviors and functionality.

### [`sm-utility-connect`][utility-connect]
Connects an element to a RESTful API.

### [`sm-utility-placeholder`][utility-placeholder]
Provides an interface for elements to create placeholder content.

### [`sm-utility-auth`][utility-auth]
Provides an interface to Simpla's authentication and user-management system.

[utility-connect]: https://github.com/simplaio/sm-utility-connect
[utility-placeholder]: https://github.com/simplaio/sm-utility-placeholder
[default-content]: https://github.com/simplaio/default-content
[utility-auth]: https://github.com/simplaio/sm-utility-auth

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
[ui-button]: https://github.com/simplaio/sm-ui-button
[ui-toolbar]: https://github.com/simplaio/sm-ui-toolbar
[ui-modal]: https://github.com/simplaio/sm-ui-modal
[ui-callout]: https://github.com/simplaio/sm-ui-callout

## Modules <a is="populate-menu" anchor="modules" menu-item="Modules" target="#contributing">#</a>
Modules provide independent functionality for Simpla, but aren't used directly by the user to create dynamic content.

### [`sm-module-save`][module-save]
Contains the UI and logic that requests all elements save their data back to the API.

### [`sm-module-login`][module-login]
A visual wrapper for `sm-utility-auth` to log a user in when entering edit mode.

### [`sm-module-notify`][module-notify]
Simpla's notification centre. Handles all success, warning, and error messages by logging them and/or notifying with toasts

[module-save]: https://github.com/simplaio/sm-module-save
[module-login]: https://github.com/simplaio/sm-module-login
[module-notify]: https://github.com/simplaio/sm-module-notify

## Reporting issues
If you find a bug, please report it! If you know which component in the ecosystem is causing the trouble, open a GitHub issue on the appropriate repository. Otherwise [let us know][contact] or open an issue on [simplaio/simpla][simplaio/simpla] and we can move it if need be.

Thorough bug reports with expected behavior and steps required to duplicate the issue are greatly appreciated and will help us move quickly.

[contact]: /contact
[simplaio/simpla]: https://github.com/simplaio/simpla
