# take-notes-web-component

## Overview \<take-notes>

An easy-to-use text highlighter, written in Typescript, that helps users to take notes rapidly.
`Lit` library was used in order to build the `take-notes-web-component` webcomponent.
It follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i take-notes
```

## Usage

```html
<script type="module">
  import "take-notes/take-notes.js";
</script>

<take-notes></take-notes>
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
