
var now = new Date();
var Christmas = new Date("December 25, " + now.getFullYear());
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[now.getDay()];
var ChristmasDay = days[Christmas.getDay()];
var date = now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+'  ' + dayName;
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay)
var daysLeft = 359 - day;
document.getElementById("date").innerHTML = "Today: " + date;
document.getElementById("daysLeft").innerHTML = "Days left: " + daysLeft + "  " + ChristmasDay;
document.getElementById("ChristmasDate").innerHTML = "Christmas: " + Christmas.getDate() +"/"+(Christmas.getMonth()+1)+"/"+Christmas.getFullYear()+"  " + ChristmasDay;
