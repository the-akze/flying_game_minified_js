// this and index_pre are not the final code
// combined code into 1 file is in index.html
var M=P=I=J=q=W=i=F=Y=v=w=h=G=S=V=0,
d=document,b=d.body,c=d.querySelector("canvas"),C=c.getContext("2d"),t=d.querySelector("h3"),
k={f:0},n=Date.now,_=(x,l,h)=>x<l?l:(x>h?h:x),m=Math,p=m.PI,
f=s=>{C.fillStyle=s},s=40,r=m.random,O=[],_o=(s)=>O.push({x:w+100+r()*100,y:s+(h-2*s)*r(),s}),
E=(x,y,s)=>{C.beginPath();C.ellipse(x,y,s,s,0,0,2*p);C.fill()},
a="addEventListener",L=e=>{k.f=true},A=e=>{k.f=false},Ls=_=>{L();k.s=true;},As=_=>{A();k.s=false;},
D=(x,y,a,b)=>((x-a)**2+(y-b)**2)**.5,
U=_=>(V=m.max(_?_:0,V));
U(0);
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
    G==2&&(I=r()-.5,J=r()-.5,q=99999/(n()-M)**1.5)||(I=J=0);
    C.translate(I*q,J*q);
    f("black");
    C.fillRect(-999,-999,w+1998,h+1998);
    G==2&&(f("white"),E(20,Y,(n()-M)*.2));
    f("red");
    O=O.filter(o=>o.x>-50).map(o=>{
        G==1&&(o.x-=S);
        let {x,y,s}=o;
        E(x,y,s);
        D(20,Y,x,y)<s+10&&G==1&&(G=2,M=n());
        return o;
    });
    f("white");
    v=_(0.9*v+(!k.f-k.f)*.7,-8,8);
    G<2&&(Y=_(Y+v,20,180));
    v=Y>=180||Y<=20?0:v;
    E(20,Y,10);
    (G==0||G==2)&&(F=0,k.s===false&&(G=1,W=0));
    if (G==1) {
        F==0&&(O=[]);
        k.s=true;
        S=_(1+F*0.005,1,10);
        F%(S>=6?10:30)==0&&(_o(10+5*r()));
        F++;
        W+=m.round(S/5);
    }
    C.translate(-I*q,-J*q);
    t.innerText=["CLICK TO PLAY","Press any key or on screen to fly. It gets faster.\nSCORE:"+W+", HIGHEST:"+U(W),W+", CLICK TO RESTART"][G];
},16);