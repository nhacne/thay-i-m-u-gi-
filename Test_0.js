// Truy cập phần tử 'greeting'
var greetingElement = document.getElementById('greeting');
// Gán giá trị rỗng cho phần tử 'greeting'
var greeting = '';
// Gán giá trị rỗng cho phần tử 'className'
var className = '';
// Gán giá trị thời gian hiện tại cho phần tử 'currentTime'
var currentTime = new Date ();
// Gán giá trị giờ hiện tại cho phần tử 'currentHour'
var currentHour = currentTime.getHours();
// Thiết lập điều kiện 
if (currentHour < 12) {
    greeting = 'Chào buổi sáng !';
    className = 'Good Morning !';
} else if (currentHour < 18){
    greeting = 'Chào buổi chiều !';
    className = 'Good Afternoon !';
} else {
    greeting = 'Chào buổi tối !';
    className = 'Good Evening !';
}
// Hoán đổi giá trị 2 phần tử 
greetingElement.textContent = greeting;
greetingElement.className = className;
// Truy cập phần tử 'time'
var elTime = document.getElementById('time');
elTime.textContent = 'Time : ${currentTime}' ;
elTime.className = 'time';



