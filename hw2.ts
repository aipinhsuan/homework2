class Calculator {

    private operand_1:string = "";
    private operand_2:string = "";
    private operator:string = "";
    private displayString:string = "";
    private isFirst:boolean;

    constructor(){
        this.isFirst = true;
    }

    public Clear(){
        this.operand_1 = "";
        this.operand_2 = "";
        this.operator = "";
        this.displayString = "0";
        this.isFirst = true;
        this.Display();
    }

    public Percent(){
        this.displayString = (+this.operand_1 / 100.0) + "";
        this.Display();
    }

    public Reciprocal(){
        this.displayString = (1/+this.operand_1) + "";
        this.Display();
    }

    public Power(){
        this.displayString = Math.pow(+this.operand_1,2)+ "";
        this.Display();
    }

    public Square(){
        this.displayString =  Math.pow(+this.operand_1,0.5) + "";
        this.Display();
    }   

    public NumberButton(num:string){
        if (this.displayString === "0"){
            this.displayString = "";
        }        

        if (this.isFirst){           
            this.operand_1 += num; 
            this.displayString += num;          
        }
        else {    
            this.operand_2 += num;
            this.displayString += num;  
        }
        this.Display();
    }

    public SetOperator(op:string){
        this.isFirst = false;
        this.displayString += op;  
        this.operator = op;
        this.Display();
    } 

    public Equal(){
        this.isFirst = true;
        var operand_1:number = + this.operand_1;
        var operand_2:number = + this.operand_2;
        var result:number = 0;
        switch(this.operator){
            case "+":
                result = operand_1 + operand_2;
                break;
            case "-":
                result = operand_1 - operand_2;
                break;
            case "*":
                result = operand_1 * operand_2;
                break;
            case "/":
                result = operand_1 / operand_2;
                break;
        }
       
        this.displayString = result + "";
        this.Display();
    }

    private Display(){
        (<HTMLInputElement>document.getElementById("display")).setAttribute("value", this.displayString + "");    
    }
}

var cal = new Calculator();