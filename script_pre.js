// this and index_pre are not the final code
// fully minified code is in index.html

var d=document,b=d.body,c=d.querySelector("canvas"),C=c.getContext("2d"),
k={f:0},n=Date.now,_=(x,l,h)=>x<l?l:(x>h?h:x),m=Math,p=m.PI,Y=0,v=0,
f=s=>{C.fillStyle=s},w,h,s=40,r=m.random,O=[],_o=(s)=>O.push({x:w+100+r()*100,y:s+(h-2*s)*r(),s}),
i=0,F=0,E=(x,y,s)=>{C.beginPath();C.ellipse(x,y,s,s,0,0,2*p);C.fill()},G=0,a="addEventListener",
L=e=>{k.f=true},A=e=>{k.f=false},S,to/*time opened*/=n(),Ls=_=>{L();k.s=true;},As=_=>{A();k.s=false;},
D=(x,y,a,b)=>((x-a)**2+(y-b)**2)**.5,M=0,P=0,I=0,J=0/*in minified, simplify to M=P=I=J=0*/,q=0,W=0,
U=_=>{let h=localStorage.getItem(H);let n=m.max(_?_:0,h);localStorage.setItem(H,h==null?0:n);return n},H="high";
U(0);
/*G is game state;0=menu 1=play 2=*/;

c.width=w=500;c.height=h=200;b.style.margin=0;
window[a]("keydown",L);
window[a]("keyup",A);

window[a]("mousedown",L);
window[a]("mousedown",Ls);
window[a]("mouseup",A);
window[a]("mouseup",As);

window[a]("touchstart",L);
window[a]("touchstart",Ls);
window[a]("touchend",A);
window[a]("touchend",As);

setInterval(()=>{
    C.textAlign="center";
    C.textBaseline="middle";
    C.font = "30px monospace";

    G==2&&(I=r()-.5,J=r()-.5,q=99999/(n()-M)**1.5)||(I=J=0);
    // multiply shake magnitude by 4/(n()-M)
    C.translate(I*q,J*q);

    f("black");
    C.fillRect(-999,-999,w+1998,h+1998);

    f("red");
    O=O.filter(o=>o.x>-50).map(o=>{
        G==1&&(o.x-=S);
        let {x,y,s}=o;
        // C.fillRect(x,y,s,s);
        E(x,y,s);
        D(20,Y,x,y)<s+10&&G==1&&(G=2,M=n());
        return o;
    });

    f("white");
    v=_(0.9*v+(!k.f-k.f)*.7,-8,8);
    G<2&&(Y=_(Y+v,20,180));
    v=Y>=180||Y<=20?0:v;
    E(20,Y,10);
    if (G==0||G==2) {
        F=0;
        f("white");
        G==2&&(f("white"),E(20,Y,(n()-M)*.5),f("black"));
        C.fillText(["CLICK TO PLAY",,"GAME OVER, CLICK TO RETRY"][G],250,100,500);
        k.s===false&&(G=1,W=0);
    }

    if (G==1) {
        F==0&&(O=[]);
        k.s=true;
        S=_(1+F*0.005,1,10);
        F%(S>=6?10:30)==0&&(_o(10+5*r()));
        F++;
        W+=m.round(S/5);
    }

    C.translate(-I*q,-J*q);

    C.textAlign="right";
    C.textBaseline="top"
    C.font="14px monospace";
    C.fillText(H+": "+U(W),490,10);
    C.font=(G==2?"40":"20")+"px monospace";
    C.fillText((G==2?"SCORE: ":"") + W,485,30);
},16);