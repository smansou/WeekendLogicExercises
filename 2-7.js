
        function operations(op, num1, num2){

                const result = {
                '+': function (num1, num2) { return num1+num2; },
                '-': function (num1, num2) { return num1 - num2; },
                '/': function (num1, num2) { return num1 / num2; },
                '*': function (num1, num2) { return num1 * num2; },
                '**': function (num1, num2) { return num1 ** num2; },
                '%': function (num1, num2) { return num1 % num2; },
                };
                return result[op](num1,num2);
        }

        console.log(operations('+', 18, 2));

       
        


  