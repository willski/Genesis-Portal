//<![CDATA[
var quote=new Array();
  quote[0]='This is quote number one';    /* add as many quotes as you like!*/
  quote[1]='This is quote number two';
  quote[2]='This is quote number three';
  quote[3]='This is quote number four';
  quote[4]='This is quote number five';
  quote[5]='This is quote number six';
  quote[6]='This is quote number seven';
  quote[7]='This is quote number eight';
  quote[8]='This is quote number nine';
  quote[9]='This is quote number ten';

var speed=2000;    /*this is the time in milliseconds adjust to suit*/
var q=0;

function showQuote() {

     document.getElementById("quotes").innerHTML=quote[q];
     q++;
if(q==quote.length) {
     q=0;
  }
}
setInterval('showQuote()',speed);
   
 //]]>