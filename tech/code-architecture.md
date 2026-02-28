# 代码架构

详细的软件开发指南和最佳实践。

## 项目结构

```
src/main/java/frc/team6353/
├── Robot.java                    # 主机器人类
├── RobotContainer.java          # 机器人容器
├── Constants.java               # 常量定义
├── subsystems/                  # 子系统
│   ├── DriveSubsystem.java
│   ├── LauncherSubsystem.java
│   ├── IntakeSubsystem.java
│   └── SensorSubsystem.java
├── commands/                    # 命令
│   ├── drive/
│   │   ├── DriveCommand.java
│   │   └── TurnCommand.java
│   ├── launcher/
│   │   ├── LaunchCommand.java
│   │   └── StopCommand.java
│   └── auto/
│       └── AutoDriveCommand.java
└── utils/                       # 工具类
    ├── MathUtils.java
    └── LoggerUtil.java
```

## 命令模式

### Command基础

所有命令都继承自`CommandBase`：

```java
public class LaunchCommand extends CommandBase {
    private final LauncherSubsystem launcher;
    
    public LaunchCommand(LauncherSubsystem launcher) {
        this.launcher = launcher;
        addRequirements(launcher);
    }
    
    @Override
    public void execute() {
        launcher.launch();
    }
    
    @Override
    public boolean isFinished() {
        return !launcher.isLoaded();
    }
}
```

### Subsystem设计

```java
public class DriveSubsystem extends SubsystemBase {
    private TalonFX leftMaster;
    private TalonFX rightMaster;
    
    public DriveSubsystem() {
        leftMaster = new TalonFX(LEFT_MOTOR_ID);
        rightMaster = new TalonFX(RIGHT_MOTOR_ID);
    }
    
    public void drive(double forward, double rotation) {
        double leftSpeed = forward + rotation;
        double rightSpeed = forward - rotation;
        
        leftMaster.set(ControlMode.PercentOutput, leftSpeed);
        rightMaster.set(ControlMode.PercentOutput, rightSpeed);
    }
    
    @Override
    public void periodic() {
        // 每20ms执行一次
        SmartDashboard.putNumber("Left Encoder", getLeftEncoder());
    }
}
```

## 常用库和工具

### WPILib核心
```java
import edu.wpi.first.wpilibj.*;
import edu.wpi.first.wpilibj.command.*;
import edu.wpi.first.wpilibj.geometry.*;
```

### 马达API
```java
// Falcon 500 (CTRE)
TalonFX talonFX = new TalonFX(motorID);

// Spark MAX (REV)
CANSparkMax sparkMax = new CANSparkMax(motorID, 
    MotorType.kBrushless);

// 775Pro (PWM)
Spark pwmMotor = new Spark(pwmChannel);
```

### 传感器集成
```java
// 编码器
Encoder encoder = new Encoder(portA, portB);
encoder.setMaxPeriod(0.1);

// 陀螺仪
AHRS navx = new AHRS(SPI.Port.kMXP);
double angle = navx.getAngle();

// 距离传感器
AnalogInput sonar = new AnalogInput(0);
```

## 代码规范

### 命名约定
```java
// 成员变量 - camelCase with 'm' prefix
private double mVelocity;

// 常量 - UPPER_SNAKE_CASE
public static final int MOTOR_ID = 1;

// 方法 - camelCase (动词开头)
public void setMotorSpeed(double speed)
```

### 注释标准
```java
/**
 * 计算所需的电机输出功率
 * 
 * @param targetVelocity 目标速度 (m/s)
 * @return 电机功率输出 (0-1)
 */
public double calculateMotorOutput(double targetVelocity) {
    // 实现细节...
}
```

## 调试工具

### SmartDashboard
```java
SmartDashboard.putNumber("Motor Speed", motorSpeed);
SmartDashboard.getNumber("setpoint", 0.0);
```

### 日志记录
```java
DataLogManager.start();
logger.recordOutput("Motors/MotorA", motorA.get());
```

## 自动程序

### 路径规划
```java
// 定义轨迹点
var trajectory = TrajectoryGenerator.generateTrajectory(
    new Pose2d(0, 0, new Rotation2d(0)),
    List.of(new Translation2d(1, 0)),
    new Pose2d(2, 0, new Rotation2d(0)),
    config
);
```

### 状态机
```java
enum State {
    IDLE,
    DRIVING,
    LAUNCHING,
    COMPLETE
}

private State state = State.IDLE;

@Override
public void teleopPeriodic() {
    switch(state) {
        case DRIVING:
            // 驾驶逻辑
            break;
        case LAUNCHING:
            // 发射逻辑
            break;
    }
}
```

## 最佳实践

1. **使用常量** - 不要硬编码数值
2. **异常处理** - 捕获和记录异常
3. **线程安全** - 避免竞态条件
4. **单元测试** - 编写可测试的代码
5. **版本控制** - 经常提交，写好commit消息

## 常见问题

**Q: 如何在RoboRIO上运行我的代码？**
A: 在Gradle中运行 `./gradlew deploy`

**Q: 怎样调试电机不转的问题？**
A: 检查CAN ID和电源连接，使用SmartDashboard监控电压

## 参考资源

- [WPILib Java API文档](https://first.wpi.edu/wpilib/allwpilib/docs/release/java/)
- [CTRE Phoenix架构](https://v5.docs.ctr-electronics.com/)
- [Git实用指南](https://www.git-scm.com/book/zh/v2)
