///<reference path="pixi.js.d.ts"/>
document.addEventListener("DOMContentLoaded",function(){new Hw5();},false);

class BtnKeyValue{
    public Name:string;
    public TextValue:string;
}

class Hw5{
    private app:PIXI.Application;
    private texture1:PIXI.Texture;
    private texture2:PIXI.Texture;
    private btns:any=[];
    private m:any=[];
    private bol:boolean=true;
    private BtnKeyValueMap:BtnKeyValue[][] = [
        [{Name:"percent",TextValue:"%"},{Name:"根號??",TextValue:"根號"},{Name:"pow2",TextValue:"x^2"},{Name:"sq???",TextValue:"1/x"}],
        [{Name:"ce",TextValue:"CE"},{Name:"",TextValue:""},{Name:"",TextValue:""},{Name:"",TextValue:""}],
        [{Name:"number_7",TextValue:"7"},{Name:"number_8",TextValue:"8"},{Name:"number_9",TextValue:"9"},{Name:"mul",TextValue:"*"}],
        [{Name:"number_4",TextValue:"4"},{Name:"number_5",TextValue:"5"},{Name:"number_6",TextValue:"6"},{Name:"add",TextValue:"+"}],
        [{Name:"number_1",TextValue:"1"},{Name:"number_2",TextValue:"2"},{Name:"number_3",TextValue:"3"},{Name:"sub",TextValue:"-"}],
        [{Name:"op_+-",TextValue:"+/-"},{Name:"number_0",TextValue:"0"},{Name:"point",TextValue:"."},{Name:"equal",TextValue:"="}],
    ];
    constructor(){
        this.app=new PIXI.Application({
            width:320,
            height:531
        });
        document.body.appendChild(this.app.view);
        this.app.loader.add('./hw5source.json')
        this.app.loader.load(()=>{this.onAssetsLoaded();});
    }

    onAssetsLoaded(){
        const img=[];
        let i:number;
        let j:number;
        
        const texture0=PIXI.Texture.from('background0000');
        const background=new PIXI.Sprite(texture0);
        img.push(texture0);
        this.app.stage.addChild(background);
        this.texture1=PIXI.Texture.from('btn_up0000');
        img.push(this.texture1);
        this.texture2=PIXI.Texture.from('btn_down0000');
        img.push(this.texture2);
        for(i=0;i<6;i++){
            for(j=0;j<4;j++){
                const btn=new PIXI.Sprite(this.texture1);
                btn.interactive=true;
                btn.buttonMode=true;
                btn.Name = this.BtnKeyValueMap[i][j].Name;
                btn.x=0+j*80;
                btn.y=475-55*i;
                btn.on("pointerover", this.pointerOver);
                this.app.stage.addChild(btn);
                this.btns.push(btn);
                
            }
        }
        for(i=0;i<5;i++){
            const btn=new PIXI.Sprite(this.texture1);
            btn.interactive=true;
            btn.buttonMode=true;
            btn.width=77*3/5;
            btn.height=53*3/5;
            btn.x=0+i*48;
            btn.y=475-55*6+53*2/5;
            this.app.stage.addChild(btn);
            this.m.push(btn);
        }
    }
    pointerOver(this:PIXI.Sprite){
        console.log(this);
        /*this.bol=!this.bol;

        if (this.bol) {
            this.btns.texture = this.texture1;
        } else {
            this.btns.texture = this.texture2;
        }*/
    }
}