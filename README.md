<h1 align="center">tauri-vue-template</h1>

English | [简体中文](README_zh-CN.md)

This is a Tauri+Vue project template that I frequently use, built with [Vue3](https://github.com/vuejs/vue) + [Typescript](https://github.com/microsoft/TypeScript) + [Vite4](https://github.com/vitejs/vite) for the frontend.

## Features

- Atomic CSS framework [UnoCSS](https://github.com/unocss/unocss)，compatible with the syntax of [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) and [WindiCSS](https://github.com/windicss/windicss)
- Use [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)，[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)，[unplugin-icons](https://github.com/antfu/unplugin-icons), for zero import, on-demand use of common components, Vue functions, VueRouter, Pinia, and hundreds of thousands of Iconify icons.
- ESLint+Prettier for code style checking, lint-staged+ simple-git-hooks for hooks checking.
- Perfect workflow, including style checking, unit testing, build testing for both frontend and backend and release.

## Prerequisites

- Install **Rust** environment, download from the [official website](https://www.rust-lang.org/learn/get-started).
- Install **Node** environment, download from the [official website](https://nodejs.org).
- Install [Pnpm](https://pnpm.io), as the frontend package management tool.
- It is recommended to use the VSCode editor. The project has configured the plugins and some recommended settings for VSCode.

## Quick start

```shell
// Clone the repository
git clone https://github.com/jianxingxuejian/tauri-vue-template
// Install dependencies
pnpm i
// Tauri development mode
pnpm tauri dev
// Open VueDevTools
pnpm devtools
// Build, if you need a console in the packaged version, add the --debug parameter
pnpm tauri build
```

## Compilation and release

All pushes and PRs will trigger frontend/backend Lint checks, unit tests, and build tests based on the submitted files.

Tauri is cross-platform, but compilation can only be done on the respective platform. When you push the version tag, the release workflow will be triggered to compile and package binary files for various platforms.

Before releasing a new version, you need to modify the version number in tauri.conf.json, and then push the new version tag to Github to trigger the workflow.

```shell
git tag vX.Y.Z
git push origin vX.Y.Z
```

## Contributions

Contributes are welcome to help improve this project.

## License

This project is licensed under the [MIT](https://github.com/jianxingxuejian/tauri-vue-template/blob/main/LICENSE) license.
