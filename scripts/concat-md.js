const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '../docs/notes/guide');
const outputFilePath = path.join(__dirname, '../all-guides.md');

// 递归获取所有 .md 文件
function getMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  let mdFiles = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      mdFiles = mdFiles.concat(getMarkdownFiles(filePath));
    } else if (stats.isFile() && path.extname(file) === '.md') {
      mdFiles.push(filePath);
    }
  });

  return mdFiles;
}

// 拼接所有 .md 文件内容
function concatMarkdownFiles(mdFiles, outputPath) {
  const content = "本文档供 AI 阅读. NcatBot 文档 base_url 为 `https://docs.ncatbot.xyz/`, 文档中包含相对链接，为用户生成链接时必须加上这个前缀生成绝对链接。\n\n" + (mdFiles.map((file) => fs.readFileSync(file, 'utf-8')).join('\n\n'));
  
  fs.writeFileSync(outputPath, content);
}

// 主程序
const mdFiles = getMarkdownFiles(rootDir);
concatMarkdownFiles(mdFiles, outputFilePath);

console.log(`所有 .md 文件已拼接到 ${outputFilePath}`);