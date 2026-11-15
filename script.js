const effects = [
  {
    title:"Gradient Moving Text",
    name:"Gradient Flow",
    subtitle:"Animated Gradient Text",
    className:"gradient-move",
    source:`<div class="gradient-move">Gradient Flow</div>

.gradient-move{
  background:linear-gradient(90deg,#38bdf8,#a78bfa,#f472b6,#facc15,#38bdf8);
  background-size:300% auto;
  color:transparent;
  -webkit-background-clip:text;
  background-clip:text;
  animation:gradientMove 4s linear infinite;
}
@keyframes gradientMove{
  0%{background-position:0% center;}
  100%{background-position:300% center;}
}`
  },
  {
    title:"Rotate In Text",
    name:"Rotate In",
    subtitle:"Rotate + Scale Intro",
    className:"rotate-in",
    source:`<div class="rotate-in">Rotate In</div>

.rotate-in{
  animation:rotateIn 2s ease-in-out infinite alternate;
}
@keyframes rotateIn{
  0%{opacity:0; transform:rotate(-20deg) scale(.7);}
  100%{opacity:1; transform:rotate(0deg) scale(1);}
}`
  },
  {
    title:"Blur Reveal",
    name:"Blur Reveal",
    subtitle:"Blur to Clear Text",
    className:"blur-reveal",
    source:`<div class="blur-reveal">Blur Reveal</div>

.blur-reveal{
  animation:blurReveal 2.2s ease-in-out infinite alternate;
}
@keyframes blurReveal{
  0%{
    opacity:0;
    filter:blur(12px);
    letter-spacing:8px;
  }
  100%{
    opacity:1;
    filter:blur(0);
    letter-spacing:1px;
  }
}`
  },
  {
    title:"Flicker Neon Text",
    name:"Neon Flicker",
    subtitle:"Flickering Neon Sign Effect",
    className:"flicker",
    source:`<div class="flicker">Neon Flicker</div>

.flicker{
  color:#4ade80;
  text-shadow:0 0 6px #4ade80,0 0 18px #4ade80,0 0 30px #4ade80;
  animation:flicker 1.8s infinite;
}
@keyframes flicker{
  0%,18%,22%,25%,53%,57%,100%{
    opacity:1;
    text-shadow:0 0 6px #4ade80,0 0 18px #4ade80,0 0 30px #4ade80;
  }
  20%,24%,55%{
    opacity:.35;
    text-shadow:none;
  }
}`
  },
  {
    title:"3D Flip Text",
    name:"3D Flip",
    subtitle:"3D Rotating Text",
    className:"flip3d",
    source:`<div class="flip-stage">
  <div class="flip3d">3D Flip</div>
</div>

.flip3d{
  display:inline-block;
  animation:flip3d 2.5s infinite ease-in-out;
  transform-style:preserve-3d;
}
@keyframes flip3d{
  0%{transform:rotateX(0deg) rotateY(0deg);}
  50%{transform:rotateX(180deg) rotateY(0deg);}
  100%{transform:rotateX(360deg) rotateY(360deg);}
}`
  }
];

const showcase=document.getElementById("showcase");
effects.forEach((effect,index)=>{
  const card=document.createElement("article");
  card.className="effect-card";
  const preview=document.createElement("section");
  preview.className="preview";
  const tag=document.createElement("span");
  tag.className="preview-label";
  tag.textContent="PREVIEW";
  const heading=document.createElement("h2");
  heading.className=effect.className;
  heading.textContent=effect.name;
  if(effect.className==="flip3d"){
    const stage=document.createElement("div");
    stage.className="flip-stage";
    stage.append(heading);
    preview.append(tag,stage);
  }else{
    preview.append(tag,heading);
  }
  const subtitle=document.createElement("p");
  subtitle.textContent=effect.subtitle;
  preview.append(subtitle);

  const codeArea=document.createElement("section");
  codeArea.className="code-area";
  const head=document.createElement("div");
  head.className="code-head";
  const title=document.createElement("h3");
  title.textContent=effect.title;
  const copy=document.createElement("button");
  copy.className="copy-btn";
  copy.type="button";
  copy.textContent="Copy Code";
  copy.addEventListener("click",async()=>{
    try{
      await navigator.clipboard.writeText(effect.source);
      copy.textContent="Copied!";
      setTimeout(()=>copy.textContent="Copy Code",1300);
    }catch{
      copy.textContent="Copy unavailable";
      setTimeout(()=>copy.textContent="Copy Code",1300);
    }
  });
  head.append(title,copy);
  const pre=document.createElement("pre");
  pre.textContent=effect.source;
  codeArea.append(head,pre);
  card.append(preview,codeArea);
  showcase.append(card);
});
