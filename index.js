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


        /*//Control Flow
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
        } */


        /*//Objects
        //15.
        console.log("Exercise 1.");
        let address = {
                street: 'a',
                city: 'b',
                zipCode: 'c'
        }

        function showAddress(address){
                for (let key in address)
                        console.log(key, address[key]);
        }
        showAddress(address);

        //16.
        console.log("Exercise 2.");
        let address2 = createAddress('忠孝東路三段','台北市','1號');
        let address3 = new Address('忠孝東路三段','台北市','1號');
        console.log(address2);
        console.log(address3);
        function createAddress(street, city, zipCode){
                return{
                        street,
                        city, 
                        zipCode
                }
        }
        function Address(street, city, zipCode){
                this.street = street;
                this.city = city;
                this.zipCode = zipCode;
        }

        //17.
        console.log("Exercise 3.");
        let address01 = new Address('a', 'b', 'c');
        let address02 = new Address('a', 'b', 'c');
        console.log(areEqual(address01,address02));
        console.log(areSame(address01,address02));
        function areEqual(address1, address2){
                return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
        }
        function areSame(address1, address2){
                return address1 == address2;
        }

        //18.
        console.log("Exercise 4.");
        let post = {
                title: 'a',
                body: 'b',
                author: 'c',
                views: 10,
                comment:[
                        { author: 'a', body: 'b' },
                        { author: 'c', body: 'd' },
                ],
                isLive: true,
        };
        console.log(post);

        //19.
        console.log("Exercise 5.");
        function Post(title, body, author){
                this.title = title,
                this.body = body,
                this.author = author,
                this.views = 0,
                this.comment = [];
                this.isLive = false;
        }
        let post00 = new Post('a','b','c');
        console.log(post00);

        //20.
        console.log("Exercise 6.");
        let priseRange = [
                {label : '$', tooltip: 'Inexpensive', minima : 0, maxima : 10},
                {label : '$$', tooltip: 'Moderate', minima : 11, maxima : 20},
                {label : '$$$', tooltip: 'Expensive', minima : 21, maxima : 50},
        
        ];
        console.log(priseRange)*/

        //Array
        //17.
        console.log("Exercise 1.");
        const numbers = arrayFromRange(1,4);
        console.log(numbers);
        function arrayFromRange(min, max){
                const output = [];
                for(let i = min; i <= max; i++){
                        output.push(i);        
                }
                return output;
        };
        //18.
        console.log("Exercise 2.");
        console.log(includes(numbers, 5));
        function includes(array, searchElement){ // this function works like "numbers.includes(1)".
                for(let element of array){
                        if(element === searchElement)
                                return true; 
                }
                return false;
        }
        //19.
        console.log("Exercise 3.");
        console.log(except(numbers, [1,2]));
        function except(array, excluded){
                const output = [];
                for(let element of array){
                        if(!excluded.includes(element))
                                output.push(element); 
                }
                return output;
        }
        //20.
        console.log("Exercise 4.");
        console.log(move(numbers, 1, 2));
        /*function move(array, index, offdet){
                const output = [];
                for(let which in array){
                        console.log(which);
                        //console.log(index)
                        if(which != index)
                                output.push(array[which]); 
                }
                return output;
        }*/
        function move(array, index, offset){
                const position = index + offset;
                if(position >= array.length){
                        console.error('數字不合理。');
                        return;
                }
                const output = [...array];
                const element = output.splice(index,1)[0];
                console.log(element);
                output.splice(position, 0, element); 
                return output;
        }
        //21.
        console.log("Exercise 5.");
        console.log(countOccurrences(numbers, 1));
        function countOccurrences(array, searchElement){
                // let nums = 0;
                // for(let element of array){
                //         if(element === searchElement)
                //                 nums++; 
                // }
                // return nums;
                /*also:*/
                return array.reduce((accumulator, current) =>{
                        const occurrence = (current === searchElement) ? 1 : 0 ;
                        console.log(accumulator, current, searchElement)
                        return accumulator + occurrence;
                }, 0);
                
        }
        //22.
        console.log("Exercise 6.");
        console.log(getMax([1, 5, 99, 10]));
        function getMax(array){
                if(array.length ===0) 
                        return undefined;
                let max = array[0];
                for(let element of array){
                        if(element > max)
                                max = element; 
                }
                return max;
        }
        console.log(getMax2([1, 5, 99, 10]));
        function getMax2(array){
                return array.reduce((a, b) => (a > b) ? a : b);
        }
        //23.
        console.log("Exercise 7.");
        const movies = [
                { title: 'a', year: 2018, rating: 4.5},               
                { title: 'b', year: 2018, rating: 4.7},               
                { title: 'c', year: 2018, rating: 3.0},               
                { title: 'd', year: 2017, rating: 4.5},               
        ]
        /*console.log(searchMovie(movies, 2018));
        function searchMovie(array, year){
                let results = [];
                for(let element of array){
                        if (element.year == 2018 && element.rating >=4)
                                results.push(element);
                }
        }*/
        const titles = movies
                .filter(m => m.year === 2018 && m.rating >= 4)
                .sort((a,b) => a.rating - b.rating)
                .reverse()
                .map(m => m.title)
        console.log(titles);
        //這個章節學到了很多對於array資料處理的語法，我以前比較不熟悉的像是split(分割單一資料),join(結合為一資料),sort(排序分類資料),reverse(顛倒排序資料),filter(過濾資料),map(統一編輯各資料),reduce(對所有資料做計算)，感覺未來都有機會用到。