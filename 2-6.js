

        function centuryFromYear(year){
            
           let century= (year-(year%100)+100)/100;
           return century;
        }





        console.log(centuryFromYear(1822));