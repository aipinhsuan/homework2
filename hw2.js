var Calculator = /** @class */ (function () {
    function Calculator() {
        this.operand_1 = "";
        this.operand_2 = "";
        this.operator = "";
        this.displayString = "";
        this.isFirst = true;
    }
    Calculator.prototype.Clear = function () {
        this.operand_1 = "";
        this.operand_2 = "";
        this.operator = "";
        this.displayString = "0";
        this.isFirst = true;
        this.Display();
    };
    Calculator.prototype.Percent = function () {
        this.displayString = (+this.operand_1 / 100.0) + "";
        this.Display();
    };
    Calculator.prototype.Reciprocal = function () {
        this.displayString = (1 / +this.operand_1) + "";
        this.Display();
    };
    Calculator.prototype.Power = function () {
        this.displayString = Math.pow(+this.operand_1, 2) + "";
        this.Display();
    };
    Calculator.prototype.Square = function () {
        this.displayString = Math.pow(+this.operand_1, 0.5) + "";
        this.Display();
    };
    Calculator.prototype.NumberButton = function (num) {
        if (this.displayString === "0") {
            this.displayString = "";
        }
        if (this.isFirst) {
            this.operand_1 += num;
            this.displayString += num;
        }
        else {
            this.operand_2 += num;
            this.displayString += num;
        }
        this.Display();
    };
    Calculator.prototype.SetOperator = function (op) {
        this.isFirst = false;
        this.displayString += op;
        this.operator = op;
        this.Display();
    };
    Calculator.prototype.Equal = function () {
        this.isFirst = true;
        var operand_1 = +this.operand_1;
        var operand_2 = +this.operand_2;
        var result = 0;
        switch (this.operator) {
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
    };
    Calculator.prototype.Display = function () {
        document.getElementById("display").setAttribute("value", this.displayString + "");
    };
    return Calculator;
}());
var cal = new Calculator();
