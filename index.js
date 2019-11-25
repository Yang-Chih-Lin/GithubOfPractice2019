        /*//this is my first javascript
        console.log('hello :))  ------- :))');
        let name = 'YangChih';
        console.log(name);
        //names should be meaningful
        let firstName = "Yang Chih";
        let lastName = "Lin";

        const interestRate = 0.3;//constant:1 不會改變的值
        //interestRate = 1;//會出現error

        function greet(name0){
                console.log('Helli World ' + name0);
        }

        greet('John');
        function square(number){
                return number * number;
        }*/

        // console.log(square(13));

        /*console.log('1' === 1);//嚴格的等於Type與Value都要相等 -> false
        console.log('1' == 1);//嚴格的等於Type與Value都要相等 -> true

        let points = 110;
        let type = points > 100 ? 'gold>100' : 'silver<100';
        console.log(type);
        
        // 0,undefined,null -> false
        */

        /*var X = 10;
        console.log(X);
        console.log(++X);
        console.log(X++);
        console.log(X++);
        console.log(X++);*/


        /*11- Quiz
        1. b +-得負
        2. a 負或正 -> 正
        3. c X大於10才顯示1
        4. 5*9=45
        5. a 之Type不相同
        6. b x=true
        7. 比大小的結果為布林值
        8. 5+3=8
        9. y = ++x; 時 =11 
        10. 1 !==2
        */


        //Control Flow
        //10.
        console.log("Exercise 1.");
        var a = 10; //the first number
        var b = 11; //the second number
        ReturnTheMax(a,b);
        function ReturnTheMax(first,second){
                if(first > second){
                        console.log("first",first);
                        return first;
                } else if(second > first){
                        console.log("second",second);
                        return second;
                } else {
                        console.log("the two numbers are same.");
                }
        }
        //better way:
        let ans = ReturnTheMax2(a,b)
        console.log("ans = ",ans)
        function ReturnTheMax2(first,second){
                return (first > second) ? first : second ;
        }

        //11.
        console.log("Exercise 2.");
        let ans11 = isLandscape(400,300);
        console.log(ans11);
        function isLandscape(width , height){
                return (width > height) ? true : false;
        }
        //better way:
        let ans11_2 = isLandscape2(150,300);
        console.log(ans11_2);
        function isLandscape2(width , height){
                return (width > height);
        }

        //12.
        console.log("Exercise 3.");
        const output = fizzBuzz("7");
        console.log(output);
        function fizzBuzz(input){
                if(typeof input !== 'number'){
                        //return "Not a Number.";
                        return NaN;
                } else if (input % 3 == 0 && input % 5 == 0) {
                        return "FizzBuzz" ;
                } else if (input % 3 == 0 && input % 5 != 0){
                        return "Fizz" ;
                } else if (input % 3 != 0 && input % 5 == 0){
                        return "Buzz" ;
                } else if (input % 3 != 0 && input % 5 != 0){
                        return input;
                }
        }

        //13.
        console.log("Exercise 4.");
        console.log(checkSpeed(71));
        function checkSpeed(speed){
                let points = Math.floor((speed - 70) / 5);
                
                if(points >= 1) {
                        return(points < 12) ? points : "License suspended";
                } else {
                        return "OK";
                }
        }
        
        //14.
        console.log("Exercise 5.");
        showNumbers(10);
        function showNumbers(limit){
                let number = 0;
                while(number <= limit){
                        if(number % 2 == 0 ){
                                console.log(number,"EVEN")
                        } else {

                                console.log(number,"ODD")
                        }
                        number++;
                }
        }
        //better way:
        showNumbers2(3);
        function showNumbers2(limit){
                for(let i = 0; i <= limit; i++){
                        const message = (i % 2 === 0) ? 'EVEN':'ODD';
                        console.log(i,message)
                }
        }

        //15.
        console.log("Exercise 6.");
        const arry = [0, null, undefined ,'', 1, 2, 3];
        console.log(countTruthy(arry));
        function countTruthy(arry){
                let count = 0;
                for(let value of arry) //************指值
                        if (value)
                                count++;
                return count;
        }

        //16.
        console.log("Exercise 7.");
        const movie = {
                title: 'a',
                releaseYear: 2018,
                rating: 4.5,
                director: 'b'
        };
        showProperties(movie);
        function showProperties(obj){
                for(let key in obj){ //************指數字
                        if(typeof obj[key] === 'string'){
                                console.log(key);
                        }
                }
        }

        //17.
        console.log("Exercise 8.");
        console.log(sumFun(10));
        function sumFun(limit){
                let sum = 0;
                for(let i = 1; i <= limit; i++){
                        if(i % 3 == 0 || i % 5 == 0)
                                sum = sum + i; // 也可以"sum += i"
                }
                return sum;
        }

        //18.
        console.log("Exercise 9.");
        const marks = [80, 80, 50];
        console.log(calculateGrade(marks));
        function calculateGrade(marks){
                let sum = 0
                for(let value of marks)
                        sum += value;
                let average = sum / marks.length;
                if (average < 60) return 'F'; 
                if (average < 70) return 'D'; 
                if (average < 80) return 'C';
                if (average < 90) return 'B';
                return 'A' 
        }

        //19.
        console.log("Exercise 10.");
        showStars(3);
        function showStars(rows){
                for(let row = 1; row <= rows; row++){
                        let pattern = '';
                        for(let i = 0; i < row; i++)
                                pattern += '*';
                        console.log(pattern);
                }
        }

        //20.
        console.log("Exercise 11.");
        showPrimes(20);
        function showPrimes(limit){
                for(let i = 2; i <= limit; i++){
                        for (let j = 2; j < i; j++){
                                if(i % j !== 0)
                                        console.log(i);
                                        break;
                        }

                }
        } 