//number은 정수 실수 포함 64bit 활용

var height=prompt("키를 입력해 주세요.");
console.log(height, typeof(height)); //변수 타입이 string 나온다. 이유:사용자로부터 받은 문자열이기 때문

var height_int = parseInt(height);
console.log(height_int, typeof(height_int)); //int면 소수점 생략함

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));