# FRC Team 6353 文档库

欢迎来到FRC Team 6353的官方文档库！本项目使用VitePress构建，提供完整的技术文档、指南和资源。

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 本地开发

```bash
npm run docs:dev
```

然后在浏览器中打开 `http://localhost:5173`

### 构建生产版本

```bash
npm run docs:build
```

生成的静态文件在 `.vitepress/dist` 目录中。

### 预览生产构建

```bash
npm run docs:preview
```

## 📖 文档结构

```
.
├── index.md                 # 首页
├── guide/                   # 入门指南
│   ├── introduction.md      # 介绍
│   ├── getting-started.md   # 快速开始
│   └── setup.md             # 环境配置
├── tech/                    # 技术文档
│   ├── overview.md          # 技术总览
│   ├── mechanical.md        # 机械设计
│   ├── electrical.md        # 电气系统
│   └── code-architecture.md # 代码架构
├── resources/               # 资源库
│   └── index.md             # 资源索引
└── .vitepress/
    └── config.ts            # VitePress配置文件
```

## 🛠️ 文档编辑指南

### 创建新页面

1. 在相应目录创建 `.md` 文件
2. 在顶部添加frontmatter（可选）
3. 使用Markdown编写内容
4. 更新 `.vitepress/config.ts` 的sidebar配置

### Markdown语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体** *斜体* ~~删除线~~

- 列表项1
- 列表项2

1. 有序列表
2. 有序列表

[链接文本](https://example.com)

![图片说明](image.png)

| 列1 | 列2 |
|-----|-----|
| 值1 | 值2 |

\`\`\`java
// 代码块
public void hello() {
    System.out.println("Hello");
}
\`\`\`
```

### 内部链接

```markdown
[首页](/)
[快速开始](/guide/getting-started)
[技术文档](/tech/overview)
```

## 🎨 VitePress功能

### 组件支持

VitePress支持在Markdown中使用Vue组件：

```markdown
<div class="info">
这是一个自定义组件
</div>
```

### 代码高亮

```java
public class Robot extends TimedRobot {
    @Override
    public void robotInit() {}
}
```

### 告示框

:::info
这是一个信息框
:::

:::warning
这是一个警告框
:::

:::danger
这是一个危险框
:::

## 🔐 部署

### GitHub Pages部署

1. 将仓库推送到GitHub
2. 在GitHub设置中启用Pages
3. 选择 `.vitepress/dist` 作为源目录
4. 保存即可自动部署

### 其他部署选项

- Netlify - 免费静态站点托管
- Vercel - Next.js公司的部署平台
- 自托管服务器 - 传统的Web服务器

## 📝 贡献指南

### 提交更改

```bash
# 创建功能分支
git checkout -b docs/feature-name

# 编辑文档
# ...

# 提交变更
git add .
git commit -m "docs: add new guide"

# 推送到远程
git push origin docs/feature-name

# 创建Pull Request
```

### 代码审核

所有文档更改都需要至少一个team lead的审核。

## 🐛 问题和反馈

如果发现文档错误或有改进建议，请：

1. 提交[Issue](https://github.com/team-6353/docs/issues)
2. 在团队Slack中讨论
3. 创建Pull Request修复

## 📋 最佳实践

- ✓ 保持文档最新和准确
- ✓ 使用清晰的标题和结构
- ✓ 包含代码示例和图表
- ✓ 添加目录链接帮助导航
- ✓ 定期审查和更新过时内容
- ✓ 使用中文和英文（根据需要）

## 📚 相关资源

- [VitePress官方文档](https://vitepress.dev/)
- [Markdown教程](https://www.markdownguide.org/)
- [WPILib文档](https://docs.wpilib.org/)
- [FRC官网](https://www.firstinspires.org/)

## 👥 维护者

- **文档负责人**: [名字] - docs@team6353.com
- **技术负责人**: [名字] - tech@team6353.com

## 📄 许可证

CC BY 4.0 - 自由分享和改编，需要注明出处

---

**最后更新**: 2024年2月28日
**维护团队**: FRC Team 6353
**语言**: 中文 (简体)
