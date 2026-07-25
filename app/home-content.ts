// AUTO-GENERATED from the reviewed homepage concept.
/* eslint-disable */
export const HOME_CSS = `
  *{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --navy:#132452; --navy-2:#1d2f66; --navy-3:#28398a;
    --orange:#fa8c41; --orange-2:#ef7d23; --orange-soft:#fde4cf;
    --cream:#fbf7f1; --cream-2:#f5f1ea; --white:#ffffff;
    --ink:#132452; --muted:#5c6577; --muted-2:#8a93a5;
    --line:#e8e2d6; --line-navy:#2a3b70;
    --display:var(--font-display),Georgia,serif; --body:var(--font-body),system-ui,sans-serif;
    --pad:clamp(20px,5vw,80px); --r:14px;
    --ease:cubic-bezier(.22,.61,.36,1);
  }
  #scr{background:var(--cream);color:var(--ink);font-family:var(--body);line-height:1.6;
    -webkit-font-smoothing:antialiased;overflow-x:clip;}
  #scr h1,#scr h2,#scr h3{font-family:var(--display);font-weight:500;line-height:1.05;
    letter-spacing:-.015em;text-wrap:balance;}
  #scr a{color:inherit;text-decoration:none;}
  .eyebrow{font-size:12px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;color:var(--orange-2);}
  .u-orange{position:relative;white-space:nowrap;}
  .u-orange svg{position:absolute;left:0;right:0;bottom:-.16em;width:100%;height:.34em;overflow:visible;}
  .btn{font-family:var(--body);font-weight:600;font-size:15px;border-radius:999px;padding:13px 26px;
    cursor:pointer;border:1.5px solid transparent;transition:.25s var(--ease);display:inline-flex;
    align-items:center;gap:8px;white-space:nowrap;}
  .btn-orange{background:var(--orange);color:#fff;box-shadow:0 10px 24px -10px rgba(250,140,65,.8);}
  .btn-orange:hover{background:var(--orange-2);transform:translateY(-2px);box-shadow:0 16px 30px -12px rgba(250,140,65,.9);}
  .btn-navy{background:var(--navy);color:var(--cream);}
  .btn-navy:hover{background:var(--navy-2);transform:translateY(-2px);}
  .btn-ghost{background:transparent;border-color:var(--navy);color:var(--navy);}
  .btn-ghost:hover{background:var(--navy);color:var(--cream);}
  .btn-light{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.4);color:#fff;}
  .btn-light:hover{background:rgba(255,255,255,.2);}

  .ribbon{background:var(--navy);color:#aeb8d6;font-size:11px;letter-spacing:.18em;text-transform:uppercase;
    text-align:center;padding:7px 12px;}
  .ribbon b{color:var(--orange);font-weight:700;}

  header{position:sticky;top:0;z-index:40;background:rgba(251,247,241,.85);backdrop-filter:blur(14px);
    border-bottom:1px solid var(--line);transition:.3s var(--ease);}
  header.scrolled{box-shadow:0 8px 30px -22px rgba(19,36,82,.5);}
  .hdr-in{max-width:1280px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:12px 22px;padding:13px clamp(16px,4vw,32px);}
  .logo{display:flex;align-items:center;gap:12px;}
  .logo img{height:44px;width:auto;}
  .logo .wm{font-family:var(--display);font-weight:600;font-size:19px;letter-spacing:.01em;line-height:1;color:var(--navy);}
  .logo .wm small{display:block;font-family:var(--body);font-size:8.5px;letter-spacing:.28em;
    text-transform:uppercase;color:var(--muted);margin-top:3px;font-weight:600;}
  nav{display:flex;gap:24px;margin-left:auto;font-size:14.5px;font-weight:500;}
  nav a{position:relative;padding:4px 0;color:var(--navy);cursor:pointer;}
  nav a::after{content:"";position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--orange);transition:width .25s var(--ease);}
  nav a:hover::after,nav a.active::after{width:100%;}
  nav a.active{color:var(--orange-2);}
  .hphone{font-size:13.5px;font-weight:600;color:var(--navy);white-space:nowrap;}
  @media(max-width:1000px){.hphone{display:none;}}

  .page[hidden]{display:none;}
  .page{animation:pageIn .5s var(--ease);}
  @keyframes pageIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

  .hero{position:relative;padding:clamp(40px,6vw,74px) var(--pad) clamp(60px,7vw,90px);overflow:hidden;}
  .hero-blob{position:absolute;top:-14%;right:-8%;width:46vw;max-width:640px;aspect-ratio:1;border-radius:50%;
    background:radial-gradient(circle at 40% 40%,var(--orange-soft),transparent 62%);z-index:0;pointer-events:none;}
  .hero-in{position:relative;z-index:1;display:grid;grid-template-columns:1.02fr .98fr;gap:clamp(26px,4vw,56px);align-items:center;}
  .hero h1{font-size:clamp(40px,6vw,72px);margin:16px 0 0;}
  .hero .sub{color:var(--muted);font-size:clamp(15px,1.7vw,18.5px);max-width:46ch;margin:22px 0 0;}
  .searchcard{margin:30px 0 0;background:var(--white);border:1px solid var(--line);border-radius:var(--r);
    padding:8px;box-shadow:0 30px 70px -40px rgba(19,36,82,.55);max-width:530px;}
  .tabs{display:flex;gap:2px;padding:4px;}
  .tab{flex:1;border:0;background:transparent;font-family:var(--body);font-weight:600;font-size:13.5px;
    color:var(--muted);padding:9px 6px;border-radius:9px;cursor:pointer;transition:.2s var(--ease);}
  .tab.on{background:var(--navy);color:var(--cream);}
  .searchrow{display:flex;gap:8px;padding:6px;}
  .searchrow input{flex:1;border:0;outline:0;font-family:var(--body);font-size:15px;color:var(--ink);
    padding:12px 14px;background:var(--cream-2);border-radius:10px;min-width:0;}
  .searchrow input::placeholder{color:var(--muted-2);}
  .searchrow .btn{padding:12px 22px;}
  .hero-trust{margin:22px 0 0;font-size:13px;color:var(--muted);display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
  .hero-trust b{color:var(--navy);font-weight:700;}
  .dot{width:4px;height:4px;border-radius:50%;background:var(--orange);}

  .hero-art{position:relative;min-height:380px;}
  .float{position:absolute;background:var(--white);border:1px solid var(--line);border-radius:16px;
    box-shadow:0 34px 70px -34px rgba(19,36,82,.5);overflow:hidden;will-change:transform;}
  .fcard{width:min(80%,360px);top:6%;left:4%;padding:0;}
  .fcard .im{aspect-ratio:4/3;}.fcard .im svg{width:100%;height:100%;display:block;}
  .fcard .im img{width:100%;height:100%;object-fit:cover;object-position:50% 18%;display:block;}
  .fcard .cap{padding:14px 16px;}
  .fcard .cap .p{font-family:var(--display);font-weight:600;font-size:22px;color:var(--navy);}
  .fcard .cap .p2{font-family:var(--display);font-weight:600;font-size:21px;color:var(--navy);line-height:1.05;}
  .fcard .cap .a{font-size:12.5px;color:var(--muted);margin-top:3px;}
  .fcard .cap .cr{font-size:10px;color:var(--muted-2);margin-top:10px;letter-spacing:.01em;}
  .fcard .cap .m{display:flex;gap:12px;margin-top:8px;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums;}
  .fpill{bottom:8%;right:2%;width:auto;padding:14px 18px;display:flex;gap:11px;align-items:center;max-width:230px;}
  .fpill .t{font-family:var(--display);font-size:15px;font-weight:600;color:var(--navy);line-height:1.25;}
  .fbadge{top:2%;right:8%;width:auto;padding:10px 14px;display:flex;gap:8px;align-items:center;font-size:12.5px;font-weight:600;color:var(--navy);}
  .fbadge i{width:9px;height:9px;border-radius:50%;background:#31b57d;box-shadow:0 0 0 4px rgba(49,181,125,.18);}
  @media(max-width:860px){.hero-in{grid-template-columns:1fr;}.hero-art{min-height:320px;margin-top:10px;}}

  .strip{background:var(--navy);color:var(--cream);padding:clamp(34px,4vw,50px) var(--pad);}
  .strip-in{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
  .tc .tk{font-family:var(--display);font-weight:600;font-size:19px;color:#fff;line-height:1.2;}
  .tc .tl{font-size:12.5px;color:#aeb8d6;margin-top:7px;line-height:1.45;}
  @media(max-width:620px){.strip-in{grid-template-columns:1fr 1fr;gap:26px;}}

  .sec{padding:clamp(54px,7vw,96px) var(--pad);}
  .sec-navy{background:var(--navy);color:var(--cream);}
  .sec-cream2{background:var(--cream-2);}
  .sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:22px;margin-bottom:38px;}
  .sec-head h2{font-size:clamp(28px,3.8vw,44px);}
  .sec-head .lead{color:var(--muted);font-size:14.5px;max-width:32ch;}
  .sec-navy .sec-head .lead{color:#aeb8d6;}
  .sec-head .link{font-weight:600;font-size:14px;color:var(--orange-2);white-space:nowrap;}

  .phead{padding:clamp(40px,5vw,70px) var(--pad) clamp(28px,3vw,40px);border-bottom:1px solid var(--line);}
  .phead .eyebrow{margin-bottom:12px;display:block;}
  .phead h1{font-size:clamp(34px,5vw,58px);}
  .phead p{color:var(--muted);font-size:clamp(15px,1.7vw,18px);max-width:52ch;margin-top:16px;}

  .paths{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
  .pcard{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:30px 26px;
    display:flex;flex-direction:column;gap:10px;transition:.28s var(--ease);}
  .pcard:hover{transform:translateY(-6px);border-color:var(--orange);box-shadow:0 30px 60px -40px rgba(19,36,82,.5);}
  .pcard .ic{width:46px;height:46px;border-radius:12px;background:var(--orange-soft);display:grid;place-items:center;}
  .pcard .ic svg{width:24px;height:24px;}
  .pcard h3{font-size:23px;}.pcard p{color:var(--muted);font-size:14px;flex:1;}
  .pcard .go{font-weight:600;font-size:14px;color:var(--orange-2);}
  @media(max-width:760px){.paths{grid-template-columns:1fr;}}

  .chips{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:26px;}
  .chip{border:1.5px solid var(--line);background:var(--white);color:var(--navy);font-family:var(--body);
    font-weight:600;font-size:13.5px;padding:9px 18px;border-radius:999px;cursor:pointer;transition:.2s var(--ease);}
  .chip:hover{border-color:var(--orange);}
  .chip.on{background:var(--navy);color:var(--cream);border-color:var(--navy);}
  .listings{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
  .listing{background:var(--white);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;cursor:pointer;
    transition:transform .3s var(--ease),box-shadow .3s var(--ease);}
  .listing:hover{transform:translateY(-5px);box-shadow:0 30px 60px -38px rgba(19,36,82,.55);}
  .listing .im{position:relative;aspect-ratio:4/3;overflow:hidden;}
  .listing .im svg{width:100%;height:100%;display:block;transition:transform .5s var(--ease);}
  .listing:hover .im svg{transform:scale(1.06);}
  .arealink{text-decoration:none;color:inherit;display:block;}
  .listing .im img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s var(--ease);}
  .listing:hover .im img{transform:scale(1.06);}
  .listing .p2{font-family:var(--display);font-weight:600;font-size:21px;color:var(--navy);}
  .areago{margin-top:14px;font-size:13px;font-weight:600;color:var(--orange-2);}
  .areacredit{margin-top:24px;font-size:11.5px;line-height:1.6;color:var(--muted-2);max-width:74ch;}
  .listing .tag{position:absolute;left:12px;top:12px;background:rgba(19,36,82,.92);color:#fff;font-size:11px;
    font-weight:600;letter-spacing:.03em;padding:6px 12px;border-radius:999px;}
  .fav{position:absolute;right:12px;top:12px;width:36px;height:36px;border-radius:50%;border:0;cursor:pointer;
    background:rgba(255,255,255,.92);display:grid;place-items:center;transition:.2s var(--ease);}
  .fav:hover{transform:scale(1.1);}
  .fav svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2;transition:.2s var(--ease);}
  .fav.on svg{fill:var(--orange);stroke:var(--orange);}
  .listing .b{padding:18px;}
  .listing .p{font-family:var(--display);font-weight:600;font-size:26px;color:var(--navy);}
  .listing .a{font-size:13.5px;color:var(--muted);margin-top:3px;}
  .listing .m{display:flex;gap:14px;margin-top:13px;padding-top:13px;border-top:1px solid var(--line);
    font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums;}
  @media(max-width:820px){.listings{grid-template-columns:1fr 1fr;}}
  @media(max-width:560px){.listings{grid-template-columns:1fr;}}

  /* ---- Dream home builder ---- */
  .dreamintro{color:var(--muted);font-size:clamp(15px,1.7vw,17px);max-width:62ch;margin:-16px 0 34px;}
  .dreamer{display:grid;grid-template-columns:1fr 1.06fr;gap:clamp(24px,3.4vw,46px);align-items:start;}
  .dctrl{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:clamp(22px,2.6vw,32px);}
  .dgroup{margin-bottom:24px;}
  .dgroup:last-child{margin-bottom:0;}
  .dlabel{font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;display:flex;justify-content:space-between;align-items:baseline;}
  .dlabel .dval{font-family:var(--display);font-size:18px;color:var(--orange-2);letter-spacing:0;text-transform:none;font-variant-numeric:tabular-nums;}
  .dchips{display:flex;gap:9px;flex-wrap:wrap;}
  .dchip{border:1.5px solid var(--line);background:var(--cream);color:var(--navy);font-family:var(--body);font-weight:600;font-size:13.5px;padding:8px 15px;border-radius:999px;cursor:pointer;transition:.18s var(--ease);}
  .dchip:hover{border-color:var(--orange);}
  .dchip.on{background:var(--navy);color:var(--cream);border-color:var(--navy);}
  .dchip[data-feat].on{background:var(--orange);border-color:var(--orange);color:#fff;}
  .dstage{position:sticky;top:96px;background:var(--navy);border-radius:var(--r);padding:clamp(20px,2.4vw,28px);color:#fff;box-shadow:0 30px 70px -40px rgba(19,36,82,.7);}
  .dsky{border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#243a82 0%,#182a63 55%,#101f45 100%);}
  .dsky svg{display:block;width:100%;height:auto;}
  .dsum{margin-top:20px;font-family:var(--display);font-size:clamp(18px,2.2vw,23px);line-height:1.38;color:#fff;}
  .dsum b{color:var(--orange);font-weight:600;}
  .dnote{margin-top:11px;font-size:12.5px;line-height:1.55;color:#aeb8d6;}
  .dform{margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;}
  .dform input{flex:1;min-width:170px;border:1px solid var(--line-navy);background:rgba(255,255,255,.06);border-radius:10px;padding:12px 14px;font-family:var(--body);font-size:15px;color:#fff;outline:0;}
  .dform input::placeholder{color:#8a93a5;}
  .dform input:focus{border-color:var(--orange);}
  .dform button{border:0;background:var(--orange);color:#fff;font-family:var(--body);font-weight:700;font-size:14.5px;padding:12px 22px;border-radius:10px;cursor:pointer;transition:.2s var(--ease);white-space:nowrap;}
  .dform button:hover{background:var(--orange-2);transform:translateY(-2px);}
  .dok{margin-top:15px;background:rgba(255,255,255,.08);border:1px solid var(--line-navy);border-radius:10px;padding:13px 15px;font-size:13.5px;line-height:1.55;color:#dfe6f5;display:none;}
  .dok.show{display:block;}
  .dok b{color:#fff;}
  @media(max-width:820px){.dreamer{grid-template-columns:1fr;}.dstage{position:static;}}

  .worth{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,60px);align-items:center;}
  .worth h2{font-size:clamp(28px,3.8vw,44px);color:#fff;}
  .worth p{color:#aeb8d6;margin-top:14px;max-width:38ch;}
  .worthbox{background:var(--white);border-radius:var(--r);padding:26px;color:var(--ink);}
  .worthbox label{font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);}
  .worthbox input{width:100%;border:1px solid var(--line);background:var(--cream-2);border-radius:10px;
    padding:13px 15px;font-family:var(--body);font-size:15px;color:var(--ink);margin-top:8px;outline:0;}
  .worthbox input:focus{border-color:var(--orange);}
  .worthbox .btn{width:100%;justify-content:center;margin-top:14px;}
  .estimate{margin-top:20px;text-align:center;max-height:0;overflow:hidden;opacity:0;transition:opacity .4s var(--ease),max-height .4s var(--ease);}
  .estimate.show{opacity:1;max-height:160px;}
  .estimate .rng{font-family:var(--display);font-weight:600;font-size:34px;color:var(--navy);font-variant-numeric:tabular-nums;}
  .estimate .cap{font-size:12px;color:var(--muted);margin-top:4px;font-style:italic;}
  @media(max-width:820px){.worth{grid-template-columns:1fr;}}

  .calc{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,56px);align-items:center;}
  .calcbox{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:28px;}
  .field{margin-bottom:22px;}
  .field .row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;}
  .field .k{font-size:13.5px;font-weight:600;color:var(--navy);}
  .field .val{font-family:var(--display);font-weight:600;font-size:19px;color:var(--orange-2);font-variant-numeric:tabular-nums;}
  input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:999px;background:var(--cream-2);outline:0;}
  input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--orange);cursor:pointer;border:3px solid #fff;box-shadow:0 3px 10px rgba(250,140,65,.6);}
  input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--orange);cursor:pointer;border:3px solid #fff;}
  .payout{border-top:1px solid var(--line);margin-top:6px;padding-top:20px;display:flex;justify-content:space-between;align-items:baseline;}
  .payout .k{font-size:14px;color:var(--muted);}
  .payout .big{font-family:var(--display);font-weight:600;font-size:40px;color:var(--navy);font-variant-numeric:tabular-nums;}
  .payout .big span{font-size:16px;color:var(--muted);}
  @media(max-width:820px){.calc{grid-template-columns:1fr;}}

  .pillars{display:grid;grid-template-columns:repeat(4,1fr);}
  .pillar{padding:4px 26px;border-left:1px solid var(--line-navy);}
  .pillar:first-child{border-left:0;padding-left:0;}
  .pillar .n{font-family:var(--display);font-weight:600;font-size:15px;color:var(--orange);}
  .pillar h3{font-size:21px;margin:12px 0 9px;color:#fff;}
  .pillar p{color:#aeb8d6;font-size:13.5px;}
  @media(max-width:820px){.pillars{grid-template-columns:1fr 1fr;gap:26px;}.pillar{border-left:0;padding:0;}}
  @media(max-width:440px){.pillars{grid-template-columns:1fr;}}

  .marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);}
  .track{display:flex;gap:14px;width:max-content;animation:scroll 30s linear infinite;}
  .marquee:hover .track{animation-play-state:paused;}
  @keyframes scroll{to{transform:translateX(-50%);}}
  .mk{background:var(--white);border:1px solid var(--line);border-radius:999px;padding:12px 22px;font-weight:600;font-size:14.5px;color:var(--navy);white-space:nowrap;display:flex;gap:9px;align-items:center;}
  .mk::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--orange);}
  @media(prefers-reduced-motion:reduce){.track{animation:none;}}

  .nbhds{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:18px;}
  .nb{position:relative;border-radius:var(--r);overflow:hidden;border:1px solid var(--line);cursor:pointer;
    aspect-ratio:5/4;transition:.28s var(--ease);}
  .nb:hover{transform:translateY(-5px);box-shadow:0 26px 54px -36px rgba(19,36,82,.55);}
  .nb svg,.nb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s var(--ease);}
  .nb:hover img{transform:scale(1.06);}
  .nb .ov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,36,82,.05) 30%,rgba(19,36,82,.86));}
  .nb .t{position:absolute;left:16px;bottom:14px;right:16px;color:#fff;}
  .nb .t h3{font-size:20px;color:#fff;}
  .nb .t span{font-size:12.5px;color:#d7deec;}
  .photocred{margin-top:24px;font-size:12px;color:var(--muted);}
  .photocred summary{cursor:pointer;font-weight:600;color:var(--muted);list-style:none;}
  .photocred summary::-webkit-details-marker{display:none;}
  .photocred summary::before{content:"+ ";color:var(--orange-2);}
  .photocred[open] summary::before{content:"– ";}
  .photocred p{margin-top:10px;line-height:1.85;color:var(--muted);}
  .photocred a{color:var(--muted);text-decoration:underline;text-underline-offset:2px;}
  .photocred a:hover{color:var(--orange-2);}

  .team{display:grid;grid-template-columns:1fr 1fr;gap:22px;}
  .member{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:28px;display:flex;gap:20px;}
  .member .av{width:64px;height:64px;border-radius:50%;flex:none;display:grid;place-items:center;
    font-family:var(--display);font-weight:600;font-size:22px;color:#fff;background:var(--navy);}
  .member .av.alt{background:var(--orange);}
  .member h3{font-size:22px;}
  .member .role{font-size:12.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--orange-2);margin:3px 0 10px;}
  .member p{font-size:14px;color:var(--muted);}
  @media(max-width:720px){.team{grid-template-columns:1fr;}.member{flex-direction:column;gap:14px;}}

  .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
  .step .n{font-family:var(--display);font-weight:600;font-size:34px;color:var(--orange);line-height:1;}
  .step h3{font-size:18px;margin:10px 0 7px;}
  .step p{font-size:13.5px;color:var(--muted);}
  @media(max-width:760px){.steps{grid-template-columns:1fr 1fr;gap:26px;}}

  .cform{display:grid;grid-template-columns:1.3fr 1fr;gap:clamp(28px,4vw,56px);}
  .formcard{background:var(--white);border:1px solid var(--line);border-radius:var(--r);padding:28px;}
  .frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
  .fld{margin-bottom:16px;}
  .fld label{font-size:12px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:7px;}
  .fld input,.fld select,.fld textarea{width:100%;border:1px solid var(--line);background:var(--cream-2);border-radius:10px;
    padding:12px 14px;font-family:var(--body);font-size:15px;color:var(--ink);outline:0;}
  .fld input:focus,.fld select:focus,.fld textarea:focus{border-color:var(--orange);}
  .fld textarea{min-height:110px;resize:vertical;}
  .smsrow{display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:var(--muted);margin:6px 0 16px;}
  .smsrow input{width:17px;height:17px;flex:none;margin-top:2px;accent-color:var(--orange);}
  .cinfo .ci{display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--line);}
  .cinfo .ci .k{font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--orange-2);}
  .cinfo .ci .v{font-size:15px;color:var(--navy);font-weight:500;margin-top:2px;}
  @media(max-width:820px){.cform{grid-template-columns:1fr;}.frow{grid-template-columns:1fr;}}

  .finalcta{text-align:center;max-width:44ch;margin:0 auto;}
  .finalcta h2{font-size:clamp(30px,4vw,46px);color:var(--navy);}
  .finalcta p{color:var(--muted);font-size:16px;margin:16px auto 26px;max-width:34ch;}

  footer{background:var(--navy);color:#aeb8d6;padding:60px var(--pad) 34px;}
  .fgrid{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;border-bottom:1px solid var(--line-navy);padding-bottom:34px;}
  .fbrand img{height:56px;margin-bottom:14px;}
  .fbrand p{font-size:13.5px;color:#aeb8d6;max-width:28ch;}
  .fcol h4{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange);margin-bottom:14px;font-weight:700;}
  .fcol a{display:block;font-size:13.5px;color:#c3cbe0;margin-bottom:9px;cursor:pointer;}
  .fcol a:hover{color:#fff;}
  .consent{display:flex;gap:10px;align-items:flex-start;max-width:32ch;font-size:11.5px;color:#8a95bb;margin-top:6px;}
  .consent .box{width:15px;height:15px;border:1.5px solid var(--orange);border-radius:4px;flex:none;margin-top:1px;display:grid;place-items:center;}
  .consent .box::after{content:"";width:7px;height:7px;background:var(--orange);border-radius:1px;}
  .legal{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:11.5px;color:#7a86ac;margin-top:24px;}

  .mobcta{position:fixed;left:0;right:0;bottom:0;z-index:50;display:none;gap:10px;padding:12px 16px;background:rgba(19,36,82,.96);backdrop-filter:blur(8px);}
  .mobcta .btn{flex:1;justify-content:center;}
  @media(max-width:1000px){.mobcta{display:flex;}#scr{padding-bottom:70px;}}

  .teamgrid{display:grid;grid-template-columns:1fr 1fr;gap:22px;}
  .tcard{background:var(--white);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;transition:.28s var(--ease);}
  .tcard:hover{transform:translateY(-5px);box-shadow:0 30px 60px -40px rgba(19,36,82,.5);}
  .tcard .photo{position:relative;aspect-ratio:16/10;background:linear-gradient(160deg,#22357a,#132452);display:grid;place-items:center;}
  .tcard .photo svg{width:64px;height:64px;stroke:rgba(255,255,255,.55);fill:none;}
  .tcard .photo .hint{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);}
  .tcard .tbody{padding:22px 24px 26px;}
  .tcard h3{font-size:23px;}
  .tcard .role{font-size:12.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--orange-2);margin:4px 0 12px;}
  .tcard .tbody p{font-size:14px;color:var(--muted);}
  @media(max-width:720px){.teamgrid{grid-template-columns:1fr;}}

  @media(max-width:1000px){
    header{flex-wrap:wrap;}
    nav{order:3;width:100%;margin:10px 0 0 0;gap:20px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;}
    nav a{white-space:nowrap;}
  }
  .progress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--orange);z-index:60;transition:width .08s linear;}
  .saved{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13.5px;color:var(--navy);white-space:nowrap;}
  .saved svg{width:18px;height:18px;fill:none;stroke:var(--navy);stroke-width:2;transition:.2s var(--ease);}
  .saved.has svg{fill:var(--orange);stroke:var(--orange);}
  .saved .c{min-width:16px;text-align:center;font-variant-numeric:tabular-nums;}
  .totop{position:fixed;right:20px;bottom:20px;width:46px;height:46px;border-radius:50%;background:var(--navy);border:0;cursor:pointer;display:grid;place-items:center;opacity:0;pointer-events:none;transition:.3s var(--ease);z-index:45;box-shadow:0 12px 30px -12px rgba(19,36,82,.7);}
  .totop svg{width:22px;height:22px;stroke:#fff;stroke-width:2;fill:none;}
  .totop.show{opacity:1;pointer-events:auto;}
  @media(max-width:1000px){.totop{bottom:82px;}}
  .modal{position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(19,36,82,.55);backdrop-filter:blur(5px);}
  .modal.open{display:flex;}
  .modalcard{position:relative;background:var(--white);border-radius:18px;max-width:560px;width:100%;overflow:hidden;box-shadow:0 50px 100px -30px rgba(0,0,0,.6);animation:pop .32s var(--ease);}
  @keyframes pop{from{opacity:0;transform:translateY(16px) scale(.98);}to{opacity:1;transform:none;}}
  .modalcard .mim{position:relative;aspect-ratio:16/10;}
  .modalcard .mim svg{width:100%;height:100%;display:block;}
  .modalclose{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.94);cursor:pointer;display:grid;place-items:center;z-index:2;}
  .modalclose svg{width:18px;height:18px;stroke:var(--navy);stroke-width:2;fill:none;}
  .mbody{padding:24px 26px 26px;}
  .mbody .mtag{font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--orange-2);}
  .mbody .mp{font-family:var(--display);font-weight:600;font-size:32px;color:var(--navy);margin-top:4px;}
  .mbody .ma{font-size:14.5px;color:var(--muted);margin-top:2px;}
  .mbody .mm{display:flex;gap:18px;margin:16px 0;padding:16px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-size:14px;color:var(--navy);font-weight:500;font-variant-numeric:tabular-nums;}
  .mbody .mrow{display:flex;gap:10px;margin-top:16px;}
  .mbody .mrow .btn{flex:1;justify-content:center;}
  .nbcard{max-width:600px;}
  .nbhero{position:relative;aspect-ratio:16/9;}
  .nbhero img{width:100%;height:100%;object-fit:cover;display:block;}
  .nbheroov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,36,82,.05) 40%,rgba(19,36,82,.9));}
  .nbherot{position:absolute;left:24px;right:24px;bottom:18px;color:#fff;}
  .nbherot span{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#ffd9bd;}
  .nbherot h3{font-family:var(--display);font-weight:600;font-size:32px;color:#fff;line-height:1.05;margin-top:3px;}
  .nbdetail{padding:22px 26px 26px;}
  .nbabout{font-size:15px;line-height:1.6;color:var(--ink);}
  .nbhi{margin:18px 0 4px;display:grid;gap:14px;}
  .nbrow{display:grid;grid-template-columns:132px 1fr;gap:14px;align-items:baseline;padding-bottom:14px;border-bottom:1px solid var(--line);}
  .nbrow:last-child{border-bottom:0;padding-bottom:0;}
  .nbk{font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--orange-2);}
  .nbv{font-size:14px;line-height:1.55;color:var(--muted);}
  @media(max-width:520px){.nbrow{grid-template-columns:1fr;gap:3px;}.nbherot h3{font-size:26px;}}
  .vibes{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px;}
  .vibe{border:1.5px solid var(--line);background:var(--white);color:var(--navy);font-family:var(--body);font-weight:600;font-size:13.5px;padding:10px 18px;border-radius:999px;cursor:pointer;transition:.2s var(--ease);}
  .vibe:hover{border-color:var(--orange);}
  .vibe.on{background:var(--orange);color:#fff;border-color:var(--orange);}
  .nb .badge{position:absolute;top:12px;left:12px;z-index:2;background:var(--orange);color:#fff;font-size:11px;font-weight:700;letter-spacing:.03em;padding:5px 11px;border-radius:999px;display:none;}
  .nb.match .badge{display:block;}
  .nb.match{outline:3px solid var(--orange);outline-offset:2px;}
  .nb.dim{opacity:.38;}
  .greet{font-size:12.5px;font-weight:600;color:var(--muted);margin-bottom:12px;display:flex;align-items:center;gap:7px;}
  .greet::before{content:"";width:7px;height:7px;border-radius:50%;background:#31b57d;box-shadow:0 0 0 4px rgba(49,181,125,.2);}
  .hero .tagline{font-family:var(--display);font-weight:500;font-style:italic;font-size:clamp(17px,2.2vw,23px);color:var(--navy);margin-top:8px;}
  .u-orange svg path{stroke-dasharray:230;stroke-dashoffset:230;animation:draw 1.1s var(--ease) .5s forwards;}
  @keyframes draw{to{stroke-dashoffset:0;}}
  @media(prefers-reduced-motion:reduce){.u-orange svg path{animation:none;stroke-dashoffset:0;}}
  .quiz{max-width:680px;}
  .quizcard{background:var(--white);border:1px solid var(--line);border-radius:16px;padding:30px clamp(22px,4vw,38px);box-shadow:0 30px 70px -46px rgba(19,36,82,.5);}
  .quizprog{display:flex;align-items:center;gap:14px;margin-bottom:22px;}
  .quizprog .bar{flex:1;height:5px;border-radius:999px;background:var(--cream-2);overflow:hidden;}
  .quizprog .bar i{display:block;height:100%;background:var(--orange);border-radius:999px;transition:width .4s var(--ease);}
  .quizprog .step{font-size:12px;font-weight:600;color:var(--muted);white-space:nowrap;letter-spacing:.03em;}
  .quizq{font-family:var(--display);font-weight:500;font-size:clamp(22px,3vw,30px);color:var(--navy);margin-bottom:20px;text-wrap:balance;}
  .quizopts{display:flex;flex-direction:column;gap:10px;}
  .qopt{text-align:left;border:1.5px solid var(--line);background:var(--cream);border-radius:12px;padding:15px 18px;font-family:var(--body);font-size:15px;font-weight:500;color:var(--navy);cursor:pointer;transition:.18s var(--ease);display:flex;align-items:center;gap:13px;}
  .qopt:hover{border-color:var(--orange);background:var(--white);transform:translateX(3px);}
  .qopt .tick{width:20px;height:20px;border-radius:50%;border:2px solid var(--line);flex:none;transition:.18s var(--ease);}
  .qopt:hover .tick{border-color:var(--orange);border-width:6px;}
  .qback{margin-top:18px;background:transparent;border:0;color:var(--muted);font-family:var(--body);font-weight:600;font-size:13.5px;cursor:pointer;}
  .qback:hover{color:var(--orange-2);}
  .qresult{text-align:center;}
  .qresult .eyebrow{display:block;margin-bottom:8px;}
  .qresult .rname{font-family:var(--display);font-weight:600;font-size:clamp(34px,5vw,52px);color:var(--navy);line-height:1.02;}
  .qresult .rprice{font-weight:600;color:var(--orange-2);margin-top:8px;font-variant-numeric:tabular-nums;}
  .qresult .rtags{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:18px 0 2px;}
  .qresult .rtag{background:var(--orange-soft);color:#9a4f16;font-size:12px;font-weight:700;padding:6px 13px;border-radius:999px;}
  .qresult .rblurb{color:var(--muted);font-size:15.5px;max-width:44ch;margin:16px auto 0;line-height:1.6;}
  .qresult .rrun{font-size:13px;color:var(--muted);margin-top:16px;}
  .qresult .rrow{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:22px;}

  .reveal{opacity:0;transform:translateY(22px);transition:opacity .7s var(--ease),transform .7s var(--ease);}
  .reveal.in{opacity:1;transform:none;}
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none;}.float{transform:none!important;}.page{animation:none;}}

  .tcard{display:flex;gap:18px;align-items:flex-start;padding:20px;}
  .tcard .photo{flex:none;width:104px;height:128px;aspect-ratio:auto;border-radius:12px;overflow:hidden;background:#e9edf1;}
  .tcard .photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 18%;}
  .tcard .photo .ph-fallback{font-size:32px;}
  .tcard .tbody{padding:0;flex:1;min-width:0;}
  .tcard .photo .ph-fallback{position:absolute;inset:0;align-items:center;justify-content:center;font-family:var(--display);font-weight:600;font-size:48px;color:rgba(255,255,255,.72);}
  .tcard .tbody p + p{margin-top:12px;}
  .tcard .tcontact{display:flex;flex-direction:column;gap:1px;margin:14px 0 2px;font-size:13px;}
  .tcard .tcontact a{color:var(--orange-2);font-weight:600;}
  .tcard .tbody .go{display:inline-block;margin-top:8px;font-weight:600;font-size:13.5px;color:var(--navy);}
  .chband{position:relative;min-height:340px;display:grid;place-items:center;overflow:hidden;text-align:center;color:#fff;}
  .chband img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  .chband::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,36,82,.5),rgba(19,36,82,.8));}
  .chband-in{position:relative;z-index:1;padding:64px var(--pad);max-width:54ch;}
  .chband-in h2{font-size:clamp(28px,4vw,44px);color:#fff;margin-top:10px;}
  .chband-in p{color:#e7ecf5;margin-top:14px;font-size:16px;}

  body:has(#scr) > header, body:has(#scr) > footer{display:none !important;}`;

