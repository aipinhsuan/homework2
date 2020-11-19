class Calculator {

    private operand_1:string = "";
    private operand_2:string = "";
    private operator:string = "";
    private displayString:string = "";
    private isFirst:boolean;
    private result:number = 0;
    private op_count:number=1;


    constructor(){
        this.isFirst = true;
    }

    public Clear(){       
        this.operand_1 = "";
        this.operand_2 = "";
        this.operator = "";
        this.displayString = "0";
        this.isFirst = true;
        this.result=0.0;
        this.Display();
    }

    public Delete(){
        if(this.operand_2!=""){
            this.operand_2=this.operand_2.slice(0,-1);
            this.displayString +=this.displayString.slice(0,-this.operand_2.length+1)+this.operand_2;
            this.Display();
        }
    }

    public Percent(){
        this.displayString=(+this.operand_1 / 100)+"";
        this.result= (+this.operand_1 / 100);
        this.operand_1=this.result+"";
        this.Display();
    }

    public Reciprocal(op:string){
        if(this.operand_2==""){           
            this.displayString =this.displayString.slice(0,-this.operand_1.length)+"1/("+this.operand_1+")"
            this.result+=(1/+this.operand_1);
        }
        else{
            this.displayString =this.displayString.slice(0,-this.operand_2.length)+"1/("+this.operand_2+")";
            this.result+=(1/+this.operand_2);
        }
        this.operand_1=this.result+"";
        this.operand_2="";
        this.Display()        
    }

    public Power(pow:number){  

        if(this.operand_2==""){           
            this.displayString ="sqr"+"("+this.operand_1+")";
            this.result+=Math.pow(+this.operand_1,pow);
        }
        else{                  
            this.displayString = this.displayString.slice(0,-this.operand_2.length)+"sqr"+"("+this.operand_2+")";
            this.result+=Math.pow(+this.operand_2,pow);
        }

        this.operand_1=this.result+"";
        this.operand_2="";
        this.Display();         
    } 

    public NumberButton(num:string){
        if (this.displayString == "0"){
            this.displayString = "";
        }        

        if (this.isFirst){    
            if (num === '.' && this.operand_1.includes('.'))
                return;

            if (this.operand_1 === "" && num === '.'){
                this.operand_1 = "0.";   
                this.displayString = "0.";             
            }
            else{
                this.operand_1 += num; 
                this.displayString += num;    
            }      
        }
        else {  
            if (num === '.' && this.operand_2.includes('.'))
            return;

            if (this.operand_2 === "" && num === '.'){
                this.operand_2 = "0.";
                this.displayString += "0."; 
            }
            else{
                this.operand_2 += num;
                this.displayString += num;  
            }       
        }
        this.Display();
    }
    private operatorTable:string[] = ['+','-','*','/'];

    public SetOperator(op:string){
        this.op_count+=1;

        if(this.operatorTable.indexOf(this.displayString.slice(-1)) != -1){
            this.displayString = this.displayString.slice(0,-1) + op;
            this.operator = op;
            this.Display();
            return;
        }
         
        if(this.op_count>1){         
            this.result = (+this.operand_1);
            this.Equal();
        }
        this.isFirst = false;

        this.displayString += op;   

        this.operator = op;
        this.Display();
    }    

    public Sign(){
        if(this.operand_2 == ""){ 
            this.operand_1 = (+this.operand_1*-1) + "";      
            this.displayString = this.operand_1;         
        }
        else{  
            var prevDisplay:string = this.displayString.slice(0,-this.operand_2.length);
            this.operand_2 = (+this.operand_2*-1) + "";       
            this.displayString = prevDisplay+this.operand_2;                   
        }

        this.Display();  
    }

    public Equal(){ 
            var operand_1:number = + this.operand_1;
            var operand_2:number = + this.operand_2;
            
            switch(this.operator){
                case "+":
                    this.result = operand_1 + operand_2;
                    break;
                case "-":
                    this.result = operand_1 - operand_2;
                    break;
                case "*":
                    this.result = operand_1 * operand_2;
                    break;
                case "/":
                    this.result = operand_1 / operand_2;
                    break;
                default:break;
            }
            this.operator="";
            this.operand_1=this.result+"";
            this.operand_2="";
            this.Display();
    }

    private Display(){
        (<HTMLInputElement>document.getElementById("display")).setAttribute("value", this.displayString + "");  
        (<HTMLInputElement>document.getElementById("result")).setAttribute("value", +this.result.toPrecision(5)  + "");
    }
}

var cal = new Calculator();