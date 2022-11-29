<h1 align='center'>
  ⚡️ Vicro ⚡️
  <br>
  <img src='https://user-images.githubusercontent.com/46400321/204583377-7f53a18e-96e6-4a1c-9a64-f2657a374079.png' alt='Opinionated Vite - Google Chrome Extension Starter Template' width='600'/>
</h1>

<p align='center'>
Mocking up Chrome Extension with <b>Vicro</b><br>
</p>

## Features

- 🖨 `manifest.json` generate from TypeScript

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 📦 [Components auto importing](./src/components/base)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🎨 [WindiCSS](https://windicss.org) - Next generation utility-first CSS framework.

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript

## Try it now!

> Vicro requires Node >=14.18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/imrim12/vicro/generate).

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the extension information in `manifest.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs

## Usage

### Development

Since the extension works like a normal web application, you can start the development server normally.

```bash
pnpm dev
```

### Build

To build the Extension, run

```bash
pnpm build
```

And you will see the generated files in `dist` that ready to be loaded by the Browser.
