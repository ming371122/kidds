# Kidds - 儿童英语学习项目

## 项目简介
Kidds是一个儿童英语学习项目的主页应用，主要功能是自动扫描项目目录下的HTML文件并提取标题，为用户提供一个直观的文件浏览界面。

## 功能特点

### 核心功能
- **文件扫描**：自动扫描项目目录下的所有HTML文件
- **标题提取**：从HTML文件中解析并提取<title>标签内容作为文件标题
- **文件展示**：以列表形式清晰展示所有扫描到的HTML文件及其标题
- **文件访问**：提供直接访问HTML文件的链接

### 界面功能
- **搜索功能**：支持按文件名和标题搜索文件
- **排序功能**：支持按标题或路径进行升序/降序排序
- **响应式设计**：适配不同设备屏幕尺寸，确保在手机、平板和桌面端都有良好的显示效果

### 部署集成
- **GitHub集成**：符合GitHub托管要求，包含.gitignore文件配置
- **Cloudflare Workers部署**：支持通过Cloudflare Workers部署和访问

## 技术栈

- **后端**：Node.js + Express
- **前端**：HTML5 + CSS3 + JavaScript
- **文件系统**：Node.js fs模块
- **部署**：Cloudflare Workers

## 安装和使用

### 本地开发

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd kidds
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动服务器**
   ```bash
   npm start
   ```

4. **访问应用**
   打开浏览器，访问 http://localhost:3000

### Cloudflare Workers部署

1. **确保项目已推送到GitHub**

2. **登录Cloudflare控制台**
   - 导航到Workers & Pages
   - 点击"Create Application"
   - 选择"Pages"选项
   - 连接到GitHub仓库
   - 配置构建设置：
     - 框架预设：None
     - 构建命令：`npm install && npm run build`
     - 构建输出目录：`/`

3. **部署应用**
   - 点击"Deploy Site"
   - 等待部署完成
   - 访问生成的Cloudflare Pages URL

## 项目结构

```
kidds/
├── index.js          # 主应用文件，包含后端逻辑
├── index.html        # 前端界面文件
├── package.json      # 项目配置和依赖
├── .gitignore        # Git忽略文件配置
└── README.md         # 项目文档
```

## 性能优化

- **文件扫描优化**：使用递归遍历方式，高效扫描目录结构
- **标题提取优化**：使用正则表达式快速解析HTML文件中的标题
- **前端性能**：使用原生JavaScript，减少依赖，提高加载速度
- **响应式设计**：使用CSS Flexbox和媒体查询，确保在不同设备上的良好体验

## 兼容性

确保在以下主流现代浏览器中正常运行：
- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License
