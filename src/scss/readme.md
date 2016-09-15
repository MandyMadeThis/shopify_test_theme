## Naming Conventions

In general, the conventions used on this site follow the conventions outlined [here](https://gist.github.com/fat/a47b882eb5f84293c4ed).

In particular, these are the following key concepts:

- classes should always be used instead of ids
- hyphens are used to indicate relationships in class names. Hyphens should never be used to simply separate words in a multi-worded class name
- multi-word sass variables should use dashes and not camelCase to more closely mimic CSS syntax (ie. border-bottom-color not borderBottomColor)
- `js-targetName` : The `js-` prefix should be used to indicate javascript hooks. Elements that use the js prefix should never have styling related to the js prefix itself.
- `u-utilityName` : Utility classes should use the `u-` prefix. Utility classes are usually single property helper classes like `text-align: centre` or `width: 100%`.
- component names are written in camelCase. ex `.infoTile`
- component children are separated by a single dash. ex `.infoTile-title`
- component modifiers are separated by two dashes. ex `.infoTile--large` and should when possible be applied to the component root and not a child element of the component
- component states use the `is-` prefix. ex `.infoTile.is-expanded`. The styles associated to `.is-expanded` should always be styled as an adjoining class.

## Folder Structure
- **components** : Most of the code should ideally live within this directory. The various components of the site are each broken down into their own self-contained stylesheet with the name of the component (ex `_buttons.scss`). These files should use plural names when possible instead of singular (`_buttons.scss` not `_button.scss`). Multi-worded components should use camelCase (ex. `_infoTiles.scss` not `_info-tiles.scss`).
- One component file should not depend on another component file, meaning the order that components are loaded should be irrelevant.
- **initializers** : Code that needs to be loaded before the components should go here. This would include things that components would need to reference like colour variables, mixins, etc.
- pages : Page specific overrides go here. Ideally, these should be used as little as possible, as writing extensive page specific overrides leads to code that is not re-usable.
