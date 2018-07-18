function Validate()
{
	//Customer Name validation
	var x =document.forms["myForm"]["customername"].value;

    if(!(x.search(/[^a-zA-Z0-9]+/) === -1)) 
    {
    	alert("Invalid Customer Name");
    	return false;
    }

	if(x==null || x.length > 15 || x==" ")
	{	
		alert("Invalid User Name");
		return false;
	}
	


     //E-Mail Validation
    var e = document.forms["myForm"]["customeremailaddress"].value;
    var t = new RegExp("^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-z" + "A-Z]{2,7}$"); 
	if (t.test(e)) 
	{
   	 return true;
	} 
	else 
	{
    alert("Invalid Email Address");
	}
   



    //Pincode Validation
	var p = document.forms["myForm"]["customerpincode"].value;
	var q = p.toString();
	if(q.length != 6)
	{
		prompt("Invalid Pincode");
		return false;
    }

 }