export const HOME_HTML = `<div id="scr">
  <div class="progress" id="progress"></div>

  <header id="hdr">
    <div class="hdr-in">
      <a class="logo" href="/"><img src="data:image/png;base64,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" alt="Southern Cities Realty">
        <span class="wm">Southern Cities Realty<small>Charlotte · Serving all of NC</small></span></a>
      <nav id="nav">
        <a href="/">Home</a><a href="/listings">Buy</a>
        <a href="#sell">Sell</a><a href="/neighborhoods">Areas We Serve</a>
        <a href="/about">About</a><a href="/contact">Contact</a></nav>
      <a class="btn btn-orange" href="/listings">Search homes</a>
    </div>
  </header>

  <!-- ================= HOME ================= -->
  <main class="page" data-page="home">
  <section class="hero">
    <div class="hero-blob"></div>
    <div class="hero-in">
      <div class="hero-copy">
        <span class="eyebrow">Where Southern hospitality meets real estate</span>
        <p class="tagline">Helping you feel at home before you even move.</p>
        <h1>Find your place in <span class="u-orange">Charlotte
          <svg viewBox="0 0 200 12" preserveAspectRatio="none"><path d="M2 8 Q60 2 100 6 T198 5" fill="none" stroke="#fa8c41" stroke-width="4" stroke-linecap="round"/></svg></span>.</h1>
        <p class="sub">We guide buyers and sellers across North Carolina with honest advice, real local
          knowledge, and brokers who actually pick up the phone.</p>
        <div class="searchcard">
          <div class="tabs" id="tabs">
            <button class="tab on" data-ph="City, ZIP, neighborhood, or MLS #" data-cta="Search Homes" data-go="listings">Buy</button>
            <button class="tab" data-ph="Your home address" data-cta="Get My Home Value" data-go="sell">Sell</button>
          </div>
          <div class="searchrow">
            <input id="searchInput" placeholder="City, ZIP, neighborhood, or MLS #" aria-label="Search">
            <button class="btn btn-orange" id="searchBtn">Search Homes</button>
          </div>
        </div>
        <div class="hero-trust"><span class="dot"></span>Based in <b>Charlotte</b>
          <span class="dot"></span> Serving buyers &amp; sellers across North Carolina</div>
      </div>
      <div class="hero-art" id="heroArt">
        <figure class="float fcard" data-depth="18">
          <div class="im"><img src="/neighborhoods/dilworth.jpg" alt="Tree-lined Dilworth homes with the Charlotte skyline rising behind them" loading="eager" width="360" height="270"></div>
          <figcaption class="cap"><div class="p2">Dilworth</div><div class="a">Charlotte, North Carolina</div>
            <div class="cr">Photo © James Willamor · CC BY-SA 2.0</div></figcaption>
        </figure>
        <div class="float fbadge" data-depth="34" aria-hidden="true"><i></i>Charlotte, NC</div>
        <div class="float fpill" data-depth="26" aria-hidden="true"><span class="dot"></span><div class="t">Homes worth coming home to.</div></div>
      </div>
    </div>
  </section>

  <section class="strip">
    <div class="strip-in reveal">
      <div class="tc"><div class="tk">Based in Charlotte</div><div class="tl">Serving buyers &amp; sellers across North Carolina</div></div>
      <div class="tc"><div class="tk">Dedicated local brokers</div><div class="tl">Guiding buyers &amp; sellers every day</div></div>
      <div class="tc"><div class="tk">With you start to finish</div><div class="tl">Real attention at every step</div></div>
      <div class="tc"><div class="tk">Honest, local advice</div><div class="tl">We only win when you do</div></div>
    </div>
  </section>

  <section class="sec">
    <div class="sec-head reveal"><h2>Why Southern Cities</h2>
      <p class="lead">A boutique brokerage that treats your move like it matters.</p></div>
    <div class="paths reveal">
      <a class="pcard" href="#contact"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#ef7d23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M15 20a5 5 0 0 1 6-4.8"/></svg></div>
        <h3>Personal, start to finish</h3><p>You'll work with the same broker from your first showing to the closing table, always a text or call away when it counts.</p><span class="go">Meet the team →</span></a>
      <a class="pcard" href="/neighborhoods"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#ef7d23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></div>
        <h3>We know these neighborhoods</h3><p>We live and work here, so you'll get straight talk on home values, market trends, and what's actually for sale, street by street, across Charlotte and all of North Carolina.</p><span class="go">Explore neighborhoods →</span></a>
      <a class="pcard" href="#sell"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#ef7d23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
        <h3>Honest pricing, real numbers</h3><p>We'll tell you what a home is really worth, and when to walk away, so every offer you make is grounded in facts, not guesswork.</p><span class="go">Get a home value →</span></a>
    </div>
  </section>

  <section class="sec sec-cream2" id="wishlist">
    <div class="sec-head reveal"><h2>Let's build the home you're looking for</h2>
      <a class="link" href="#contact">Talk to a broker →</a></div>
    <p class="dreamintro reveal">We're a brand-new brokerage, so you won't find a wall of stale listings here &mdash; and honestly, that's the point. Tell us what you actually want, and we go find it for you: on the market, coming soon, and quietly off-market. Start by sketching your place below.</p>
    <div class="dreamer reveal">
      <div class="dctrl">
        <div class="dgroup">
          <div class="dlabel">Bedrooms</div>
          <div class="dchips" id="dBeds">
            <button class="dchip" type="button" data-bed="2">2</button>
            <button class="dchip on" type="button" data-bed="3">3</button>
            <button class="dchip" type="button" data-bed="4">4</button>
            <button class="dchip" type="button" data-bed="5">5+</button>
          </div>
        </div>
        <div class="dgroup">
          <div class="dlabel">Style</div>
          <div class="dchips" id="dStyle">
            <button class="dchip on" type="button" data-style="craftsman">Craftsman</button>
            <button class="dchip" type="button" data-style="historic">Historic charm</button>
            <button class="dchip" type="button" data-style="modern">New &amp; modern</button>
            <button class="dchip" type="button" data-style="southern">Classic Southern</button>
          </div>
        </div>
        <div class="dgroup">
          <div class="dlabel">Budget <span class="dval" id="dBudgetOut">$650K</span></div>
          <input type="range" id="dBudget" min="250000" max="1500000" step="25000" value="650000" aria-label="Budget">
        </div>
        <div class="dgroup">
          <div class="dlabel">Where</div>
          <div class="dchips" id="dArea">
            <button class="dchip on" type="button" data-area="Charlotte">Charlotte</button>
            <button class="dchip" type="button" data-area="Lake Norman">Lake Norman</button>
            <button class="dchip" type="button" data-area="Fort Mill">Fort Mill</button>
            <button class="dchip" type="button" data-area="Waxhaw">Waxhaw</button>
            <button class="dchip" type="button" data-area="anywhere in the Carolinas">Not sure yet</button>
          </div>
        </div>
        <div class="dgroup">
          <div class="dlabel">Must-haves</div>
          <div class="dchips" id="dFeat">
            <button class="dchip" type="button" data-feat="a big yard">Big yard</button>
            <button class="dchip" type="button" data-feat="a garage">Garage</button>
            <button class="dchip" type="button" data-feat="a home office">Home office</button>
            <button class="dchip" type="button" data-feat="a pool">Pool</button>
            <button class="dchip" type="button" data-feat="a walkable neighborhood">Walkable</button>
            <button class="dchip" type="button" data-feat="move-in ready">Move-in ready</button>
          </div>
        </div>
      </div>
      <div class="dstage">
        <div class="dsky"><div id="dreamSvg"></div></div>
        <p class="dsum" id="dreamLine"></p>
        <p class="dnote">This is a wishlist, not a listing. Send it over and a Southern Cities broker starts the hunt personally &mdash; including homes that never hit the open market.</p>
        <div class="dform">
          <input id="dEmail" type="email" placeholder="Your email" aria-label="Your email">
          <button id="dSend" type="button">Start the hunt &rarr;</button>
        </div>
        <div class="dok" id="dOk"></div>
      </div>
    </div>
  </section>

  <section class="sec sec-navy">
    <div class="worth reveal">
      <div><span class="eyebrow">For sellers</span>
        <h2>What's your home worth today?</h2>
        <p>Get a real estimate from a broker who prices with actual market and resale numbers, not just an algorithm.</p></div>
      <div class="worthbox">
        <label for="addr">Property address</label>
        <input id="addr" placeholder="123 Main St, Charlotte, NC">
        <label for="email" style="margin-top:14px;display:block">Your email</label>
        <input id="email" type="email" placeholder="you@email.com">
        <button class="btn btn-orange" id="worthBtn">Get My Home Value</button>
        <div class="estimate" id="est"><div class="rng" id="estRng">$0</div>
          <div class="cap" id="estCap">Estimated range. A broker confirms it in person.</div></div>
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="sec-head reveal"><h2>See what your monthly payment could look like</h2>
      <p class="lead">Slide to estimate. When you're ready for real numbers, we'll connect you with a trusted local lender.</p></div>
    <div class="calc reveal">
      <div><p style="color:var(--muted);max-width:34ch;font-size:15px">A quick gut-check before you fall for a listing. Principal &amp; interest only, at an illustrative 30-year rate. Your lender runs the real numbers.</p>
        <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap"><a class="btn btn-navy" href="#listings">Browse in budget</a><a class="btn btn-ghost" href="#contact">Talk to a broker</a></div></div>
      <div class="calcbox">
        <div class="field"><div class="row"><span class="k">Home price</span><span class="val" id="priceOut">$650,000</span></div><input type="range" id="price" min="200000" max="1500000" step="10000" value="650000"></div>
        <div class="field"><div class="row"><span class="k">Down payment</span><span class="val" id="dpOut">20%</span></div><input type="range" id="dp" min="3" max="50" step="1" value="20"></div>
        <div class="field"><div class="row"><span class="k">Interest rate</span><span class="val" id="rateOut">6.8%</span></div><input type="range" id="rate" min="4" max="9" step="0.1" value="6.8"></div>
        <div class="payout"><span class="k">Est. monthly (P&amp;I)</span><span class="big" id="pay">$3,390<span>/mo</span></span></div>
        <p style="font-size:11.5px;color:var(--muted);font-style:italic;margin-top:14px">Estimates only. Not a loan offer or financial advice.</p>
      </div>
    </div>
  </section>

  <section class="sec sec-navy">
    <div class="sec-head reveal"><h2 style="color:#fff">How it works</h2>
      <p class="lead">Simple, clear, and personal. Here's what working with us looks like.</p></div>
    <div class="pillars reveal">
      <div class="pillar"><div class="n">01</div><h3>Let's talk</h3><p>We get to know you: your must-haves, your timeline, and your budget. No pressure.</p></div>
      <div class="pillar"><div class="n">02</div><h3>See the right homes</h3><p>Curated tours and honest guidance, so you only spend time on homes worth seeing.</p></div>
      <div class="pillar"><div class="n">03</div><h3>Make your move</h3><p>We handle pricing, offers, and negotiation to get you the best deal, no surprises.</p></div>
      <div class="pillar"><div class="n">04</div><h3>Get your keys</h3><p>We manage inspections and paperwork all the way to the closing table.</p></div>
    </div>
  </section>

  <section class="sec sec-cream2">
    <div class="sec-head reveal"><h2>Communities We Serve</h2>
      <a class="link" href="/neighborhoods">Explore all areas →</a></div>
    <div class="marquee reveal"><div class="track" id="track"></div></div>
  </section>

  <section class="chband">
    <img src="https://images.pexels.com/photos/20018783/pexels-photo-20018783.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="Charlotte, North Carolina skyline at sunset">
    <div class="chband-in reveal"><span class="eyebrow" style="color:var(--orange)">Communities We Serve</span>
      <h2>Rooted in Charlotte. Serving all of North Carolina.</h2>
      <p>From Charlotte's vibrant neighborhoods to communities across the state, we combine local expertise with personalized service to help you find the right place to call home.</p></div>
  </section>

  <section class="sec sec-navy">
    <div class="sec-head reveal"><h2 style="color:#fff">Meet the team</h2>
      <a class="link" href="/about">More about us →</a></div>
    <div class="teamgrid reveal">
      <div class="tcard">
        <div class="photo"><img src="/team/darius.jpg" alt="Darius Walton" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="ph-fallback" style="display:none">DW</span></div>
        <div class="tbody"><h3>Darius Walton</h3><div class="role">Broker-in-Charge · NC License #321548</div>
          <p>Broker-in-Charge of Southern Cities Realty, with a background spanning real estate finance, development, lending, and construction. A licensed NC Real Estate Broker and General Contractor who helps buyers, sellers, and investors navigate complex moves with confidence.</p>
          <div class="tcontact"><a href="mailto:darius@southerncitiesrealty.com">darius@southerncitiesrealty.com</a><a href="tel:+17046040608">(704) 604-0608</a></div>
          <a class="go" href="#about">Read full bio →</a></div>
      </div>
      <div class="tcard">
        <div class="photo"><img src="/team/madison.jpg" alt="Madison Moore" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="ph-fallback" style="display:none">MM</span></div>
        <div class="tbody"><h3>Madison Moore</h3><div class="role">Real Estate Broker · NC License #366705</div>
          <p>A licensed NC real estate agent and Charlotte resident with a background in economics, an MBA, and years in commercial underwriting. She brings sharp analytical and negotiation skills to every buyer, seller, and investor she works with.</p>
          <div class="tcontact"><a href="mailto:madison@southerncitiesrealty.com">madison@southerncitiesrealty.com</a><a href="tel:+18282915653">(828) 291-5653</a></div>
          <a class="go" href="#about">Read full bio →</a></div>
      </div>
    </div>
  </section>

  <section class="sec sec-cream2">
    <div class="finalcta reveal"><h2>Ready to make your move?</h2>
      <p>Buying, selling, or just weighing your options. Let's talk. No pressure, no obligation.</p>
      <a class="btn btn-orange" href="#contact">Let's talk</a></div>
  </section>
  </main>

  <!-- ================= LISTINGS / BUY ================= -->
  <main class="page" data-page="listings" hidden>
  <div class="phead"><span class="eyebrow">Buy a home</span>
    <h1>Buy a home in Charlotte &amp; across the Carolinas</h1>
    <p>Live MLS search is coming soon. In the meantime, get to know the areas we serve with honest local guides &mdash; then tell us exactly what you're after and we'll bring you matches, on the market and off.</p></div>
  <section class="sec">
    <div class="chips" id="chips">
      <button class="chip on" data-m="all">All areas</button>
      <button class="chip" data-m="ballantyne">Ballantyne</button>
      <button class="chip" data-m="dilworth">Dilworth</button>
      <button class="chip" data-m="lknorman">Lake Norman</button>
      <button class="chip" data-m="waxhaw">Waxhaw</button>
      <button class="chip" data-m="concord">Concord</button>
    </div>
    <div class="listings" id="grid">
      <a class="listing arealink" data-m="ballantyne" href="/neighborhoods/ballantyne"><div class="im"><span class="tag">Ballantyne</span><img src="/neighborhoods/ballantyne.jpg" alt="Ballantyne, South Charlotte" loading="lazy"></div><div class="b"><div class="p2">Ballantyne</div><div class="a">South Charlotte</div><div class="areago">Explore the area &rarr;</div></div></a>
      <a class="listing arealink" data-m="dilworth" href="/neighborhoods/dilworth"><div class="im"><span class="tag">Dilworth</span><img src="/neighborhoods/dilworth.jpg" alt="Dilworth, Charlotte" loading="lazy"></div><div class="b"><div class="p2">Dilworth</div><div class="a">Historic Charlotte</div><div class="areago">Explore the area &rarr;</div></div></a>
      <a class="listing arealink" data-m="lknorman" href="/neighborhoods/cornelius"><div class="im"><span class="tag">Lake Norman</span><img src="/neighborhoods/cornelius.jpg" alt="Cornelius on Lake Norman" loading="lazy"></div><div class="b"><div class="p2">Cornelius</div><div class="a">Lake Norman</div><div class="areago">Explore the area &rarr;</div></div></a>
      <a class="listing arealink" data-m="lknorman" href="/neighborhoods/davidson"><div class="im"><span class="tag">Lake Norman</span><img src="/neighborhoods/davidson.jpg" alt="Davidson, North Carolina" loading="lazy"></div><div class="b"><div class="p2">Davidson</div><div class="a">North of Charlotte</div><div class="areago">Explore the area &rarr;</div></div></a>
      <a class="listing arealink" data-m="waxhaw" href="/neighborhoods/waxhaw"><div class="im"><span class="tag">Union County</span><img src="/neighborhoods/waxhaw.jpg" alt="Waxhaw, North Carolina" loading="lazy"></div><div class="b"><div class="p2">Waxhaw</div><div class="a">Union County</div><div class="areago">Explore the area &rarr;</div></div></a>
      <a class="listing arealink" data-m="concord" href="/neighborhoods/concord"><div class="im"><span class="tag">Cabarrus County</span><img src="/neighborhoods/concord.jpg" alt="Concord, North Carolina" loading="lazy"></div><div class="b"><div class="p2">Concord</div><div class="a">Northeast of Charlotte</div><div class="areago">Explore the area &rarr;</div></div></a>
    </div>
    <p class="areacredit">Neighborhood photos via Openverse (Creative Commons) &mdash; City Dweller 2, James Willamor, Dough4872, Jim Evans &amp; Indy beetle. Full credits on each area guide.</p>
    <div class="finalcta reveal" style="margin-top:56px"><h2>Don't see it yet?</h2>
      <p>Tell us your must-haves and budget, we'll send homes that fit before they hit everyone's inbox.</p>
      <a class="btn btn-orange" href="#contact">Set up my search</a></div>
  </section>
  </main>

  <!-- ================= SELL ================= -->
  <main class="page" data-page="sell" hidden>
  <div class="phead"><span class="eyebrow">Sell your home</span>
    <h1>What's your home worth today?</h1>
    <p>Get a real estimate from a broker who prices with actual market and resale numbers, then a plan to sell for the most, with the least stress.</p></div>
  <section class="sec sec-navy" style="padding-top:clamp(40px,5vw,64px)">
    <div class="worth reveal">
      <div><span class="eyebrow">Free &amp; no-obligation</span>
        <h2>Start with a real number</h2>
        <p>Enter your address for an illustrative range. A broker follows up to confirm it in person. Condition and neighborhood are things an algorithm can't see.</p></div>
      <div class="worthbox">
        <label for="addr2">Property address</label>
        <input id="addr2" placeholder="123 Main St, Charlotte, NC">
        <label for="email2" style="margin-top:14px;display:block">Your email</label>
        <input id="email2" type="email" placeholder="you@email.com">
        <button class="btn btn-orange" id="worthBtn2">Get My Home Value</button>
        <div class="estimate" id="est2"><div class="rng" id="estRng2">$0</div>
          <div class="cap" id="estCap2">Estimated range. A broker confirms it in person.</div></div>
      </div>
    </div>
  </section>
  <section class="sec">
    <div class="sec-head reveal"><h2>How selling with us works</h2>
      <p class="lead">Four steps, one broker beside you the whole way.</p></div>
    <div class="steps reveal">
      <div class="step"><div class="n">01</div><h3>Talk it through</h3><p>A no-pressure sit-down about your goals, timeline, and what your home could bring.</p></div>
      <div class="step"><div class="n">02</div><h3>Price it right</h3><p>A real pricing strategy built on comps, condition, and current demand, not a guess.</p></div>
      <div class="step"><div class="n">03</div><h3>Prep &amp; market</h3><p>Staging guidance, photography, and marketing that puts your home in front of the right buyers.</p></div>
      <div class="step"><div class="n">04</div><h3>Negotiate &amp; close</h3><p>We handle offers, inspections, and paperwork, and keep you clear on every step.</p></div>
    </div>
  </section>
  <section class="sec sec-cream2"><div class="finalcta reveal"><h2>Thinking about selling?</h2>
    <p>Even if you're a year out, an early conversation pays off. Let's talk.</p>
    <a class="btn btn-orange" href="#contact">Request a seller consult</a></div></section>
  </main>

  <!-- ================= NEIGHBORHOODS ================= -->
  <main class="page" data-page="neighborhoods" hidden>
  <div class="phead"><span class="eyebrow">Neighborhoods</span>
    <h1>Explore Charlotte &amp; North Carolina</h1>
    <p>We're based in Charlotte and work with buyers and sellers statewide. Start with a few of the areas we know best. Full neighborhood guides are on the way.</p></div>
  <section class="sec">
    <div class="sec-head reveal" style="margin-bottom:20px"><h2>Which Charlotte neighborhood fits you?</h2>
      <p class="lead">Answer five quick questions, we'll match you to your best fit.</p></div>
    <div class="quiz reveal" id="quiz"></div>
    <div class="sec-head reveal" style="margin:60px 0 20px"><h2>Browse neighborhoods</h2>
      <p class="lead">A few of the areas we know best across Charlotte and NC.</p></div>
    <div class="nbhds reveal" id="nbhds"></div>
    <details class="photocred reveal"><summary>Neighborhood photo credits</summary>
      <p><a href="https://commons.wikimedia.org/w/index.php?curid=144852039" target="_blank" rel="noopener">Ballantyne</a> (City Dweller 2, CC BY-SA 4.0) · <a href="https://www.flickr.com/photos/81464596@N00/2452606815" target="_blank" rel="noopener">SouthPark</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/81464596@N00/3614989898" target="_blank" rel="noopener">Dilworth</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/81464596@N00/3740106962" target="_blank" rel="noopener">Myers Park</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/81464596@N00/3629138910" target="_blank" rel="noopener">Plaza Midwood</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/81464596@N00/3418959774" target="_blank" rel="noopener">NoDa</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/47445767@N05/49615053297" target="_blank" rel="noopener">Lake Norman</a> (James St. John, CC BY 2.0) · <a href="https://commons.wikimedia.org/w/index.php?curid=15745274" target="_blank" rel="noopener">Matthews</a> (Jon Platek, CC BY-SA 3.0) · <a href="https://commons.wikimedia.org/w/index.php?curid=146044973" target="_blank" rel="noopener">Waxhaw</a> (Indy beetle, CC0 1.0) · <a href="https://commons.wikimedia.org/w/index.php?curid=80045576" target="_blank" rel="noopener">Concord</a> (Dough4872, CC BY-SA 4.0) · <a href="https://www.flickr.com/photos/23351990@N03/5488719295" target="_blank" rel="noopener">Huntersville</a> (Brett VA, CC BY 2.0) · <a href="https://www.flickr.com/photos/47445767@N05/49615051057" target="_blank" rel="noopener">Mooresville</a> (James St. John, CC BY 2.0) · <a href="https://www.flickr.com/photos/81464596@N00/2332138300" target="_blank" rel="noopener">Uptown</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/81464596@N00/2543370327" target="_blank" rel="noopener">South End</a> (James Willamor, CC BY-SA 2.0) · <a href="https://www.flickr.com/photos/125583916@N08/51316298088" target="_blank" rel="noopener">LoSo</a> (Flickr, CC0 1.0) · <a href="https://www.flickr.com/photos/81464596@N00/3560120509" target="_blank" rel="noopener">University</a> (James Willamor, CC BY-SA 2.0)</p></details>
    <div class="finalcta reveal" style="margin-top:56px"><h2>Moving somewhere not listed?</h2>
      <p>We cover buyers and sellers across North Carolina. Tell us where you're headed.</p>
      <a class="btn btn-orange" href="#contact">Ask about your area</a></div>
  </section>
  </main>

  <!-- ================= ABOUT ================= -->
  <main class="page" data-page="about" hidden>
  <div class="phead"><span class="eyebrow">About us</span>
    <h1>A Charlotte brokerage that keeps it personal</h1>
    <p>Southern Cities Realty is a boutique residential brokerage based in Charlotte, helping buyers and sellers across North Carolina. No big-franchise machine, just brokers who know these markets and answer their own phones.</p></div>
  <section class="sec">
    <div class="sec-head reveal"><h2>Meet the team</h2>
      <p class="lead">You'll work directly with one of us, start to finish.</p></div>
    <div class="teamgrid reveal">
      <div class="tcard">
        <div class="photo"><img src="/team/darius.jpg" alt="Darius Walton" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="ph-fallback" style="display:none">DW</span></div>
        <div class="tbody"><h3>Darius Walton</h3><div class="role">Broker-in-Charge · NC License #321548</div>
          <p>As Broker-in-Charge of Southern Cities Realty, Darius Walton brings a unique blend of real estate expertise, financial analysis, construction knowledge, and investment strategy to every client relationship. With experience spanning residential and commercial real estate, development, construction, lending, and investment management, he offers clients guidance that goes far beyond a traditional real estate transaction.</p><p>Darius earned his Bachelor's degree in Accounting from NC State University before completing a Master's in Real Estate Finance &amp; Development at UNC Charlotte's Childress Klein Center for Real Estate. Throughout his career, he has worked in real estate investment, affordable housing development, mortgage lending, acquisitions, construction, and brokerage, giving him a comprehensive understanding of the market from every angle.</p><p>As a licensed North Carolina Real Estate Broker, licensed General Contractor, and former Mortgage Loan Officer, Darius is uniquely equipped to help buyers, sellers, investors, and developers confidently navigate complex transactions. Whether helping a first-time homebuyer, advising an investor, or evaluating development opportunities, his goal is to provide strategic guidance backed by market expertise and data-driven decision-making.</p><p>Outside of real estate, Darius enjoys giving back to the community through organizations like Habitat for Humanity, where he supports efforts to create affordable housing and stronger neighborhoods. He is passionate about building lasting relationships and helping clients achieve long-term success through real estate.</p>
          <div class="tcontact"><a href="mailto:darius@southerncitiesrealty.com">darius@southerncitiesrealty.com</a><a href="tel:+17046040608">(704) 604-0608</a></div></div>
      </div>
      <div class="tcard">
        <div class="photo"><img src="/team/madison.jpg" alt="Madison Moore" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="ph-fallback" style="display:none">MM</span></div>
        <div class="tbody"><h3>Madison Moore</h3><div class="role">Real Estate Broker · NC License #366705</div>
          <p>Madison Moore is a licensed North Carolina real estate agent with Southern Cities Realty, where she is committed to helping buyers, sellers, and investors navigate every step of the real estate journey with confidence.</p><p>A North Carolina native and Charlotte resident, Madison graduated cum laude from North Carolina State University with a bachelor's degree in Economics and a minor in Sociology. She later earned her MBA from the University of North Carolina at Charlotte, further strengthening her business and financial expertise.</p><p>In addition to her real estate career, Madison has more than three years of experience in commercial underwriting, following seven months in the banking industry after graduating from NC State. She specializes in evaluating financial risk, analyzing complex transactions, and helping clients make informed decisions. Her background has equipped her with strong analytical, negotiation, and problem-solving skills that she now brings to every real estate transaction.</p><p>Whether you're purchasing your first home, selling your current property, investing, or relocating to the Charlotte area, Madison is committed to providing personalized guidance, clear communication, and a seamless experience from start to finish. She believes every client deserves an advocate who is knowledgeable, responsive, and genuinely invested in helping them achieve their goals.</p><p>Outside of real estate, Madison enjoys exploring Charlotte's neighborhoods, supporting local businesses, creating Charlotte lifestyle content, and spending time with friends and loved ones. Over the years, she has volunteered with organizations including Habitat for Humanity, The Salvation Army, Safe Harbor, and Rise Against Hunger, reflecting her passion for serving others and strengthening the community.</p>
          <div class="tcontact"><a href="mailto:madison@southerncitiesrealty.com">madison@southerncitiesrealty.com</a><a href="tel:+18282915653">(828) 291-5653</a></div></div>
      </div>
    </div>
  </section>
  <section class="sec sec-navy">
    <div class="sec-head reveal"><h2 style="color:#fff">What you can expect</h2>
      <p class="lead">The way we work with every client, every time.</p></div>
    <div class="pillars reveal">
      <div class="pillar"><div class="n">01</div><h3>Straight answers</h3><p>We'll tell you what we really think about a home, even when it isn't what you hoped to hear.</p></div>
      <div class="pillar"><div class="n">02</div><h3>Fast, personal service</h3><p>You get a broker who answers your texts and calls, and knows your search inside out.</p></div>
      <div class="pillar"><div class="n">03</div><h3>Deep local knowledge</h3><p>We live and work here, and know these neighborhoods first-hand.</p></div>
      <div class="pillar"><div class="n">04</div><h3>No pressure, ever</h3><p>We move at your pace. Our job is to help you decide, not to push you.</p></div>
    </div>
  </section>
  <section class="sec"><div class="finalcta reveal"><h2>Let's find your place</h2>
    <p>Buying, selling, or just exploring, we'd love to help.</p>
    <a class="btn btn-orange" href="#contact">Get in touch</a></div></section>
  </main>

  <!-- ================= CONTACT ================= -->
  <main class="page" data-page="contact" hidden>
  <div class="phead"><span class="eyebrow">Contact</span>
    <h1>Let's talk about your move</h1>
    <p>Tell us what you're thinking. We'll get back to you quickly, usually the same day.</p></div>
  <section class="sec">
    <div class="cform reveal">
      <div class="formcard">
        <div class="frow"><div class="fld"><label>First name</label><input placeholder="Jordan"></div>
          <div class="fld"><label>Last name</label><input placeholder="Reid"></div></div>
        <div class="frow"><div class="fld"><label>Email</label><input placeholder="you@email.com"></div>
          <div class="fld"><label>Phone</label><input placeholder="(704) 555-0134"></div></div>
        <div class="fld"><label>I'm looking to</label><select><option>Buy a home</option><option>Sell a home</option><option>Buy and sell</option><option>Just exploring</option></select></div>
        <div class="fld"><label>What's on your mind?</label><textarea placeholder="Neighborhoods, timeline, budget, questions…"></textarea></div>
        <div class="smsrow"><input type="checkbox" checked aria-label="SMS consent"><span>Text me updates about my search. Msg &amp; data rates may apply; reply STOP to opt out, HELP for help. See Terms &amp; Privacy.</span></div>
        <button class="btn btn-orange" style="width:100%;justify-content:center">Send message</button>
      </div>
      <div class="cinfo">
        <div class="ci"><div><div class="k">Office</div><div class="v">Charlotte, North Carolina</div></div></div>
        <div class="ci"><div><div class="k">Serving</div><div class="v">Buyers &amp; sellers across all of NC</div></div></div>
        <div class="ci"><div><div class="k">Phone</div><div class="v">(704) 604-0608</div></div></div>
        <div class="ci"><div><div class="k">Email</div><div class="v">admin@southerncitiesrealty.com</div></div></div>
        <div class="ci"><div><div class="k">Darius Walton</div><div class="v">darius@southerncitiesrealty.com<br>(704) 604-0608 · NC #321548</div></div></div>
        <div class="ci"><div><div class="k">Madison Moore</div><div class="v">madison@southerncitiesrealty.com<br>(828) 291-5653 · NC #366705</div></div></div>
        <div class="ci"><div><div class="k">Firm License</div><div class="v">#C42672</div></div></div>
      </div>
    </div>
  </section>
  </main>

  <footer>
    <div class="fgrid">
      <div class="fbrand"><img src="data:image/png;base64,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" alt="Southern Cities Realty">
        <p>Helping you feel at home before you even move. A Charlotte brokerage serving all of North Carolina.</p></div>
      <div class="fcol"><h4>Explore</h4><a href="/listings">Buy a home</a><a href="#sell">Sell a home</a><a href="/neighborhoods">Areas We Serve</a><a href="/about">About</a></div>
      <div class="fcol"><h4>Company</h4><a href="#about">Our brokers</a><a href="#contact">Contact</a><a href="#listings">Featured homes</a></div>
      <div class="fcol"><h4>Stay in touch</h4><a href="#contact">admin@southerncitiesrealty.com</a><a href="#contact">(704) 604-0608</a>
        <div class="consent"><div class="box"></div><span>Text me updates. Msg/data rates apply; reply STOP to opt out. Terms · Privacy.</span></div></div>
    </div>
    <div class="legal"><span>© 2026 Southern Cities Realty · NC Real Estate Brokerage · Firm License #C42672 · Broker-in-Charge License #321548</span><span>Equal Housing Opportunity</span></div>
  </footer>

  <div class="modal" id="modal" aria-hidden="true">
    <div class="modalcard">
      <div class="mim" id="mIm"></div>
      <button class="modalclose" id="mClose" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="mbody">
        <div class="mtag" id="mTag"></div>
        <div class="mp" id="mP"></div>
        <div class="ma" id="mA"></div>
        <div class="mm" id="mM"></div>
        <div class="mrow">
          <a class="btn btn-orange" href="#contact" data-close>Schedule a tour</a>
          <a class="btn btn-ghost" href="#contact" data-close>Ask a question</a></div>
      </div>
    </div>
  </div>

  <div class="modal nbmodal" id="nbModal" aria-hidden="true">
    <div class="modalcard nbcard">
      <button class="modalclose" id="nbClose" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="nbhero"><img id="nbImg" alt=""><div class="nbheroov"></div>
        <div class="nbherot"><span id="nbArea"></span><h3 id="nbName"></h3></div></div>
      <div class="mbody nbdetail">
        <p class="nbabout" id="nbAbout"></p>
        <div class="nbhi" id="nbHi"></div>
        <div class="mrow">
          <a class="btn btn-orange" id="nbSearch" href="/listings">Search homes here</a>
          <a class="btn btn-ghost" id="nbAsk" href="#contact">Ask a local broker</a></div>
      </div>
    </div>
  </div>

  <button class="totop" id="totop" aria-label="Back to top"><svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>

  <div class="mobcta"><a class="btn btn-light" href="#sell">Home value</a><a class="btn btn-orange" href="/listings">Search homes</a></div>
</div>`;

