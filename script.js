function cloks(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    let flag = "AM"

    if(h === 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        flag = "PM";
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    };

    
    
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s +":" + flag;;
    setTimeout(cloks, 1000);
}

cloks();