// 将 embeddings.npy 转换为 embeddings.json
// .npy 格式: 128 字节 header + float32 数据

import { readFileSync, writeFileSync } from 'fs';

const npyPath = 'public/knowledge/embeddings.npy';
const outPath = 'public/knowledge/embeddings.json';

const buf = readFileSync(npyPath);

// 跳过 numpy header（以 \n 结尾，在 128 字节内）
let headerEnd = 0;
for (let i = 0; i < 128; i++) {
  if (buf[i] === 0x0a) { // \n
    headerEnd = i + 1;
    break;
  }
}

const float32Buf = buf.buffer.slice(buf.byteOffset + headerEnd);
const float32Array = new Float32Array(float32Buf);

// 解析 shape
const headerStr = buf.subarray(0, headerEnd).toString('utf-8');
const shapeMatch = headerStr.match(/'shape':\s*\((\d+),\s*(\d+)\)/);
const rows = parseInt(shapeMatch[1]);
const cols = parseInt(shapeMatch[2]);

console.log(`Shape: (${rows}, ${cols}), Total floats: ${float32Array.length}`);

// 转为二维数组
const embeddings = [];
for (let i = 0; i < rows; i++) {
  embeddings.push(Array.from(float32Array.slice(i * cols, (i + 1) * cols)));
}

writeFileSync(outPath, JSON.stringify(embeddings));
console.log(`Written ${outPath} (${rows} x ${cols})`);
