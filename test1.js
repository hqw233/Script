/* const a = {"a":4,"b":6}
delete a.b
console.log(a) */
let articles = ["https://focus.youth.cn/article/s?signature=89NvAVZQolPrzM0a3XZXW2snLMlkTLgKql01gXDkJEqdw5xObL&uid=54087945&phone_code=f683e600f3360e0b5434a2bb927bbe43&scid=39971857&time=1631103154&app_version=2.0.2&sign=16c0c9fd4f1343e36e0f4282d115c47d",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LKNrVZtNBwEyt8pQB504EMLO9lwG2zQJeB&uid=54087945&phone_code=f683e600f3360e0b5434a2bb927bbe43&scid=40041778&time=1631105851&app_version=2.0.2&sign=47ecf5c22220e67978e4e8a03e64b87d",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLar2mbZeh9GM6VTNBlPJZagRQY9OZjA5eJpl&uid=54087945&phone_code=f683e600f3360e0b5434a2bb927bbe43&scid=40037032&time=1631105886&app_version=2.0.2&sign=0ce07792c33a3a38e2fe444f04d5465e"
]
let md5 = require('md5-node');
let encodearticles;
//获取当前时间13位时间戳
nowTime = new Date().getTime();
console.log(nowTime)
//MD5加密时间戳
wxck = md5(nowTime);
console.log(md5(1631991052255411))
console.log(wxck)
encodearticles = encodeURIComponent(articles[1]);
//console.log(encodearticles)
let url = "%7B%22classify%22%3A%220%22%2C%22artimg%22%3A%22http%3A%2F%2Fp5.toutiaoimg.com%2Fimg%2Fpgc-image%2FSjMg4Oe1Cxy8Nu%7Etplv-tt-cs0%3A300%3A196.webp%22%2C%22pfid%22%3A%22ttjs%22%2C%22rec_requestid%22%3A%221631991052255411%22%2C%22lt%22%3A%22list%22%2C%22source%22%3A%22yc%22%2C%22selftid%22%3A%2236%22%2C%22title%22%3A%22%E5%9B%BE%E8%A7%A3%E4%B8%A8%E6%96%B0%E5%8A%A8%E8%83%BD%E5%8A%A0%E5%BF%AB%E6%88%90%E9%95%BF%EF%BC%811%E8%87%B38%E6%9C%88%E6%B2%B3%E5%8C%97%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E7%A8%B3%E6%AD%A5%E6%81%A2%E5%A4%8D%22%2C%22scene%22%3A%22taskshare%22%2C%22itemtype%22%3A%220%22%2C%22top%22%3A%220%22%2C%22typeid%22%3A%2236%22%2C%22profit%22%3A%220%22%7D"
let eurl = "%7B%22classify%22%3A%220%22%2C%22artimg%22%3A%22http%3A%2F%2Fp6.toutiaoimg.com%2Fimg%2Fpgc-image%2Fc012198fb18f422fa52c85ff7ebf3905%7Etplv-tt-cs0%3A300%3A196.webp%22%2C%22pfid%22%3A%22ttjs%22%2C%22rec_requestid%22%3A%221632062668973598%22%2C%22lt%22%3A%22list%22%2C%22selftid%22%3A%2236%22%2C%22source%22%3A%22yc%22%2C%22title%22%3A%22%E5%86%85%E9%BB%84%E5%8E%BF%E5%B8%82%E5%9C%BA%E7%9B%91%E7%AE%A1%E5%B1%80%E5%A4%9A%E4%B8%BE%E6%8E%AA%E5%BC%80%E5%B1%95%E5%8F%8C%E8%8A%82%E5%89%8D%E5%90%84%E9%A1%B9%E5%AE%89%E5%85%A8%E5%A4%A7%E6%A3%80%E6%9F%A5%22%2C%22scene%22%3A%22taskshare%22%2C%22itemtype%22%3A%220%22%2C%22top%22%3A%220%22%2C%22typeid%22%3A%2236%22%2C%22profit%22%3A%22%22%7D"
deurl = decodeURIComponent(url)
console.log(deurl)
dedeurl=decodeURIComponent(eurl)
console.log(dedeurl)
//13位时间戳转化为时间
function timestampToTime(timestamp) {
    var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + "-";
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + " ";
    H = date.getHours() + ":";
    MIN = date.getMinutes() + ":";
    S = date.getSeconds();
    return Y+M+D+H+MIN+S;}


console.log(timestampToTime(1632031768936))
//console.log(timestampToTime(1631991158))
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
    case 1: 
     return parseInt(Math.random()*minNum+1); 
    break; 
    case 2: 
     return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
    break; 
    default: 
     return 0; 
    break; 
    } 
   } 
   for(let i = 0 ;i< 5 ;i++){
   let time = randomNum(30000,40000)
   randomtime = time/1000
   console.log(randomtime)}
   