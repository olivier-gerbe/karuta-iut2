//----------------------------------
var application_version = "1.0";
var application_date = "2016-04-29";
//----------------------------------
var appliname = 'karuta-iut2';
var karutaname = 'karuta-iut2'
var karuta_url = '../../../' + karutaname;
var bckname = '-iut2';
var serverBCK = "../../../karuta-backend"+bckname;
var serverBCK_API = "../../../karuta-backend"+bckname+"/rest/api";
var cas_url = "https://cas-uga.grenet.fr";
//----------------------------------
var elgg_url_base = 'elgg/';
var elgg_installed = false;
var elgg_refreshing = 240000; // 240 seconds
//----------------------------------
var languages = [];
languages [0] = 'fr';
languages [1] = 'en';
//languages [1] = 'fr';
//languages [2] = 'ja';
//----------------------------------
var NONMULTILANGCODE = 0;  // default language if non-multilingual
var LANGCODE = 0; //default value
var LANG = languages[LANGCODE]; //default value
//----------------------------------
var technical_support = ""; // email of technical support
var demo = false;
var karuta_create_account = false;
var audiovideohtml5 = true;

//--------- NAVBAR BRAND ------------------
var navbar_title = {};
navbar_title["fr"] = "<img style='margin-top:-4px;' src='"+karuta_url+"/karuta/img/karuta-navbar.jpg'/>";
navbar_title["en"] = "<img style='margin-top:-4px;' src='"+karuta_url+"/karuta/img/karuta-navbar.jpg'/>";
//-----------LOGIN PAGE -----------------------
var welcome1 = {};// Welcome title
	welcome1["fr"] = "<img style='border:10px solid white'  src='../img/logo-iut2.jpg'/>";
	welcome1["en"] = "<img style='border:10px solid white'  src='../img/logo-iut2.jpg'/>";
var welcome2 = {};       // Welcome sub-title
	welcome2["fr"] = "<img style='margin-top:-4px;height:20px;' src='../img/karuta-blanc.png'/> Bienvenue sur le site Karuta";
	welcome2["en"] = "<img style='margin-top:-4px;height:20px;' src='../img/karuta-blanc.png'/> Welcome on Karuta Website";
var welcome3 = {};       // Welcome paragraph
	welcome3["fr"] = "";
	welcome3["en"] = "";
//---------MAIN PAGE-------------------------
var welcome4 = {};			//  Welcome title
	welcome4["fr"] = "BIENVENUE DANS KARUTA 2.3";
	welcome4["en"] = "WELCOME TO KARUTA 2.3";
var welcome5 = {}; 			//  Welcome sub-title
	welcome5["fr"] = "IUT2 Grenoble";
	welcome5["en"] = "IUT2 Grenoble";
	var listinfo = {};       // Welcome text
	listinfo["fr"] = "";
	listinfo["en"] = "";
//--------- EMAIL LOGO -------------------------
var sendEmailPublicURL_logo = karuta_url+"/karuta/img/logofonbleu.jpg";

//-----------PUBLIC PAGE -----------------------
var welcome = {};// Welcome title
	welcome["fr"] = "<img class='img-responsive' src='../img/HEC_Montreal_blanc_Web_800.png'/>";
	welcome["en"] = "<img class='img-responsive' src='../img/HEC_Montreal_blanc_Web_800.png'/>";
//--------- PUBLIC EMAIL LOGO - MESSAGE -------
var url = window.location.href;
var serverURL = url.substring(0,url.indexOf(appliname)-1);
var g_sendEmailPublicURL_logo = serverURL+"/karuta/karuta/img/logofonbleu.jpg";
var g_sendEmailPublicURL_message ="&lt;img src='"+g_sendEmailPublicURL_logo+"' style='width:300px;margin-bottom:4px;margin-top:30px;'&gt;";
g_sendEmailPublicURL_message +=  "&lt;div style='margin:30px;border-radius:4px;padding:10px;border: 1px solid lightGrey;box-shadow: 3px 3px 3px #CCC'&gt;";
g_sendEmailPublicURL_message += "&lt;br/&gt;#firstname# #lastname# #want-sharing#";
g_sendEmailPublicURL_message += "&lt;div style='font-weight:bold;font-size:14pt;margin:30px;width:150px;'&gt;";
g_sendEmailPublicURL_message +="&lt;a href='#do not edit this#' style='text-decoration: none;color:black;padding:10px;padding-left:40px;padding-right:40px;border-radius:4px;background-color:lightgrey'&gt;";
g_sendEmailPublicURL_message += "#see#";
g_sendEmailPublicURL_message +="&lt;/a&gt;";
g_sendEmailPublicURL_message +="&lt;/div&gt;";
g_sendEmailPublicURL_message += "Karuta Team";
g_sendEmailPublicURL_message +="&lt;/div&gt;";
//----------------------------------------------
var specificmenus=true;
//------ BUBBLE MAP -------------------------------------
var bubble_installed = false;
//------ EUROPASS -------------------------------------
var europass_installed = true;
