class Calculator {
    constructor() {
        this.operand_1 = "";
        this.operand_2 = "";
        this.operator = "";
        this.displayString = "";
        this.result = 0;
        this.op_count = 1;
        this.operatorTable = ['+', '-', '*', '/'];
        this.isFirst = true;
    }
    Clear() {
        this.operand_1 = "";
        this.operand_2 = "";
        this.operator = "";
        this.displayString = "0";
        this.isFirst = true;
        this.result = 0.0;
        this.Display();
    }
    Delete() {
        if (this.operand_2 != "") {
            this.operand_2 = this.operand_2.slice(0, -1);
            this.displayString += this.displayString.slice(0, -this.operand_2.length + 1) + this.operand_2;
            this.Display();
        }
    }
    Percent() {
        this.displayString = (+this.operand_1 / 100) + "";
        this.result = (+this.operand_1 / 100);
        this.operand_1 = this.result + "";
        this.Display();
    }
    Reciprocal(op) {
        if (this.operand_2 == "") {
            this.displayString = this.displayString.slice(0, -this.operand_1.length) + "1/(" + this.operand_1 + ")";
            this.result += (1 / +this.operand_1);
        }
        else {
            this.displayString = this.displayString.slice(0, -this.operand_2.length) + "1/(" + this.operand_2 + ")";
            this.result += (1 / +this.operand_2);
        }
        this.operand_1 = this.result + "";
        this.operand_2 = "";
        this.Display();
    }
    Power(pow) {
        if (this.operand_2 == "") {
            this.displayString = "sqr" + "(" + this.operand_1 + ")";
            this.result += Math.pow(+this.operand_1, pow);
        }
        else {
            this.displayString = this.displayString.slice(0, -this.operand_2.length) + "sqr" + "(" + this.operand_2 + ")";
            this.result += Math.pow(+this.operand_2, pow);
        }
        this.operand_1 = this.result + "";
        this.operand_2 = "";
        this.Display();
    }
    NumberButton(num) {
        if (this.displayString == "0") {
            this.displayString = "";
        }
        if (this.isFirst) {
            if (num === '.' && this.operand_1.includes('.'))
                return;
            if (this.operand_1 === "" && num === '.') {
                this.operand_1 = "0.";
                this.displayString = "0.";
            }
            else {
                this.operand_1 += num;
                this.displayString += num;
            }
        }
        else {
            if (num === '.' && this.operand_2.includes('.'))
                return;
            if (this.operand_2 === "" && num === '.') {
                this.operand_2 = "0.";
                this.displayString += "0.";
            }
            else {
                this.operand_2 += num;
                this.displayString += num;
            }
        }
        this.Display();
    }
    SetOperator(op) {
        this.op_count += 1;
        if (this.operatorTable.indexOf(this.displayString.slice(-1)) != -1) {
            this.displayString = this.displayString.slice(0, -1) + op;
            this.operator = op;
            this.Display();
            return;
        }
        if (this.op_count > 1) {
            this.result = (+this.operand_1);
            this.Equal();
        }
        this.isFirst = false;
        this.displayString += op;
        this.operator = op;
        this.Display();
    }
    Sign() {
        if (this.operand_2 == "") {
            this.operand_1 = (+this.operand_1 * -1) + "";
            this.displayString = this.operand_1;
        }
        else {
            var prevDisplay = this.displayString.slice(0, -this.operand_2.length);
            this.operand_2 = (+this.operand_2 * -1) + "";
            this.displayString = prevDisplay + this.operand_2;
        }
        this.Display();
    }
    Equal() {
        var operand_1 = +this.operand_1;
        var operand_2 = +this.operand_2;
        switch (this.operator) {
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
            default: break;
        }
        this.operator = "";
        this.operand_1 = this.result + "";
        this.operand_2 = "";
        this.Display();
    }
    Display() {
        document.getElementById("display").setAttribute("value", this.displayString + "");
        document.getElementById("result").setAttribute("value", +this.result.toPrecision(5) + "");
    }
}
var cal = new Calculator();
