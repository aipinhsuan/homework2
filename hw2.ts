class Calculator {

    private operand_1:string = "";
    private operand_2:string = "";
    private displayString:string = "";
    private isFirst:boolean;

    constructor(){
        this.isFirst = true;
    }

    public NumberButton(num:string){
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

    public Add(){
        this.isFirst = false;
        this.displayString += '+';  
        this.Display();
    }

    public Equal(){
        var operand_1:number = +this.operand_1;
        var operand_2:number = +this.operand_2;
        var result = operand_1 + operand_2;
        this.displayString = result + "";
        this.Display();
    }

    private Display(){
        (<HTMLInputElement>document.getElementById("display")).setAttribute("value", this.displayString + "");    
    }
}

var cal = new Calculator();