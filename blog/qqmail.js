// JavaScript Document
if(typeof(nId)!=null)
{
document.write(
[
"<style>",
".form_qqmail{margin:0 !important;}",
".rsstxt{float:left; width: 70%;}",
".rssbutton{float:left; margin-left:10px;}",
"</style>",
"<div class=\"rssbook ",
" \" style=\"width:\"20px"," \">",
"<div class=\"mailInput\">",
"<form action=\"http://list.qq.com/cgi-bin/qf_compose_send\" target='_blank' class='form_qqmail' method='post'>",
"<input type=\"hidden\" name=\"t\" value=\"qf_booked_feedback\">",
"<input type=\"hidden\" name=\"id\" value=\"",nId,"\">",
"<input  id=\"to\" name=\"to\" type=\"text\" class=\"rsstxt\" value=\"\"/>",
"<div class=\"rssbutton\"><input type=\"submit\" value=\"订阅\"></div>",
"</form>",
"</div></div>"].join(""));
}
else
{
alert("nId empty");
}