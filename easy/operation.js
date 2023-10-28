// تحديد العملية الرياضية
function operation(num1, num2) {
    var op="";
    var x=24;
    switch (x) {
      case (num1/num2):
        op = "divided";
        break;
      case (num1*num2):
        op = "multiplied";
        break;
      case (num1+num2):
        op = "added";
        break;
      case (num1-num2):
        op = "subtracted";
        break;
      default:
        op = "None";
	}
	return op;

}
