# Dream AI 企业智能体平台网站部署指南

## 部署到 Vercel

### 方法一：一键部署（推荐）

点击下方按钮即可一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/dream-ai-website)

### 方法二：手动部署

#### 1. 准备工作

1. 访问 [Vercel官网](https://vercel.com) 并注册账号
2. 下载本项目的ZIP文件

#### 2. 部署步骤

1. 登录 Vercel 控制台
2. 点击 "New Project"
3. 选择 "Import Git repository" 或 "Upload a ZIP file"
4. 如果上传ZIP文件，选择 `dream-ai-website.zip`
5. 点击 "Deploy"

#### 3. 自定义域名（可选）

1. 在 Vercel 控制台找到你的项目
2. 点击 "Settings" -> "Domains"
3. 输入你的自定义域名
4. 按照提示配置 DNS 记录

## 项目结构

```
company_website/
├── index.html          # 主页面
├── css/               # 样式文件
│   └── final-perfect-style.css  # 主样式文件
├── js/                # JavaScript 文件
│   └── tech-script.js # 交互脚本
├── images/            # 图片资源
│   └── wechat-qr.jpg  # 微信二维码
├── vercel.json        # Vercel 配置文件
└── deploy-to-vercel.md # 部署说明文档
```

## 功能特性

- 响应式设计，支持移动设备
- 现代化的科技风格界面
- AI智能体平台完整展示
- 客户案例和业务范围介绍
- 联系表单功能

## 技术栈

- HTML5
- CSS3
- JavaScript
- Font Awesome 图标库
- 静态网站托管

## 环境要求

- 无需后端环境，纯静态文件
- 支持现代浏览器