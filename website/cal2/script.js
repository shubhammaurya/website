var n1,n2,n3,op;
function clac(id)
{
	var field=document.getElementById("field1");
	
	field.value="";

	if(op==undefined && id!='+'&&id!='/'&&id!='*'&&id!='-'&&id!='clr'&&id!="=") 
	{
		field.value+=id;
		n1=field.value;
	}
	
	if(id=='+'&&id=='/'&&id=='*'&&id=='-'&&id=='clr'&&id!="=")
	{
	// if(id=="+"&&id=="/"&&id=="-"&&id=="*"&&id==".")
	op=id;	
	field.value="";
	}

	if(op!=undefined&&id!='+'&&id!='/'&&id!='*'&&id!='-'&&id!='clr'&&id!="=")
		{
			field.value+=id;
			n2=field.value;
		}
					if(id=="=")
					{switch(op)
    					{	
        					case '+':field.value=parseFloat(n1) + parseFloat(n2); break;
    					    case '*':field.value=parseFloat(n1) * parseFloat(n2); break;
        					case '/':field.value=parseFloat(n1) / parseFloat(n2); break;
        					case '-':field.value=parseFloat(n1) - parseFloat(n2); break;
							}
					}
	console.log(n1+" "+op+" "+n2);
		

	if(id=="clr")
	{
		field.value="";
		n1=n2=op=undefined;

	}


}









// function dec(id) {
//     // Select the calculator's display
//     var display = document.getElementById("dec");

//     // Loop through the current number to make sure there isn't already a decimal
//     for (i = 0; i < display.value.length; i++)
//         if (display.value.charAt(i) == '.') {
//             // If there is, do nothing
//             return;
//         }
//     // If there isn't add a decimal to the end of the displayed number
//         display.value += id;
// }