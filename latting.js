let req= new XMLHttpRequest;
req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=1264527&appid=2aeb665966fc5056307e3a035744f63c', true);
req.send();
req.onload=function(){
    let output=JSON.parse(this.response);
    console.log(output);
}


let req1=new XMLHttpRequest;

req1.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=2aeb665966fc5056307e3a035744f63c', true);
 
req1.send();
req1.onload=function(){
    let output2=JSON.parse(this.response);
    console.log(output2);
}


let req2=new XMLHttpRequest;

req2.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=2aeb665966fc5056307e3a035744f63c', true);
req2.send();
req2.onload=function(){
    let output3=JSON.parse(this.response);
    console.log(output3);
}