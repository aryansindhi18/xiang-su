var x = 1;

function addTextBox() {
    var d = document.getElementById('new1');
    var input = document.createElement("input");
    input.name="n";
    d.append(input);

}
function transfer()
{
   var hey = document.getElementById("hey");
             var index = hey.selectedIndex;
             var text = hey.value;
    var input1= document.createElement("input");
    input1.name="n";

    var d2 = document.getElementById("hi2+");
    d2.append(input1);
    input1.value=text;
}
function showAll() {
    var texts = document.getElementsByName("n");
        var d = document.getElementById('new2');
        var hey=document.getElementById('hey');

    hey.style.height="100px";

    hey.size=texts.length;
     
    for (var i = 0; i < texts.length; i++) {
         var n = texts[i].value;
        var option = document.createElement("option");
        option.value=n;
        option.text=n;
        hey.append(option);
        }
}
