var totalBill=0;
function generateBill()
{
    var unitS= document.bill.txtUnits.value;
    var loadS= document.bill.txtLoad.value;
    
    var unitB=isNaN(unitS);
    var loadB=isNaN(loadS);
    
    if(unitB==true)
        document.bill.txtUnits.style.backgroundColor="red";
    else
        document.bill.txtUnits.style.backgroundColor="white";
    
    if(loadB==true)
        document.bill.txtLoad.style.backgroundColor="red";
    else
        document.bill.txtLoad.style.backgroundColor="white";

    
    if(unitB== false && loadB== false)
        {
            totalBill=parseFloat(unitS)*10 + parseFloat(loadS)*100;
            document.bill.txtBill.value = totalBill;
            document.bill.btnGst.disabled=false;
        }
}
var gstAmount=0;
function generateGstAmount()
{
    gstAmount=(totalBill*18/100);
    document.bill.txtGst.value=gstAmount;
    document.bill.btnTotal.disabled=false;
}
function generateTotal()
{
    var total=totalBill + gstAmount;
    document.bill.txtTotal.value=total;
}
function generateNew()
{
    document.bill.txtUnits.value="";
    document.bill.txtLoad.value="";
    document.bill.txtBill.value="";
    document.bill.txtGst.value="";
    document.bill.txtTotal.value="";
    document.bill.btnGst.disabled=true;
    document.bill.btnTotal.disabled=true;


}
