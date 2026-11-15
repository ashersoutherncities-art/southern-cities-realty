// Regression checks for the shared text palette; not a full accessibility audit.
const fs=require('fs');
const luminance=h=>{const v=h.replace('#','').match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]};
for(const [label,fg,bg] of [['team names','#132452','#ffffff'],['light-surface accent','#9a4f16','#fbf7f1'],['body and small metadata','#5c6577','#f5f1ea'],['primary buttons','#132452','#fa8c41'],['primary hover','#132452','#f7a15f'],['dark-section accents','#fa8c41','#132452']]){const a=luminance(fg),b=luminance(bg),r=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);if(r<4.5)throw Error(label+' contrast '+r);console.log(label+': '+r.toFixed(2)+':1')}
const home=fs.readFileSync('app/home-content.ts','utf8');if(!home.includes('.tcard{color:var(--navy);')||!home.includes('.tcard h3{font-size:23px;color:var(--navy);}'))throw Error('Team foreground reset missing');
