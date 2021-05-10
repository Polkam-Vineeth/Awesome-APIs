function getRepository()
{
    var request=new XMLHttpRequest();
    var uname=document.getElementById("uname").value;
    var url= `https://api.github.com/users/${uname}/repos`;
    request.open('GET',url,true);
    request.onload=function()
    {
        var res=JSON.parse(this.response);
        var temp=document.getElementById("temp");
        temp.innerHTML="";
        table=document.createElement("table");
        table.border="1";
        table.width="100%";
        table.align="center";
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH4=row.insertCell(-1)
        cellH1.innerHTML="User Name";
        cellH2.innerHTML="Repository ID"
        cellH3.innerHTML="Repository Name";
        cellH4.innerHTML="Description";
        res.forEach((ele) => 
        {
                row1=table.insertRow(-1)
                cell1=row1.insertCell(-1)
                cell2=row1.insertCell(-1)
                cell3=row1.insertCell(-1)
                cell4=row1.insertCell(-1)
                cell1.innerHTML=ele.owner.login;
                cell2.innerHTML=ele.id;
                cell3.innerHTML=ele.name;
                cell4.innerHTML=ele.description;
                console.log(ele)
        })
        temp.append(table);
    }
    request.send();
}