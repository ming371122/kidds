const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(__dirname));

// 扫描目录下的所有HTML文件
function scanHtmlFiles(directory) {
  const htmlFiles = [];
  
  function traverse(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (path.extname(file) === '.html') {
        const relativePath = path.relative(__dirname, filePath);
        const title = extractTitleFromHtml(filePath);
        htmlFiles.push({ path: relativePath, title });
      }
    });
  }
  
  traverse(directory);
  return htmlFiles;
}

// 从HTML文件中提取标题
function extractTitleFromHtml(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : '无标题';
  } catch (error) {
    console.error(`读取文件 ${filePath} 时出错:`, error);
    return '无标题';
  }
}

// API端点：获取HTML文件列表
app.get('/api/html-files', (req, res) => {
  try {
    const htmlFiles = scanHtmlFiles(__dirname);
    res.json({ files: htmlFiles });
  } catch (error) {
    console.error('扫描文件时出错:', error);
    res.status(500).json({ error: '扫描文件失败' });
  }
});

// 根路径
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
