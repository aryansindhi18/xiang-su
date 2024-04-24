var index = 0;

function getItem() {
    var item = document.getElementById("items");
    index = item.selectedIndex;
    var books = document.getElementById("books");

    var price = document.getElementById("price");
    //cityAry.innerHTML="";
    for (i = price.length - 1; i >= 0; i--) {
        price.remove(i);
    }
    for (i = books.length - 1; i >= 0; i--) {
        books.remove(i);
    }

    if (index == 1) {
        addItem1();
    } else if (index == 2) {
        addItem2();
    } else if (index == 3) {
        addItem3();
    } else {}
}

function addItem1() {
    var books = document.getElementById("books");

    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");

    var text1 = "Real Java";
    option1.value = text1;
    option1.text = text1;

    books.append(option1);

    var text2 = "Effective Java";
    option2.value = text2;
    option2.text = text2;

    books.append(option2);

    var text3 = "Thinking in Java";
    option3.value = text3;
    option3.text = text3;

    books.append(option3);

    var text4 = "Core Java";
    option4.value = text4;
    option4.text = text4;

    books.append(option4);
    var price = document.getElementById("price");

    var option5 = document.createElement("option");
    var option6 = document.createElement("option");
    var option7 = document.createElement("option");
    var option8 = document.createElement("option");

    var text5 = "320";
    option5.value = text5;
    option5.text = text5;

    price.append(option5);

    var text6 = "400";
    option6.value = text6;
    option6.text = text6;

    price.append(option6);

    var text7 = "200";
    option7.value = text7;
    option7.text = text7;

    price.append(option7);

    var text8 = "500";
    option8.value = text8;
    option8.text = text8;

    price.append(option8);

}
var flag = 0;

function copyBook() {
    var book = document.getElementById("books");
    var index = book.selectedIndex;
    var text = book.value;

    if (flag == 0) {
        var option = document.createElement("option");
        option.value = text;
        option.text = text;
        fav.append(option);
        var favPrice = document.getElementById("price");
        var text1 = favPrice.options[book.selectedIndex].value;
        var favPrice1 = document.getElementById("price1");

        var option1 = document.createElement("option");
        option1.value = text1;
        option1.text = text1;
        favPrice1.append(option1);
        flag=1;
    } else {
        var jasus=0;
        for (var j = 0; j < fav.length; j++) 
        {
            if (text == fav.options[j].value) {
                jasus=1;
                break;
            } else {}
        }
        if(jasus==0)
            {
                var option = document.createElement("option");
                option.value = text;
                option.text = text;
                fav.append(option);
                var favPrice = document.getElementById("price");
                var text1 = favPrice.options[book.selectedIndex].value;
                var favPrice1 = document.getElementById("price1");

                var option1 = document.createElement("option");
                option1.value = text1;
                option1.text = text1;
                favPrice1.append(option1);
            }
        else
            {}
    }



}

function remove() {
    var fav = document.getElementById("fav");
    var favprice = document.getElementById("price1");
    favprice.remove(fav.selectedIndex);

    fav.remove(fav.selectedIndex);
}

function addItem2() {
    var books = document.getElementById("books");

    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");

    var text1 = "Let Us C";
    option1.value = text1;
    option1.text = text1;

    books.append(option1);

    var text2 = "C++ Primer";
    option2.value = text2;
    option2.text = text2;

    books.append(option2);

    var text3 = "Effective C++";
    option3.value = text3;
    option3.text = text3;

    books.append(option3);

    var text4 = "A Tour of C++";
    option4.value = text4;
    option4.text = text4;

    books.append(option4);
    var price = document.getElementById("price");

    var option5 = document.createElement("option");
    var option6 = document.createElement("option");
    var option7 = document.createElement("option");
    var option8 = document.createElement("option");

    var text5 = "450";
    option5.value = text5;
    option5.text = text5;

    price.append(option5);

    var text6 = "480";
    option6.value = text6;
    option6.text = text6;

    price.append(option6);

    var text7 = "245";
    option7.value = text7;
    option7.text = text7;

    price.append(option7);

    var text8 = "699";
    option8.value = text8;
    option8.text = text8;

    price.append(option8);
}

function addItem3() {
    var books = document.getElementById("books");

    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    var option3 = document.createElement("option");
    var option4 = document.createElement("option");

    var text1 = "HTML & CSS";
    option1.value = text1;
    option1.text = text1;

    books.append(option1);

    var text2 = "Professional JavaScript";
    option2.value = text2;
    option2.text = text2;

    books.append(option2);

    var text3 = "Responsive Web Design";
    option3.value = text3;
    option3.text = text3;

    books.append(option3);

    var text4 = "Secrets of JavaScript";
    option4.value = text4;
    option4.text = text4;

    books.append(option4);
    var price = document.getElementById("price");

    var option5 = document.createElement("option");
    var option6 = document.createElement("option");
    var option7 = document.createElement("option");
    var option8 = document.createElement("option");

    var text5 = "810";
    option5.value = text5;
    option5.text = text5;

    price.append(option5);

    var text6 = "459";
    option6.value = text6;
    option6.text = text6;

    price.append(option6);

    var text7 = "780";
    option7.value = text7;
    option7.text = text7;

    price.append(option7);

    var text8 = "200";
    option8.value = text8;
    option8.text = text8;

    price.append(option8);
}
