function getWeatherReport()
{
    var request=new XMLHttpRequest();
    var apikey='bbd77659343acf82252abf5739419ea3';
    var city=document.getElementById("city").value;
    console.log(city);
    //Celsius --->${city}&units=metric
  var url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;
    
    console.log(url);
    request.open('GET',url,true);
    request.onload=function() {

        var res=JSON.parse(this.response);
        table=document.createElement("table");
        table.border="1";
        table.width="100%";
        table.align="center";
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH4=row.insertCell(-1)
        cellH1.innerHTML="DATE";
        cellH2.innerHTML="TIME"
        cellH3.innerHTML="MAX_TEMP(°C)";
        cellH4.innerHTML="MIN_TEMP(°C)"
        res.list.forEach((day) => 
        {
            row1=table.insertRow(-1)
            cell1=row1.insertCell(-1)
            cell2=row1.insertCell(-1)
            cell3=row1.insertCell(-1)
            cell4=row1.insertCell(-1)
            var res=day.dt_txt.split(" ");
            cell1.innerHTML=res[0];
            cell2.innerHTML=res[1];
            cell3.innerHTML=day.main.temp_max;
            cell4.innerHTML=day.main.temp_min;
            console.log(day)
        })
        document.getElementById("temp").append(table);
        document.getElementById("cname").innerHTML = "Weather and temperature @"+city;
    }
    request.send();
}