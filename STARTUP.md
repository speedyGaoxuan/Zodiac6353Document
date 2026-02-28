# VitePress 文档库启动指南

## 📋 项目概述

已为您创建了一个完整的VitePress文档库项目，结构如下：

```
d:\FRC\6353Document\
├── .vitepress/
│   └── config.ts              # VitePress配置文件
├── guide/                     # 入门指南
├── tech/                      # 技术文档
├── resources/                 # 资源库
├── index.md                   # 首页
├── package.json               # 项目配置和依赖
├── tsconfig.json              # TypeScript配置
├── .gitignore                 # Git忽略文件
└── README.md                  # 项目说明
```

## 🚀 开始使用

### 步骤1: 安装Node.js和npm

如果尚未安装，请从 https://nodejs.org/ 下载并安装Node.js LTS版本。

### 步骤2: 安装项目依赖

打开命令行，进入项目目录：

```powershell
cd d:\FRC\6353Document
npm install
```

预计耗时3-5分钟（取决于网络速度）。

### 步骤3: 本地开发

运行开发服务器：

```powershell
npm run docs:dev
```

在浏览器中打开 `http://localhost:5173` 查看网站。

**特点**:
- 文件自动热重载
- 修改Markdown立即生效
- 完整的开发体验

### 步骤4: 编辑文档

使用任何文本编辑器（VS Code推荐）编辑 `.md` 文件，更改会实时显示在浏览器中。

### 步骤5: 构建生产版本

完成编辑后，构建静态网站：

```powershell
npm run docs:build
```

生成的文件在 `.vitepress/dist` 目录中。

## 📁 文档目录说明

### 首页 (`index.md`)
- 项目首页
- 包含导航和特性介绍

### 入门指南 (`guide/`)
- `introduction.md` - 项目介绍
- `getting-started.md` - 新成员快速开始
- `setup.md` - 环境配置指南

### 技术文档 (`tech/`)
- `overview.md` - 技术栈总览
- `mechanical.md` - 机械设计文档
- `electrical.md` - 电气系统文档
- `code-architecture.md` - 代码架构指南

### 资源库 (`resources/`)
- `index.md` - 资源索引、CAD文件、代码仓库链接

## ✏️ 编辑文档

### 创建新文档

1. 在相应目录创建 `.md` 文件（例如 `tech/new-page.md`）
2. 在 `.vitepress/config.ts` 的配置中添加链接
3. 在新文件中编写Markdown内容

### 更新导航菜单

编辑 `.vitepress/config.ts` 中的 `themeConfig.nav` 和 `themeConfig.sidebar` 部分。

### Markdown语法

VitePress支持标准Markdown和扩展：

```markdown
# 标题
**粗体** *斜体*

- 列表
- 项目

[链接](url)
![图片](path/to/image.png)

::: info
提示框
:::

\`\`\`java
// 代码块
\`\`\`
```

## 🌐 部署

### GitHub Pages

1. 在GitHub上创建仓库
2. 将本地文件推送到GitHub
3. 在仓库Settings → Pages中：
   - Source选择"GitHub Actions"
   - 或手动配置Deploy to GitHub Pages工作流

### 其他平台

- **Netlify**: 连接GitHub仓库，自动构建部署
- **Vercel**: 类似Netlify的无服务器部署
- **传统服务器**: 上传`.vitepress/dist`目录内容

## 🎯 常见任务

### 添加新的导航项

编辑 `.vitepress/config.ts`:

```typescript
nav: [
  { text: '新页面', link: '/new-page' }
]
```

### 自定义样式

在 `.vitepress/theme/` 中创建 `custom.css`:

```css
:root {
  --vp-c-brand: #3b82f6; /* 品牌色 */
}
```

### 添加搜索功能

已在配置中启用本地搜索，访问网站顶部搜索框即可。

## 📚 官方资源

- [VitePress文档](https://vitepress.dev/)
- [Markdown指南](https://www.markdownguide.org/)
- [Vue 3文档](https://vuejs.org/)

## 🆘 故障排除

| 问题 | 解决方案 |
|------|--------|
| npm install失败 | 清除缓存: `npm cache clean --force` |
| 端口5173被占用 | 修改: `npm run docs:dev -- --port 5174` |
| 搜索不工作 | 确保已运行 `npm run docs:build` |
| 样式不显示 | 清除缓存: 删除 `.vitepress/.temp` |

## 💡 下一步

1. ✅ 修改 `.vitepress/config.ts` 中的网站信息
2. ✅ 添加更多文档页面
3. ✅ 自定义主题和样式
4. ✅ 部署到线上服务器
5. ✅ 设置CI/CD自动构建

---

**祝您文档构建愉快！** 🎉

有问题？请访问 [VitePress官方文档](https://vitepress.dev/) 或咨询团队技术负责人。
