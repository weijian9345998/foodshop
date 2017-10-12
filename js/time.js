function checktime(i){  
    if(i<10){  
        i="0"+i;  
    }  
    else{i=i;}  
    return i;  
}
function freshTime(){
	var endTime = new Date('2017/09/30');
	var nowTime = new Date();
	var leftTime = parseInt(endTime.getTime()-nowTime.getTime());
	var dm = 24*60*60*1000;
	var d =parseInt(leftTime/dm);
	var hm = 60*60*1000;
	var h = parseInt(leftTime/hm%24);
	var mm = 60*1000;
	var m = parseInt (leftTime/mm%60);
	var s = parseInt((leftTime/1000)%60);
	m = checktime(m);
	s = checktime(s);
	document.getElementById('hours').innerHTML = 5;//h;
	document.getElementById('minutes').innerHTML = 18;//m;
	document.getElementById('seconds').innerHTML = 18;//s;
}
var sh;
sh = setInterval('freshTime()', 1000);