var Calculator = /** @class */ (function () {
    function Calculator() {
        this.displayExpressionString = "";
        this.displayReslutString = "";
        this.displayReslutString = "0";
    }
    Calculator.prototype.Clear = function () {
        this.displayExpressionString = "0";
        this.displayReslutString = "0";
        this.Display();
        this.DisplayResult();
    };
    Calculator.prototype.Percent = function () {
        this.Equal();
        this.displayReslutString = (+this.displayReslutString / 100.0) + "";
        this.Display();
    };
    Calculator.prototype.Reciprocal = function () {
        this.Equal();
        this.displayReslutString = (1 / +this.displayReslutString) + "";
        this.Display();
    };
    Calculator.prototype.Power = function () {
        this.Equal();
        this.displayReslutString = Math.pow(+this.displayReslutString, 2) + "";
        this.Display();
    };
    Calculator.prototype.Square = function () {
        this.Equal();
        this.displayReslutString = Math.pow(+this.displayReslutString, 0.5) + "";
        this.Display();
    };
    Calculator.prototype.NumberButton = function (num) {
        if (this.displayExpressionString === "0") {
            this.displayExpressionString = "";
        }
        this.displayExpressionString += num;
        this.Display();
    };
    Calculator.prototype.SetOperator = function (op) {
        this.displayExpressionString += op;
        this.Display();
    };
    Calculator.prototype.Equal = function () {
        var result = eval(this.displayExpressionString);
        this.displayReslutString = result + "";
        this.DisplayResult();
    };
    Calculator.prototype.Display = function () {
        document.getElementById("display").setAttribute("value", this.displayExpressionString + "");
    };
    Calculator.prototype.DisplayResult = function () {
        document.getElementById("display_result").setAttribute("value", this.displayReslutString + "");
    };
    return Calculator;
}());
var cal = new Calculator();
