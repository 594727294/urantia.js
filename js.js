var rand = Math.floor((Math.random() * 196) + 1);
var randlenght = rand.toString().length;
var paperNumber = "";
var paperTitle = "";
var paragraph ="";


//get papernumber

if(randlenght == 1){
	paperNumber = "00"+rand;
}else if(randlenght == 2){
	paperNumber = "0"+rand;
}else {
	paperNumber = rand;
}

//fetch document
$(function() {
	$('#content .document').load("src/p"+paperNumber+".htm");
	//$('#content .document').load("src/p"+paperNumber+".htm h3");
	//$('#content .document').load("src/p"+paperNumber+".htm a h4");
});


//random banner

$(document).ready(function(){
	$(".mainImg img").attr("src", "img/"+ getRandomImage());
});

function getRandomImage() {
  var images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.JPG",
  "5.png",
  "6.jpg",
  "7.JPG",
  "8.jpg",
  "9.JPG",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpeg",
  "15.png",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20t.png",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.gif",
  "29.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg"
  ];

  return images[Math.floor(Math.random() * images.length)];
}

// get paper data
$(function() {
	$('#content div h3').addClass("alfer");
});
paperTitle = $('.document h3').html();
//alert(paperTitle);



//$('.document a:first-child').addClass("paperNumber");
//$('.document').remove( "meta","link" );