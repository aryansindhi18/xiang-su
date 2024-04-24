
function enable()
{
    var mobi=document.getElementById("chkMob");
var lapi=document.getElementById("chkLap");
var sh=document.getElementById("chkShoe");

    if(mobi.checked==true)
        {
            document.getElementById("txtMob").disabled=false;
            document.getElementById("txtMob").autoFocus;

        }
    else
        {
            document.getElementById("txtMob").disabled=true;
            document.getElementById("txtMob").value="";
                        document.getElementById("txtMob").style.backgroundColor="white";


        }
    if(lapi.checked==true)
        {
            document.getElementById("txtLap").disabled=false;
            document.getElementById("txtLap").autoFocus;

        }
     else
        {
            document.getElementById("txtLap").disabled=true;
            document.getElementById("txtLap").value="";
             document.getElementById("txtLap").style.backgroundColor="white";

        }
    if(sh.checked==true)
        {
            document.getElementById("txtShoe").disabled=false;
            document.getElementById("txtShoe").autoFocus;

        }
     else
        {
            document.getElementById("txtShoe").disabled=true;
                        document.getElementById("txtShoe").value="";
             document.getElementById("txtShoe").style.backgroundColor="white";
        }
}
var total=0;

function generateBill()
{
var mobi1=document.getElementById("txtMob");
var lapi1=document.getElementById("txtLap");
var sh1=document.getElementById("txtShoe");
var mobi=document.getElementById("chkMob");
var lapi=document.getElementById("chkLap");
var sh=document.getElementById("chkShoe"); 
 
   

    
    if(isNaN(mobi1.value)==true || (mobi1.value=="") && (mobi.checked==true))
        {

		mobi1.style.backgroundColor="red";
             
        }
	else
		mobi1.style.backgroundColor="white";
	
	if(isNaN(lapi1.value)==true || (lapi1.value=="") && (lapi.checked==true))
        {
		lapi1.style.backgroundColor="red";
            
        }
	else
		lapi1.style.backgroundColor="white";

	if(isNaN(sh1.value)==true || (sh1.value=="") && (sh.checked==true))
		{
        sh1.style.backgroundColor="red";
            
        }
	else
		sh1.style.backgroundColor="white";
    
    
    
    
    
   if((isNaN(mobi1.value)==false && isNaN(lapi1.value)==false && isNaN(sh1.value)==false) && (mobi1.value.length!=0) && (lapi1.value.length!=0) && (sh1.value.length!=0))
       {
      
       document.getElementById("txtMobile").value=parseFloat((mobi1.value)*(mobi.value));
     document.getElementById("txtLaptop").value=parseFloat((lapi1.value)*(lapi.value));
     document.getElementById("txtShoes").value=parseFloat((sh1.value)*(sh.value));
    total=parseFloat((mobi1.value)*(mobi.value)) + parseFloat((lapi1.value)*(lapi.value)) + parseFloat((sh1.value)*(sh.value)) ;
    
    document.getElementById("txtTotal").value=total;
        }
    else if((mobi1.value!="" && lapi1.value=="" && sh1.value=="" ))
        {
             document.getElementById("txtMobile").value=parseFloat((mobi1.value)*(mobi.value));
     document.getElementById("txtLaptop").value=parseFloat((lapi1.value)*(lapi.value));
     document.getElementById("txtShoes").value=parseFloat((sh1.value)*(sh.value));
    total=parseFloat((mobi1.value)*(mobi.value)) + parseFloat((lapi1.value)*(lapi.value)) + parseFloat((sh1.value)*(sh.value)) ;
                document.getElementById("txtTotal").value=total;

        }
    else if((lapi1.value!="" && mobi1.value=="" && sh1.value==""))
        {
            document.getElementById("txtMobile").value=parseFloat((mobi1.value)*(mobi.value));
     document.getElementById("txtLaptop").value=parseFloat((lapi1.value)*(lapi.value));
     document.getElementById("txtShoes").value=parseFloat((sh1.value)*(sh.value));
    total=parseFloat((mobi1.value)*(mobi.value)) + parseFloat((lapi1.value)*(lapi.value)) + parseFloat((sh1.value)*(sh.value)) ;
                document.getElementById("txtTotal").value=total;

        }
    else if((sh1.value!="" && lapi1.value=="" && mobi1.value==""))
        {
            document.getElementById("txtMobile").value=parseFloat((mobi1.value)*(mobi.value));
     document.getElementById("txtLaptop").value=parseFloat((lapi1.value)*(lapi.value));
     document.getElementById("txtShoes").value=parseFloat((sh1.value)*(sh.value));
    total=parseFloat((mobi1.value)*(mobi.value)) + parseFloat((lapi1.value)*(lapi.value)) + parseFloat((sh1.value)*(sh.value)) ;
                document.getElementById("txtTotal").value=total;

        }
    else if(((mobi1.value.length==0) ) && ((lapi1.value.length==0) ) && ((sh1.value.length==0)))
        {
             document.getElementById("txtMobile").value="";
            document.getElementById("txtLaptop").value="";
            document.getElementById("txtShoes").value="";
            document.getElementById("txtTotal").value="";
        }
    else if(((isNaN(mobi1.value)==false) && (isNaN(lapi1.value)==false)) || ((isNaN(lapi1.value)==false) && (isNaN(sh1.value)==false)) || ((isNaN(sh1.value)==false) && (isNaN(mobi1.value)==false)))
        {
            document.getElementById("txtMobile").value=parseFloat((mobi1.value)*(mobi.value));
     document.getElementById("txtLaptop").value=parseFloat((lapi1.value)*(lapi.value));
     document.getElementById("txtShoes").value=parseFloat((sh1.value)*(sh.value));
    total=parseFloat((mobi1.value)*(mobi.value)) + parseFloat((lapi1.value)*(lapi.value)) + parseFloat((sh1.value)*(sh.value)) ;
                document.getElementById("txtTotal").value=total; 
        }
    else if((isNaN(mobi1.value)==true) && (isNaN(lapi1.value)==false) && (isNaN(sh1.value)==false))
        {
            document.getElementById("txtMobile").value="";
            document.getElementById("txtLaptop").value="";
            document.getElementById("txtShoes").value="";
            document.getElementById("txtTotal").value="";
        }
    else
        {
            document.getElementById("txtMobile").value="";
            document.getElementById("txtLaptop").value="";
            document.getElementById("txtShoes").value="";
            document.getElementById("txtTotal").value="";

        }
}

function discount()
{
        var rad1=document.getElementById("radTen");
        var rad2=document.getElementById("radTwen");
    if(rad1.checked==true)
        {
            document.getElementById("txtDis").value=total*10/100;
            document.getElementById("txtNetBill").value=total - total*10/100;

        }
    if(rad2.checked==true)
        {
            document.getElementById("txtDis").value=total*20/100;
            document.getElementById("txtNetBill").value=total - total*20/100;


        }

}