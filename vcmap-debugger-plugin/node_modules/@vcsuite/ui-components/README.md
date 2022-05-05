# VCS ui-components

> Part of the [VC Map Project](https://github.com/virtualcitySYSTEMS/map-ui)

A set of UI components based on Vuetify.

## Project setup

1. Create project with vue cli
    - (select sass dart as css-preprocessor (also added by vuetify))
2. `vue add vuetify`
3. `npm i -S @vcsuite/ui-components`
4. Within your vite config add `src/styles/variables.scss` to css
```js
{
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: "\n@import './node_modules/@vcsuite/ui-components/src/styles/variables.scss'\n"
      }
    }
  }
}
```
5. For hot reload off changes to variables.scss add to your vite config
```js
{
  optimizeDeps: {
    exclude: ['@vcsuite/ui-components']
  }
  server: {
    watch: {
      ignored: ['!**/node_modules/@vcsuite/ui-components/**']
    }
  }
}
```

## Styles
This ui components library comes with an individual style on top of [vuetify](https://vuetifyjs.com), customized by overwriting styles and extended by own style definitions.
The style is defined on three levels following this order:
1. [vuetify API](https://vuetifyjs.com/en/api/vuetify/), e.g. make use of properties like `dense, outlined`
2. [sass](https://sass-lang.com/) variables
  - overwriting vuetify in [variables.scss](/src/styles/variables.scss)
  - defining own variables (e.g. [vcsFont.scss](/src/styles/vcsFont.scss)
3. scoped [css](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS) within single components


## Running & Writing Tests
To run tests use `npm run test`, or `coverage` for coverage. Tests are run
with [`vitest`](https://vitest.dev/). Use BDD style test definitions.

### Working with snapshots
Snapshots are great for testing UI components. But:
- to create a snapshot, simply use `expect(foo).toMatchSnapshot()` and check in
  the created snapshot file.
- do not run your watched tests with `--update`.
- be sure to only update snapshots you are actually working on.
- to update a snapshot, run `npm run test -- $FILE_NAME --run --update`
