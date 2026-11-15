const fs=require('fs'),path=require('path'),ts=require('typescript'),vm=require('vm');
function read(file){const c={exports:{}};vm.runInNewContext(ts.transpile(fs.readFileSync(file,'utf8'),{module:ts.ModuleKind.CommonJS}),c);return c.exports}
const {posts}=read('app/blog/posts.ts'),{blogImages}=read('app/blog/images.ts');
for(const p of posts){const img=blogImages[p.slug];if(!img||!img.alt.trim()||!img.src.startsWith('/blog/')||!fs.existsSync(path.join('public',img.src)))throw new Error('Missing valid image: '+p.slug)}
console.log('Verified image mappings, alt text and files for '+posts.length+' articles.');
