// eslint.config.js
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  {
    name: 'app/ignores',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  {
    name: 'app/language-options',
    languageOptions: {
      globals: {
        ...globals.browser,
        // 自定义全局变量（如 Element Plus）
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
        ElLoading: 'readonly'
      }
    }
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,

  {
    name: 'app/custom-rules',
    rules: {
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] // 忽略 index.vue
        }
      ],
      'vue/no-setup-props-destructure': 'off', // 关闭 props 解构校验
      'no-undef': 'error', // 禁止使用未声明变量
      'no-unused-vars': 'off' // 关闭未使用变量警告
    }
  }
])
