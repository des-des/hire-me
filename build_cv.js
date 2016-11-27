const path = require('path')
const markdownpdf = require('markdown-pdf')

const rawFsPath = path.join(__dirname, (process.argv[2] || 'cv.md'))
const pdfTargetFsPath = path.join(__dirname, (process.argv[3] || 'cv.pdf'))

markdownpdf({
  cssPath: './style.css',
  paperBorder: '1.2cm'
}).from(rawFsPath).to(pdfTargetFsPath, () => { console.log("Done") })
