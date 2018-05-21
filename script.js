  //google analytics tracking code
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80912818-4', 'auto');
  ga('send', 'pageview');

 function setCookie() {
    var d = new Date();
    var exdays = 3
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString()+";";
    var x = document.cookie.split(";");
    console.log("initate cookie loop")
    for(i=0;i<x.length;i++) {
    	if(x[i].indexOf("_gid") != -1) {
    		cid = x[i].split(".")[3]}
    	else {}
    }    		
    document.cookie = "_customerid=" + cid + ";" + expires + ";";

 };

function showTitle() {
           document.getElementById('header-file-loader').style.display="block";	
};

function slideTitle() {
       $('#header-file-loader').slideDown(1500);
};

function checkCookies() {
	var c = document.cookie;
	if(c.indexOf("customerid") != -1) {
	   setTimeout(showTitle,500);

        }
	else {
	   setTimeout(slideTitle,500);
	   setCookie();

	}
};

window.onload = function writePageTitleNavBar() {
    console.log('initiate head / foot load');
    $('#head').load('./webcom/header.htm');
    $('#footer').load('./webcom/footer.htm');
    checkCookies();
};

	
	





function hideText3() {
  $('#10million').hide(100)
  console.log('hide')
};
function displayText3() {
  $('#10million').show(500);
  console.log('display')
};
function hideText2() {
  $('#recipes-studio').hide(100)
  console.log('hide')
};
function displayText2() {
  $('#recipes-studio').show(500);
  console.log('display')
};
function hideText() {
  $('#scott').hide(100)
  console.log('hide')
};
function displayText() {
  $('#scott').show(500);
  console.log('display')
};