export const HOME_JS = `(function(){
  var $=function(s,c){return (c||document).querySelector(s);};
  var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
  var fmt=function(n){return '$'+Math.round(n).toLocaleString('en-US');};

  var hdr=$('#hdr');
  addEventListener('scroll',function(){hdr.classList.toggle('scrolled',scrollY>30);},{passive:true});

  var PAGES=['home','listings','sell','neighborhoods','about','contact'];
  function route(){
    var h=(location.hash||'#home').replace('#','');
    if(PAGES.indexOf(h)<0)h='home';
    $$('.page').forEach(function(p){p.hidden=(p.getAttribute('data-page')!==h);});
    $$('#nav a, #mnav a').forEach(function(a){a.classList.toggle('active',a.getAttribute('data-nav')===h);});
    var mnav=$('#mnav');if(mnav)mnav.classList.remove('open');
    var pg=$('.page[data-page="'+h+'"]');
    if(pg)$$('.reveal',pg).forEach(function(el){el.classList.add('in');});
    scrollTo(0,0);
  }
  addEventListener('hashchange',route);

  $$('#tabs .tab').forEach(function(tb){tb.addEventListener('click',function(){
    $$('#tabs .tab').forEach(function(t){t.classList.remove('on');});tb.classList.add('on');
    $('#searchInput').placeholder=tb.getAttribute('data-ph');
    $('#searchBtn').textContent=tb.getAttribute('data-cta');
    $('#searchBtn').setAttribute('data-go',tb.getAttribute('data-go'));});});
  var sb=$('#searchBtn');
  if(sb)sb.addEventListener('click',function(){var g=sb.getAttribute('data-go')||'listings';if(g==='listings'){location.href='/listings';}else{location.hash='#'+g;}});

  document.addEventListener('click',function(e){
    var c=e.target.closest('#chips .chip');if(!c)return;
    $$('#chips .chip').forEach(function(x){x.classList.remove('on');});c.classList.add('on');
    var m=c.getAttribute('data-m');
    $$('#grid .listing').forEach(function(card){card.style.display=(m==='all'||card.getAttribute('data-m')===m)?'':'none';});
  });

  var savedCount=0;
  document.addEventListener('click',function(e){
    var f=e.target.closest('.fav');if(!f)return;e.preventDefault();e.stopPropagation();
    f.classList.toggle('on');
    savedCount+=f.classList.contains('on')?1:-1;if(savedCount<0)savedCount=0;
    var sc=$('#savedC'),sv=$('#saved');
    if(sc)sc.textContent=savedCount;
    if(sv)sv.classList.toggle('has',savedCount>0);});

  function animRange(rng,lo,hi){var s=performance.now(),d=900;
    (function tick(now){var p=Math.min((now-s)/d,1),e=1-Math.pow(1-p,3);
      rng.textContent=fmt(lo*e)+' – '+fmt(hi*e);
      if(p<1)requestAnimationFrame(tick);})(s);}
  function wireWorth(btnSel,addrSel,emailSel,boxSel,rngSel,capSel){
    var b=$(btnSel);if(!b)return;
    b.addEventListener('click',function(){
      var addr=(($(addrSel)||{}).value||'').trim(),email=(($(emailSel)||{}).value||'').trim();
      var box=$(boxSel),rng=$(rngSel),cap=$(capSel);
      box.classList.add('show');
      if(!addr){rng.textContent='';cap.textContent='Enter your property address to get started.';return;}
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){rng.textContent='';cap.textContent='Add your email and we will send your estimate.';return;}
      rng.textContent='Checking…';cap.textContent='';b.disabled=true;
      fetch('/api/home-value',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({address:addr,email:email})})
        .then(function(r){return r.json();}).then(function(d){
          b.disabled=false;
          if(d&&d.value){var lo=d.low||Math.round(d.value*0.95),hi=d.high||Math.round(d.value*1.05);
            animRange(rng,lo,hi);cap.textContent='Estimated range for your home. A broker will follow up to confirm it in person.';}
          else{rng.textContent='Got it, thank you';cap.textContent='A broker will personally prepare your home value and reach out shortly.';}
        }).catch(function(){b.disabled=false;rng.textContent='Got it, thank you';cap.textContent='A broker will personally prepare your home value and reach out shortly.';});
    });
  }
  wireWorth('#worthBtn','#addr','#email','#est','#estRng','#estCap');
  wireWorth('#worthBtn2','#addr2','#email2','#est2','#estRng2','#estCap2');

  function calc(){
    var price=+$('#price').value,dp=+$('#dp').value,rate=+$('#rate').value;
    $('#priceOut').textContent=fmt(price);$('#dpOut').textContent=dp+'%';$('#rateOut').textContent=rate.toFixed(1)+'%';
    var loan=price*(1-dp/100),r=rate/100/12,n=360;
    var pay=r===0?loan/n:loan*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    $('#pay').innerHTML=fmt(pay)+'<span>/mo</span>';
  }
  ['price','dp','rate'].forEach(function(id){var el=$('#'+id);if(el)el.addEventListener('input',calc);});
  if($('#price'))calc();

  var mk=['Charlotte','Ballantyne','SouthPark','Dilworth','Plaza Midwood','NoDa','Lake Norman','Davidson','Cornelius','Huntersville','Matthews','Waxhaw','Concord','Mooresville','Gastonia'];
  var track=$('#track');
  if(track){var html=mk.map(function(m){return '<span class="mk">'+m+'</span>';}).join('');track.innerHTML=html+html;}

  var nbhds=[['Ballantyne','South Charlotte','ballantyne','suburban'],['SouthPark','Charlotte','southpark','city'],['Dilworth','Charlotte','dilworth','historic'],['Myers Park','Central Charlotte','myers-park','historic'],
    ['Plaza Midwood','Charlotte','plaza-midwood','city'],['NoDa','Charlotte','noda','city'],['Lake Norman','Cornelius · Davidson','lake-norman','lake'],
    ['Matthews','Charlotte metro','matthews','suburban'],['Waxhaw','Charlotte metro','waxhaw','historic'],['Concord','North of Charlotte','concord','suburban'],
    ['Huntersville','North Mecklenburg','huntersville','lake'],['Mooresville','Lake Norman area','mooresville','lake'],['Uptown','Charlotte','uptown','city'],
    ['South End','Charlotte','south-end','city'],['LoSo','Lower South End','loso','city'],['University','Northeast Charlotte','university','suburban']];
  var nb=$('#nbhds');
  if(nb){nb.innerHTML=nbhds.map(function(a){
    return '<a class="nb" data-v="'+a[3]+'" data-slug="'+a[2]+'" href="#neighborhoods"><div class="badge">Best match</div>'+
      '<img loading="lazy" src="/neighborhoods/'+a[2]+'.jpg" alt="'+a[0]+', North Carolina">'+
      '<div class="ov"></div><div class="t"><h3>'+a[0]+'</h3><span>'+a[1]+'</span></div></a>';
  }).join('');}

  // ---- neighborhood detail modal ----
  var HINFO={
    uptown:{about:"Charlotte's skyline and center of gravity. Business towers, pro sports, and the city's biggest arts and culture venues, all packed into a walkable, high-energy core.",food:"Rooftop bars, chef-driven restaurants, and the 7th Street Public Market food hall.",shop:"Boutiques, galleries, and everyday essentials within walking distance.",fun:"Panthers at Bank of America Stadium, Hornets at Spectrum Center, Knights baseball at Truist Field, plus the Mint, Bechtler, and Gantt museums and Romare Bearden Park."},
    'south-end':{about:"One of Charlotte's most popular neighborhoods for young professionals. A dense, walkable strip of breweries, patios, and shops along the Rail Trail and the Lynx Blue Line.",food:"Wall-to-wall breweries, rooftop bars, coffee shops, and buzzy restaurants.",shop:"The Design District, Atherton Mill, and local boutiques.",fun:"Public art and events along the Rail Trail, with light rail to Uptown in minutes."},
    loso:{about:"Lower South End, the up-and-coming pocket just south of South End, where old warehouses are turning into breweries, food halls, and maker spaces around the New Bern rail stop.",food:"A growing cluster of craft breweries, taprooms, and food halls.",shop:"Makers, studios, and design showrooms in converted industrial space.",fun:"Blue Line light rail access and an emerging arts and brewery scene with room to grow."},
    dilworth:{about:"Charlotte's first streetcar suburb. Tree-lined streets, front-porch bungalows, and historic charm a short walk or bike from Uptown and South End.",food:"East Boulevard's restaurants, cafes, and neighborhood favorites.",shop:"Boutiques and local shops along East Boulevard.",fun:"Freedom Park and Latta Park, plus the greenway and easy access to the city."},
    'myers-park':{about:"One of Charlotte's most prestigious addresses. Grand historic homes under a canopy of willow oaks along Queens Road, minutes from SouthPark and Uptown.",food:"Fine dining and cafes nearby in Dilworth and SouthPark.",shop:"Upscale shopping a short drive away at SouthPark.",fun:"Freedom Park, the Little Sugar Creek Greenway, and some of the prettiest streets in the city for a walk."},
    'plaza-midwood':{about:"Charlotte's eclectic, artsy side. A diverse, walkable neighborhood along Central Avenue known for vintage shops, global food, dive bars, and creative energy.",food:"An international mix of restaurants, coffee shops, and craft beer.",shop:"Vintage, records, plants, and independent boutiques.",fun:"The Common Market, live music, and a genuinely local, come-as-you-are vibe."},
    noda:{about:"Charlotte's historic arts district (North Davidson). Murals, galleries, live-music venues, and breweries in a colorful, creative, walkable stretch.",food:"Breweries, taprooms, and independent restaurants.",shop:"Art galleries, studios, and quirky local shops along 36th Street.",fun:"Live music at the Neighborhood Theatre and The Evening Muse, First Friday gallery crawls, and NoDa Brewing."},
    southpark:{about:"Charlotte's upscale shopping and dining hub. Polished, convenient, and built around one of the Southeast's premier malls.",food:"Fine dining and popular restaurants throughout the district.",shop:"SouthPark Mall's flagship and luxury stores, plus surrounding retail.",fun:"Symphony Park's outdoor concerts and events, with Myers Park and greenways close by."},
    ballantyne:{about:"A polished, master-planned community in far south Charlotte. Newer homes, corporate campuses, golf, and the new Bowl at Ballantyne mixed-use district.",food:"Restaurants and cafes at Ballantyne Village and the Bowl.",shop:"Shopping centers and everyday retail throughout.",fun:"The Bowl at Ballantyne's greenway, amphitheater, and dining, plus golf and country-club living."},
    'lake-norman':{about:"Life on North Carolina's largest lake. Over 500 miles of shoreline for boating, waterfront homes, and a relaxed, resort-like pace just north of the city.",food:"Waterfront restaurants and lakeside dining.",shop:"Marinas, boat services, and lake-town shops.",fun:"Boating, fishing, paddleboarding, and Lake Norman State Park."},
    matthews:{about:"A charming small town on Charlotte's southeast edge. A walkable historic downtown, strong schools, and a real community feel.",food:"Local restaurants and cafes around downtown.",shop:"The Matthews Community Farmers Market and independent shops.",fun:"Stumptown Park events, festivals, and greenways."},
    waxhaw:{about:"A historic small town south of Charlotte known for its antique district, walkable downtown, and quiet, family-friendly pace.",food:"Downtown restaurants, breweries, and cafes.",shop:"Antique stores and local boutiques.",fun:"Festivals, small-town events, and easy access to open space."},
    concord:{about:"A growing city just north of Charlotte with a preserved historic downtown, big-time motorsports, and one of the region's largest shopping destinations.",food:"Downtown Union Street dining and plenty of options near Concord Mills.",shop:"Concord Mills outlet mall and historic downtown shops.",fun:"Charlotte Motor Speedway, Great Wolf Lodge, and downtown events."},
    huntersville:{about:"A family-friendly northern suburb blending Lake Norman access with the walkable shopping and dining of Birkdale Village.",food:"Restaurants and cafes at Birkdale Village and beyond.",shop:"Birkdale Village's open-air shops and everyday retail.",fun:"Lake Norman recreation, greenways, and community events."},
    mooresville:{about:"Race City USA, home to NASCAR teams and race shops, sitting right on Lake Norman with a lively historic Main Street.",food:"Downtown Main Street restaurants and lakeside dining.",shop:"Local shops downtown and race-shop showrooms.",fun:"NASCAR team tours, the lake, and downtown festivals."},
    university:{about:"University City, anchored by UNC Charlotte and University Research Park. A fast-growing, affordable area with light-rail access to Uptown.",food:"Casual restaurants and cafes around campus and the research park.",shop:"University-area retail and nearby Concord Mills.",fun:"UNC Charlotte events and Botanical Gardens, PNC Music Pavilion concerts, and the Blue Line to Uptown."}
  };
  var nbModal=$('#nbModal');
  if(nbModal&&nb){
    var closeNb=function(){nbModal.classList.remove('open');};
    nb.addEventListener('click',function(e){
      var card=e.target.closest('.nb');if(!card)return;e.preventDefault();
      var slug=card.getAttribute('data-slug'),info=HINFO[slug];if(!info)return;
      var name=(card.querySelector('h3')||{}).textContent||'',area=(card.querySelector('.t span')||{}).textContent||'';
      $('#nbImg').src='/neighborhoods/'+slug+'.jpg';$('#nbImg').alt=name+', North Carolina';
      $('#nbName').textContent=name;$('#nbArea').textContent=area;$('#nbAbout').textContent=info.about;
      $('#nbHi').innerHTML=
        '<div class="nbrow"><span class="nbk">Food &amp; Drink</span><span class="nbv">'+info.food+'</span></div>'+
        '<div class="nbrow"><span class="nbk">Shops &amp; Markets</span><span class="nbv">'+info.shop+'</span></div>'+
        '<div class="nbrow"><span class="nbk">Things to Do</span><span class="nbv">'+info.fun+'</span></div>';
      $('#nbSearch').textContent='Search homes near '+name;
      nbModal.classList.add('open');
    });
    $('#nbClose').addEventListener('click',closeNb);
    nbModal.addEventListener('click',function(e){if(e.target===nbModal)closeNb();});
    $('#nbSearch').addEventListener('click',function(e){e.preventDefault();location.href='/listings';});
    var nbAsk=$('#nbAsk');if(nbAsk)nbAsk.addEventListener('click',function(e){e.preventDefault();closeNb();location.hash='#contact';});
    addEventListener('keydown',function(e){if(e.key==='Escape')closeNb();});
  }

  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(!reduce){addEventListener('scroll',function(){var y=scrollY;
    $$('#heroArt .float').forEach(function(f){var d=+f.getAttribute('data-depth')||10;
      f.style.transform='translateY('+(y*d/-90)+'px)';});},{passive:true});}

  var prog=$('#progress');
  if(prog)addEventListener('scroll',function(){var d=document.documentElement,mx=d.scrollHeight-d.clientHeight;
    prog.style.width=(mx>0?(scrollY/mx*100):0)+'%';},{passive:true});

  var totop=$('#totop');
  if(totop){addEventListener('scroll',function(){totop.classList.toggle('show',scrollY>600);},{passive:true});
    totop.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'});});}

  var modal=$('#modal');
  if(modal){
    var closeModal=function(){modal.classList.remove('open');};
    document.addEventListener('click',function(e){
      if(e.target.closest('.fav'))return;
      var card=e.target.closest('.listing');if(!card)return;
      if(card.classList.contains('arealink'))return;
      var im=card.querySelector('.im svg'),tag=card.querySelector('.tag'),
          p=card.querySelector('.p'),a=card.querySelector('.a'),m=card.querySelector('.m');
      $('#mIm').innerHTML=im?im.outerHTML:'';
      $('#mTag').textContent=tag?tag.textContent:'';
      $('#mP').textContent=p?p.textContent:'';
      $('#mA').textContent=a?a.textContent:'';
      $('#mM').innerHTML=m?m.innerHTML:'';
      modal.classList.add('open');});
    $('#mClose').addEventListener('click',closeModal);
    modal.addEventListener('click',function(e){if(e.target===modal)closeModal();});
    $$('#modal [data-close]').forEach(function(b){b.addEventListener('click',closeModal);});
    addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
  }

  var vibes=$('#vibes');
  if(vibes)vibes.addEventListener('click',function(e){
    var b=e.target.closest('.vibe');if(!b)return;
    $$('#vibes .vibe').forEach(function(x){x.classList.remove('on');});b.classList.add('on');
    var v=b.getAttribute('data-v'),first=null;
    $$('#nbhds .nb').forEach(function(n){
      var match=(v!=='all'&&n.getAttribute('data-v')===v);
      n.classList.toggle('match',match);
      n.classList.toggle('dim',v!=='all'&&!match);
      if(match&&!first)first=n;});
    if(first)first.scrollIntoView({behavior:'smooth',block:'center'});});

  /* ---- Dream home builder ---- */
  if($('#dreamSvg')){
    var dream={bed:3,style:'craftsman',budget:650000,area:'Charlotte',feats:[]};
    var FEAT_ORDER=['a big yard','a garage','a home office','a pool','a walkable neighborhood','move-in ready'];

    var dMoney=function(n){return n>=1000000?('$'+(n/1000000).toFixed(n%1000000===0?0:1)+'M'):('$'+Math.round(n/1000)+'K');};

    var hasFeat=function(f){return dream.feats.indexOf(f)>-1;};

    var winCell=function(x,y,w,h){
      return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="2" fill="#ffcf99"/>'+
        '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="2" fill="none" stroke="#132452" stroke-width="1.4"/>'+
        '<line x1="'+(x+w/2)+'" y1="'+y+'" x2="'+(x+w/2)+'" y2="'+(y+h)+'" stroke="#132452" stroke-width="0.9"/>'+
        '<line x1="'+x+'" y1="'+(y+h/2)+'" x2="'+(x+w)+'" y2="'+(y+h/2)+'" stroke="#132452" stroke-width="0.9"/>';
    };
    var tree=function(x,base){
      return '<rect x="'+(x-3)+'" y="'+(base-16)+'" width="6" height="22" fill="#3a2b1c"/>'+
        '<circle cx="'+x+'" cy="'+(base-27)+'" r="18" fill="#3f7150"/>'+
        '<circle cx="'+(x-12)+'" cy="'+(base-18)+'" r="12" fill="#478059"/>'+
        '<circle cx="'+(x+12)+'" cy="'+(base-18)+'" r="12" fill="#356848"/>';
    };
    var roof=function(style,hx,hy,w){
      var e=6;
      if(style==='modern'){
        return '<rect x="'+(hx-e)+'" y="'+(hy-14)+'" width="'+(w+e*2)+'" height="14" fill="#101f45"/>'+
          '<rect x="'+(hx+w*0.1)+'" y="'+(hy-42)+'" width="'+(w*0.42)+'" height="28" fill="#f2ead9"/>'+
          '<rect x="'+(hx+w*0.1)+'" y="'+(hy-42)+'" width="'+(w*0.42)+'" height="28" fill="none" stroke="#e2d9c6"/>'+
          '<rect x="'+(hx+w*0.1-e)+'" y="'+(hy-54)+'" width="'+(w*0.42+e*2)+'" height="12" fill="#101f45"/>';
      }
      var rh=style==='historic'?52:(style==='southern'?28:38);
      var peak=hy-rh;
      var out='<polygon points="'+(hx-e)+','+hy+' '+(hx+w/2)+','+peak+' '+(hx+w+e)+','+hy+'" fill="#101f45"/>';
      if(style==='historic'||style==='southern'){
        out+='<rect x="'+(hx+w*0.7)+'" y="'+(peak+(hy-peak)*0.25)+'" width="12" height="'+(rh*0.7)+'" fill="#26386f"/>';
      }
      if(style==='craftsman'){
        var dcx=hx+w/2;
        out+='<polygon points="'+(dcx-16)+','+(hy-14)+' '+dcx+','+(hy-30)+' '+(dcx+16)+','+(hy-14)+'" fill="#1a2b57"/>'+
          '<rect x="'+(dcx-6)+'" y="'+(hy-15)+'" width="12" height="11" fill="#ffcf99" stroke="#132452" stroke-width="1"/>';
      }
      return out;
    };
    var drawHome=function(){
      var s=dream,W=400,H=260,gline=206;
      var bodyW=152+(Math.min(s.bed,5)-2)*16;
      var garage=hasFeat('a garage'),pool=hasFeat('a pool'),yard=hasFeat('a big yard');
      var gw=garage?52:0,total=bodyW+gw,x0=(W-total)/2;
      var hx=x0,hy=132,hh=gline-hy,gx=x0+bodyW;
      var P=[];
      P.push('<circle cx="322" cy="46" r="30" fill="#2b4090" opacity=".5"/>');
      P.push('<circle cx="66" cy="38" r="1.8" fill="#9fb0e0"/><circle cx="128" cy="70" r="1.4" fill="#9fb0e0"/><circle cx="366" cy="98" r="1.4" fill="#9fb0e0"/><circle cx="40" cy="112" r="1.4" fill="#9fb0e0"/>');
      P.push('<rect x="0" y="'+gline+'" width="'+W+'" height="'+(H-gline)+'" fill="'+(yard?'#2f5a3e':'#1c2f63')+'"/>');
      if(yard){P.push('<ellipse cx="70" cy="'+(gline+30)+'" rx="130" ry="20" fill="#356848" opacity=".65"/><ellipse cx="340" cy="'+(gline+34)+'" rx="130" ry="20" fill="#356848" opacity=".65"/>');}
      if(pool){P.push('<ellipse cx="'+(x0+total+30)+'" cy="'+(gline+20)+'" rx="44" ry="14" fill="#2f9ec2"/><ellipse cx="'+(x0+total+30)+'" cy="'+(gline+17)+'" rx="44" ry="13" fill="#57c1e0"/>');}
      if(yard){P.push(tree(32,gline));P.push(tree(374,gline-4));}
      if(garage){
        P.push('<rect x="'+gx+'" y="'+(hy+24)+'" width="'+gw+'" height="'+(hh-24)+'" fill="#efe7d6"/>');
        P.push('<polygon points="'+(gx-4)+','+(hy+24)+' '+(gx+gw/2)+','+(hy+4)+' '+(gx+gw+4)+','+(hy+24)+'" fill="#101f45"/>');
        P.push('<rect x="'+(gx+9)+'" y="'+(hy+36)+'" width="'+(gw-18)+'" height="'+(hh-36)+'" fill="#c9bfa8"/>');
      }
      P.push('<rect x="'+hx+'" y="'+hy+'" width="'+bodyW+'" height="'+hh+'" fill="#fbf7f1"/>');
      P.push('<rect x="'+hx+'" y="'+hy+'" width="'+bodyW+'" height="'+hh+'" fill="none" stroke="#e2d9c6" stroke-width="1"/>');
      P.push(roof(s.style,hx,hy,bodyW));
      var winN=Math.min(s.bed,4),wy=hy+16,ww=20,wh=22,mg=18,span=bodyW-mg*2;
      for(var i=0;i<winN;i++){
        var cx=winN===1?(hx+bodyW/2):(hx+mg+span*(i/(winN-1)));
        P.push(winCell(cx-ww/2,wy,ww,wh));
      }
      var dw=22,dh=42,dcx=hx+bodyW/2;
      P.push('<rect x="'+(dcx-dw/2)+'" y="'+(gline-dh)+'" width="'+dw+'" height="'+dh+'" rx="2" fill="#fa8c41"/>');
      P.push('<circle cx="'+(dcx+dw/2-5)+'" cy="'+(gline-dh/2)+'" r="1.6" fill="#fff"/>');
      return '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of your dream home">'+P.join('')+'</svg>';
    };
    var humanList=function(a){
      if(a.length===1)return a[0];
      if(a.length===2)return a[0]+' and '+a[1];
      return a.slice(0,-1).join(', ')+', and '+a[a.length-1];
    };
    var summarize=function(){
      var sw={craftsman:'craftsman',historic:'historic',modern:'modern',southern:'classic Southern'}[dream.style]||'';
      var bl=dream.bed>=5?'5+':(''+dream.bed);
      var base='A <b>'+bl+'-bedroom</b> '+sw+' home around <b>'+dMoney(dream.budget)+'</b> in <b>'+dream.area+'</b>';
      if(dream.feats.length){
        var fs=FEAT_ORDER.filter(function(f){return hasFeat(f);});
        base+=', with '+humanList(fs);
      }
      return base+'.';
    };
    var render=function(){
      var bo=$('#dBudgetOut');if(bo)bo.textContent=dMoney(dream.budget);
      var sv=$('#dreamSvg');if(sv)sv.innerHTML=drawHome();
      var ln=$('#dreamLine');if(ln)ln.innerHTML=summarize();
    };
    var single=function(id,attr,set){
      var g=$(id);if(!g)return;
      g.addEventListener('click',function(e){
        var b=e.target.closest('.dchip');if(!b)return;
        $$('.dchip',g).forEach(function(x){x.classList.remove('on');});
        b.classList.add('on');set(b.getAttribute(attr));render();});
    };
    single('#dBeds','data-bed',function(v){dream.bed=parseInt(v,10);});
    single('#dStyle','data-style',function(v){dream.style=v;});
    single('#dArea','data-area',function(v){dream.area=v;});
    var fg=$('#dFeat');
    if(fg)fg.addEventListener('click',function(e){
      var b=e.target.closest('.dchip');if(!b)return;
      b.classList.toggle('on');
      var f=b.getAttribute('data-feat'),i=dream.feats.indexOf(f);
      if(i>-1)dream.feats.splice(i,1);else dream.feats.push(f);
      render();});
    var bg=$('#dBudget');
    if(bg)bg.addEventListener('input',function(){dream.budget=parseInt(bg.value,10);render();});
    var send=$('#dSend');
    if(send)send.addEventListener('click',function(){
      var email=(($('#dEmail')||{}).value||'').trim(),ok=$('#dOk');
      if(!ok)return;
      if(!(email.indexOf('@')>0&&email.lastIndexOf('.')>email.indexOf('@')+1)){
        ok.className='dok show';ok.innerHTML='Add a valid email so a broker can reach you with matches.';return;}
      ok.className='dok show';ok.innerHTML='Sending your wishlist…';
      var payload={email:email,beds:dream.bed,style:dream.style,budget:dream.budget,area:dream.area,features:dream.feats,summary:($('#dreamLine')||{}).textContent||''};
      fetch('/api/wishlist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
        .then(function(r){return r.json().catch(function(){return{};});})
        .then(function(){ok.innerHTML='<b>Got it — your wishlist is on the way to a broker.</b> We\'ll start the hunt and reach out with real matches, on and off market.';})
        .catch(function(){ok.innerHTML='<b>Saved.</b> If you don\'t hear from us shortly, reach us any time at admin@southerncitiesrealty.com.';});
    });
    render();
  }

  var HOODS={
    ballantyne:{name:'Ballantyne',price:'$500k–$1.2M',tags:['Suburban','Newer homes','Golf nearby'],blurb:'Newer homes and an easy, spread-out feel in south Charlotte, with shopping and golf close by.'},
    dilworth:{name:'Dilworth',price:'$650k–$1.5M',tags:['Historic','Walkable','Charming'],blurb:'Tree-lined historic streets and front porches, a short walk to Uptown and South End.'},
    plaza:{name:'Plaza Midwood',price:'$450k–$900k',tags:['Trendy','Walkable','Eclectic'],blurb:'Artsy, eclectic, and endlessly walkable, patios, coffee shops, and character homes.'},
    noda:{name:'NoDa',price:'$400k–$800k',tags:['Arts','Nightlife','Creative'],blurb:'Charlotte’s arts district, murals, live music, breweries, and a social energy all its own.'},
    southpark:{name:'SouthPark',price:'$600k–$2M',tags:['Upscale','Shopping','Polished'],blurb:'Upscale and convenient, wrapped around premier shopping and dining.'},
    uptown:{name:'Uptown',price:'$350k–$1.5M',tags:['Urban','Walkable','Low-maintenance'],blurb:'High-rise living in the heart of the city, walk to work, games, and nightlife.'},
    myers:{name:'Myers Park',price:'$900k–$4M',tags:['Prestigious','Historic','Classic'],blurb:'Charlotte’s most storied address, grand canopy oaks and timeless, historic homes.'},
    matthews:{name:'Matthews',price:'$400k–$800k',tags:['Small-town','Great value','Parks'],blurb:'A friendly small-town feel with great value, parks, and easy access to the city.'},
    lakenorman:{name:'Lake Norman',price:'$500k–$3M',tags:['Lake','Outdoors','Relaxed'],blurb:'Life on the water, boating, sunsets, and room to breathe just north of the city.'}
  };
  var QUIZ=[
    {q:"What's your ideal pace?",a:[
      {t:'Buzzing, nights out, patios, walkable',s:['plaza','noda','uptown']},
      {t:'Calm and green, space to breathe',s:['ballantyne','matthews','myers']},
      {t:'A little of both',s:['dilworth','southpark']}]},
    {q:"Who's making the move?",a:[
      {t:'Putting down roots',s:['ballantyne','myers','matthews']},
      {t:'Just us, keep it low-maintenance',s:['uptown','noda','plaza']},
      {t:'We want room to grow and entertain',s:['southpark','dilworth']}]},
    {q:'Your perfect weekend?',a:[
      {t:'Live music, art, and good food',s:['noda','plaza']},
      {t:'On the water or outdoors',s:['lakenorman','ballantyne']},
      {t:'Shopping and dining out',s:['southpark','uptown']},
      {t:'Strolling historic streets',s:['dilworth','myers']}]},
    {q:'How close do you want to be to Uptown?',a:[
      {t:'Walking distance or a quick hop',s:['uptown','dilworth','plaza','noda']},
      {t:'A short, easy drive',s:['southpark','ballantyne','matthews']},
      {t:'Happy to drive for the right home',s:['lakenorman','matthews']}]},
    {q:'Which home speaks to you?',a:[
      {t:'Historic charm and character',s:['dilworth','myers','plaza']},
      {t:'New and modern',s:['ballantyne','uptown']},
      {t:'Upscale and polished',s:['southpark','myers']},
      {t:'Eclectic and one-of-a-kind',s:['noda','plaza']}]}
  ];
  var quizEl=$('#quiz');
  if(quizEl){
    var qi=0, answers=[];
    var renderQ=function(){
      var q=QUIZ[qi];
      var opts=q.a.map(function(o,i){return '<button class="qopt" data-i="'+i+'"><span class="tick"></span>'+o.t+'</button>';}).join('');
      quizEl.innerHTML='<div class="quizcard"><div class="quizprog"><div class="bar"><i style="width:'+Math.round(qi/QUIZ.length*100)+'%"></i></div>'+
        '<div class="step">Question '+(qi+1)+' of '+QUIZ.length+'</div></div><div class="quizq">'+q.q+'</div>'+
        '<div class="quizopts">'+opts+'</div>'+(qi>0?'<button class="qback" data-back>← Back</button>':'')+'</div>';
    };
    var showResult=function(){
      var scores={};
      answers.forEach(function(ai,i){QUIZ[i].a[ai].s.forEach(function(k){scores[k]=(scores[k]||0)+1;});});
      var ranked=Object.keys(scores).sort(function(a,b){return scores[b]-scores[a];});
      var h=HOODS[ranked[0]], runners=ranked.slice(1,3).map(function(k){return HOODS[k].name;});
      quizEl.innerHTML='<div class="quizcard qresult"><span class="eyebrow">Your best match</span>'+
        '<div class="rname">'+h.name+'</div><div class="rprice">Typical range '+h.price+'</div>'+
        '<div class="rtags">'+h.tags.map(function(t){return '<span class="rtag">'+t+'</span>';}).join('')+'</div>'+
        '<p class="rblurb">'+h.blurb+'</p>'+
        (runners.length?'<div class="rrun">Also worth a look: '+runners.join(' · ')+'</div>':'')+
        '<div class="rrow"><a class="btn btn-orange" href="#listings">See homes here</a>'+
        '<a class="btn btn-ghost" href="#contact">Talk to a broker</a></div>'+
        '<button class="qback" data-retake style="margin-top:20px">↺ Retake quiz</button></div>';
      $$('#nbhds .nb').forEach(function(n){n.classList.remove('match','dim');
        var hn=n.querySelector('h3');if(hn&&hn.textContent===h.name)n.classList.add('match');});
    };
    quizEl.addEventListener('click',function(e){
      var opt=e.target.closest('.qopt');
      if(opt){answers[qi]=+opt.getAttribute('data-i');qi++;
        if(qi<QUIZ.length){renderQ();}else{showResult();quizEl.scrollIntoView({behavior:'smooth',block:'start'});}return;}
      if(e.target.closest('[data-retake]')){qi=0;answers=[];
        $$('#nbhds .nb').forEach(function(n){n.classList.remove('match','dim');});
        renderQ();quizEl.scrollIntoView({behavior:'smooth',block:'start'});return;}
      if(e.target.closest('[data-back]')){if(qi>0)qi--;renderQ();return;}
    });
    renderQ();
  }

  route();
})();`;
