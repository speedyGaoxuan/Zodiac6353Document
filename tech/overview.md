# 技术总览

本章节提供FRC 6353机器人项目的完整技术架构概览。

## 项目结构

```
robot-code/
├── src/
│   ├── main/
│   │   └── java/frc/team6353/
│   │       ├── Robot.java          # 主程序入口
│   │       ├── subsystems/         # 子系统模块
│   │       ├── commands/           # 命令模式实现
│   │       └── utils/              # 工具类
│   └── test/
├── build.gradle                     # Gradle构建配置
└── README.md
```

## 技术栈

### 编程语言
- **Java 11+** - 主要开发语言
- **Gradle** - 项目构建工具

### 框架和库
- **WPILib** - FRC官方库
- **CTRE Phoenix** - 电机控制库
- **REV Robotics** - 传感器库

### 版本控制
- **Git** - 代码版本控制
- **GitHub** - 代码托管平台

## 核心概念

### 命令模式
所有机器人动作都通过Command实现：
- Subsystems - 子系统（驱动、发射等）
- Commands - 命令（前进、射击等）
- Scheduler - 命令调度器

### 主要子系统
1. **驱动系统** - 底盘运动
2. **发射系统** - 发射机制
3. **摄像头系统** - 视觉识别
4. **传感器系统** - 环境感知

## 文档导航

- [机械设计](/tech/mechanical) - 硬件设计文档
- [电气系统](/tech/electrical) - 电路和接线
- [代码架构](/tech/code-architecture) - 详细编程指南

## 资源链接

- [WPILib文档](https://docs.wpilib.org/)
- [FRC官网](https://www.firstinspires.org/)
- [Team6353 GitHub](https://github.com/your-organization/team-6353)

## 最近更新

- 2024年1月 - 更新至WPILib 2024版本
- 2024年2月 - 新增摄像头集成模块
