# bigevent-admin

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

# 说明文档

可以管理文章的后台系统
一个vue3的练手项目，遵循企业规范化开发

## 从0开始

### 安装pnpm

npm i -g pnpm

### 创建项目

pnpm create vue
选择Router、Pinia、ESLint、Prettier

### 初始化

pnpm i

### 运行

pnpm dev

### 配置eslint&prettier

eslint.config.js配置eslint规则
.prettierrc.json配置prettier规则
建议不要在eslint.config.js配置prettier规则
vscode安装ESLint、Prettier插件

//.prettierrc.json
{
singleQuote: true, // 单引号
semi: false, // 无分号
printWidth: 80, // 每行宽度至多80字符
trailingComma: 'none', // 不加对象|数组最后逗号
endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
}

//eslint.config.js
{
rules: {
'vue/multi-word-component-names': [
'warn',
{
ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
}
],
'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
'no-undef': 'error'// 未定义变量
}
}

### 配置husky

用于提交时检查代码
npx husky-init && npm i

//.husky/pre-commit
pnpm lint
