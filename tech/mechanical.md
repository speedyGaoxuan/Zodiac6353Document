# 机械设计

本文档介绍FRC 6353机器人的机械设计细节。

## 设计原则

1. **简洁** - 简单可靠的设计
2. **模块化** - 易于维修和升级
3. **轻量** - 保持性能和重量平衡
4. **耐用** - 能承受比赛压力

## 底盘设计

### 驱动方式
- **类型**: 四轮差速驱动
- **轮径**: 15.24cm
- **轮距**: 68cm
- **电机**: 4 × Falcon 500电机
- **最高速**: 5 m/s

### 悬挂系统
- 独立悬挂每个车轮
- 柔性车轮减震
- 最大爬坡角度: 30°

## 发射机制

### 飞轮发射器
```
┌─────────────────┐
│   供弹系统      │
├─────────────────┤
│   飞轮发射器    │
│   (2×NEO 550)   │
│   3500 RPM      │
└─────────────────┘
```

**规格**:
- 飞轮直径: 10cm
- 转速: 3500 RPM
- 发射频率: 10球/秒
- 最大射程: 8米

## CAD文件

所有CAD文件存储在:
- [OneDrive团队文件夹](https://onedrive.example.com)
- [GitHub Release](https://github.com/team-6353/cad-files)

### 主要文件列表
- `chassis_assembly.stp` - 底盘总成
- `launcher_v3.stp` - 发射器最新版本
- `intake_mechanism.stp` - 进料机制

## 材料列表

| 组件 | 材料 | 数量 | 备注 |
|------|------|------|------|
| 底盘 | 铝1061 | 1套 | 轻量化 |
| 发射轮 | 钢 | 2个 | 高强度 |
| 传送带 | 橡胶 | 2条 | 防滑 |

## 制造注意事项

1. 所有铝件需要阳极氧化处理
2. 螺钉使用防胶
3. 轴承需要润滑
4. 定期检查磨损部件

## 维修指南

- [底盘维修](/tech/mechanical/chassis-maintenance)
- [发射器维修](/tech/mechanical/launcher-maintenance)
- [电机更换](/tech/mechanical/motor-replacement)

## 相关资源

- [WPI机械设计手册](https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/index.html)
- [Fusion 360教程](https://fusion360basics.com/)
