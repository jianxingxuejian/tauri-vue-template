<h1 align="center">tauri-vue-template</h1>

[English](README.md) | 简体中文

这是我经常使用的 Tauri+Vue 项目模板，使用[Vue3](https://github.com/vuejs/vue) + [Typescript](https://github.com/microsoft/TypeScript) + [Vite4](https://github.com/vitejs/vite) 搭建前端部分。

## 特性

- 原子化 CSS 框架 [UnoCSS](https://github.com/unocss/unocss)，兼容 [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) 和 [WindiCSS](https://github.com/windicss/windicss) 的写法
- 使用 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)，[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)，[unplugin-icons](https://github.com/antfu/unplugin-icons)，零引用、随心所欲地使用公用组件，Vue VueRouter Pinia 的函数，数十万个 [Iconify](https://iconify.design) 图标
- ESLint+Prettier 风格检查，lint-staged+simple-git-hooks 钩子检查
- 完善的工作流，包括前端/后端各自的风格检查、单元测试、打包测试、发布

## 先决条件

- 安装 **Rust** 环境，前往[官网](https://www.rust-lang.org/learn/get-started)下载
- 安装 **Node** 环境，前往[官网](https://nodejs.org)下载
- 安装[Pnpm](https://pnpm.io)，作为前端包管理工具
- 推荐使用 VSCode 编辑器，项目已配置了 VSCode 推荐使用的插件和一些配置项

## 快速开始

```shell
// 克隆本项目
git clone https://github.com/jianxingxuejian/tauri-vue-template
// 安装依赖
pnpm i
// Tauri开发模式
pnpm tauri dev
// 开启VueDevTools
pnpm devtools
// 打包,如果需要打包出来的带控制台，加上--debug参数
pnpm tauri build
```

## 编译和发布

所有的推送和 PR 会根据提交的文件触发前/后端的 Lint 检查、单元测试、打包测试。

tauri 是跨平台的，但是只能在各自平台上进行编译，当你推送版本号时会触发发布工作流，编译打包出各个平台的二进制文件。

发布新版本之前，你需要在 tauri.conf.json 修改版本号，然后将新版本 tag 推送到 github 触发工作流。

```shell
git tag vX.Y.Z
git push origin vX.Y.Z
```

## 贡献

欢迎进行贡献，帮助这个项目变得更加完善

## 许可

本项目使用 [MIT](https://github.com/jianxingxuejian/tauri-vue-template/blob/main/LICENSE) 许可证书。
