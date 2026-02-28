# 安装配置

本页面包含开发环境的完整设置指南。

## 系统要求

- **操作系统**: Windows 10+, macOS 10.15+, 或现代Linux
- **Java版本**: JDK 11或更高
- **内存**: 至少8GB RAM
- **硬盘**: 至少10GB可用空间

## Windows安装步骤

### 1. 安装Java JDK

1. 访问 [Oracle JDK官网](https://www.oracle.com/java/technologies/downloads/)
2. 下载JDK 17或更高版本
3. 运行安装程序，按默认选项安装

### 2. 验证Java安装

打开命令行，输入：
```powershell
java -version
javac -version
```

### 3. 安装Git

1. 下载 [Git for Windows](https://git-scm.com/download/win)
2. 按默认选项安装
3. 验证：`git --version`

### 4. 配置Git

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## IDE安装

### 推荐: IntelliJ IDEA

1. 下载 [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download/)
2. 安装并启动
3. 安装 "FRC" 插件

### 替代方案: VS Code

1. 下载 [Visual Studio Code](https://code.visualstudio.com/)
2. 安装扩展：
   - Extension Pack for Java
   - FRC Tools

## 克隆项目

```bash
git clone https://github.com/your-team/robot-code.git
cd robot-code
```

## 构建项目

```bash
# 使用Gradle构建
./gradlew build

# 在IDE中构建
# 在IDE中打开项目，Gradle会自动下载依赖
```

## 故障排除

| 问题 | 解决方案 |
|------|--------|
| Java找不到 | 检查PATH环境变量 |
| Gradle下载缓慢 | 使用VPN或配置镜像 |
| 端口被占用 | 更改调试器端口 |

## 下一步

- 查看[技术总览](/tech/overview)
- 开始[代码开发](/tech/code-architecture)
