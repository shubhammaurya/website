function clac(elementId){
    var x=elementId;
      var d=document.getElementById("field1");
      var e=document.getElementById("field2");
      var f=document.getElementById("field3");
      var g=document.getElementById("field4");
    
    

        if(e.value!==""){
      if(x!="/"&&x!="*"&&x!="-"&&x!="+"&&x!=".")
    {
    //     if(x=="clr")
    
    // d.value="";
    // else 
    d.value=d.value+""+x;
    }}


    // if (x=="clr") e.value=""; 
   if(x!="1"&&x!="2"&&x!="3"&&x!="4"&&
    x!="5"&& x!="6"&& x!="7"&& x!="8"&& x!="9"&&x!="0"&&x!="=")
    
    e.value=x;
    
    

    if(e.value!=""&&d.value!="")
    {if(x!="/"&&x!="*"&&x!="-"&&x!="+"&&x!="."&&x!="=")
    {
    //     if(x=="clr")
    
    // f.value="";
    // else 
    f.value=f.value+""+x;
    }}
 
    
    switch(e.value)
    {
        case '+':g.value=+d.value + +f.value; break;
        case '*':g.value=+d.value * +f.value; break;
        case '/':g.value=+d.value / +f.value; break;
        case '-':g.value=+d.value - +f.value; break;
        
        

    }

    if(x=="clr"){
        d.value="";
        e.value="";
        f.value="";
        g.value="";
    }

 }






