class Calculator {
    private displayExpressionString:string = "";
    private displayReslutString:string = "";

    constructor(){      
          this.displayReslutString = "0";
    }

    public Clear(){
        this.displayExpressionString = "0";    
        this.displayReslutString = "0";
        this.Display();
        this.DisplayResult();
    }

    public Percent(){
        this.Equal();
        this.displayReslutString = (+this.displayReslutString / 100.0) + "";
        this.Display();
    }

    public Reciprocal(){
        this.Equal();
        this.displayReslutString = (1/+this.displayReslutString) + "";
        this.Display();
    }

    public Power(){
        this.Equal();
        this.displayReslutString = Math.pow(+this.displayReslutString,2)+ "";
        this.Display();
    }

    public Square(){
        this.Equal();
        this.displayReslutString =  Math.pow(+this.displayReslutString,0.5) + "";
        this.Display();
    }   

    public NumberButton(num:string){
        if (this.displayExpressionString === "0"){
            this.displayExpressionString = "";
        }        

        this.displayExpressionString += num; 

        this.Display();
    }

    public SetOperator(op:string){     
        this.displayExpressionString += op; 
        this.Display();
    } 

    public Equal(){

       var result:number = eval(this.displayExpressionString);        
       
        this.displayReslutString = result + "";
        
        this.DisplayResult();
    }

    private Display(){
        (<HTMLInputElement>document.getElementById("display")).setAttribute("value", this.displayExpressionString + "");    
    }

    private DisplayResult(){
        (<HTMLInputElement>document.getElementById("display_result")).setAttribute("value", this.displayReslutString + "");    
    }
}

var cal = new Calculator();