# 资源库

FRC 6353团队的资源集合和文件下载中心。

## 📁 CAD设计文件

所有CAD模型存储在团队仓库：

- **主组件**
  - [底盘总成](https://github.com/team-6353/cad-files) - Fusion 360格式
  - [发射机制 v3](https://github.com/team-6353/cad-files)
  - [进料系统](https://github.com/team-6353/cad-files)

- **下载链接**
  - [完整CAD库 (OneDrive)](https://onedrive.example.com/team-6353-cad)
  - [STEP文件导出](https://github.com/team-6353/cad-files/releases)

## 💻 代码仓库

### 主要仓库
- **[Robot Code](https://github.com/team-6353/robotcode)** - 主机器人程序
  - 分支: main (稳定), develop (开发), features/*
  - 使用WPILib 2024版本

- **[Vision System](https://github.com/team-6353/vision)** - 摄像头识别
  - OpenCV C++ 实现
  - 实时目标追踪

### 文件结构
```
robotcode/
├── src/           # Java源代码
├── build.gradle   # Gradle配置
├── docs/          # API文档
└── test/          # 单元测试
```

### Git工作流
```bash
# 克隆仓库
git clone https://github.com/team-6353/robotcode.git

# 创建功能分支
git checkout -b feature/new-feature

# 提交和推送
git commit -m "Add new feature"
git push origin feature/new-feature

# 创建Pull Request
```

## 📚 学习资料

### 官方文档
- [WPILib文档](https://docs.wpilib.org/) - FRC官方库文档
- [FRC Game Manual](https://www.firstinspires.org/) - 比赛规则

### 教程和指南
- [Java编程基础](https://www.w3schools.com/java/)
- [Git教程](https://www.git-scm.com/book/zh/v2)
- [Gradle构建系统](https://gradle.org/guides/)

### 视频教程
- YouTube - WPILib入门系列
- YouTube - FRC机器人编程
- 团队内部培训录像

## 🔗 参考链接

### FRC资源
| 资源 | 链接 |
|------|------|
| FRC官网 | https://www.firstinspires.org/ |
| WPILib项目 | https://wpilib.org/ |
| CTRE文档 | https://docs.ctre-phoenix.com/ |
| REV文档 | https://docs.revrobotics.com/ |

### 工具和软件
| 工具 | 用途 | 链接 |
|------|------|------|
| VS Code | IDE编辑器 | https://code.visualstudio.com/ |
| Fusion 360 | CAD设计 | https://www.autodesk.com/products/fusion-360/ |
| Git | 版本控制 | https://git-scm.com/ |
| WPILib Plugin | VS Code扩展 | 在VS Code扩展市场搜索 |

### 电子产品供应商
| 供应商 | 产品 |
|--------|------|
| REV Robotics | Spark MAX, NEO电机 |
| CTRE | Falcon 500, Talon SRX |
| AndyMark | 轮子, 传送带 |
| VEXpro | 齿轮, 滑轮 |

## 📋 文档模板

### 设计文档模板
```markdown
# [功能名称] 设计文档

## 概述
简要说明此功能的目的

## 需求
- 需求1
- 需求2

## 设计方案
详细的实现方案

## 测试计划
如何验证此功能
```

### 代码贡献指南
1. Fork仓库
2. 创建功能分支
3. 编写代码和测试
4. 提交Pull Request
5. 等待审核

## 📦 依赖和版本

### Java依赖
```
WPILib: 2024.3.2
CTRE Phoenix: 6.0.1
REV Robotics: 24.1.0
```

### 开发工具版本
```
JDK = 17
Gradle = 8.x
VS Code = 最新稳定版
```

## 联系方式

- **技术负责人**: [名字] (email@example.com)
- **项目经理**: [名字] (email@example.com)
- **团队Slack**: #robotics-dev

## 最后更新

2024年2月 - 更新至WPILib 2024版本和依赖库
