var Calculator = /** @class */ (function () {
    function Calculator() {
        this.operand_1 = "";
        this.operand_2 = "";
        this.displayString = "";
        this.isFirst = true;
    }
    Calculator.prototype.NumberButton = function (num) {
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
    Calculator.prototype.Add = function () {
        this.isFirst = false;
        this.displayString += '+';
        this.Display();
    };
    Calculator.prototype.Equal = function () {
        var operand_1 = +this.operand_1;
        var operand_2 = +this.operand_2;
        var result = operand_1 + operand_2;
        this.displayString = result + "";
        this.Display();
    };
    Calculator.prototype.Display = function () {
        document.getElementById("display").setAttribute("value", this.displayString + "");
    };
    return Calculator;
}());
var cal = new Calculator();
