/*****************************************/
// Name: Javascript Textarea HTML Editor
// Version: 1.3
// Author: Balakrishnan
// Last Modified Date: 25/Jan/2009
// License: Free
// URL: http://www.corpocrat.com
/******************************************/
var textarea;
var content;
function edToolbar(obj) {
	document.write("<img class=\"button\" src=\"/assets/editor_buttons/bold.png\" name=\"btnBold\" title=\"Bold\" onClick=\"doAddTags('*','*','" + obj + "')\">");
    document.write("<img class=\"button\" src=\"/assets/editor_buttons/italic.png\" name=\"btnItalic\" title=\"Italic\" onClick=\"doAddTags('_','_','" + obj + "')\">");
	document.write("<img class=\"button\" src=\"/assets/editor_buttons/underline.png\" name=\"btnUnderline\" title=\"Underline\" onClick=\"doAddTags('+','+','" + obj + "')\">");
	document.write("<img class=\"button\" src=\"/assets/editor_buttons/h1.png\" name=\"btnHead\" title=\"Head1\" onClick=\"doAddTags('[h]','[/h]','" + obj + "')\">");
	document.write("<img class=\"button\" src=\"/assets/editor_buttons/ordered.png\" name=\"btnList\" title=\"Unordered List\" onClick=\"doList('<ul>','</ul>','" + obj + "')\">");
	document.write("<img class=\"button\" src=\"/assets/editor_buttons/link.png\" name=\"btnLink\" title=\"Insert Link\" onClick=\"doAddTags('[link: link_description]','[/link]','" + obj + "')\">");
	document.write("<img class=\"button\" src=\"/assets/editor_buttons/image.png\" name=\"btnPicture\" title=\"Insert Picture\" onClick=\"doAddTags('[img]','[/img]','" + obj + "')\">");
	document.write("<br>");	
		}


function doAddTags(tag1,tag2,obj)
{
textarea = document.getElementById(obj);
	// Code for IE
		if (document.selection) 
			{
				textarea.focus();
				var sel = document.selection.createRange();
				//alert(sel.text);
				sel.text = tag1 + sel.text + tag2;
			}
   else 
    {  // Code for Mozilla Firefox
		var len = textarea.value.length;
	    var start = textarea.selectionStart;
		var end = textarea.selectionEnd;
		
		var scrollTop = textarea.scrollTop;
		var scrollLeft = textarea.scrollLeft;
		
        var sel = textarea.value.substring(start, end);
	    //alert(sel);
		var rep = tag1 + sel + tag2;
        textarea.value =  textarea.value.substring(0,start) + rep + textarea.value.substring(end,len);
		
		textarea.scrollTop = scrollTop;
		textarea.scrollLeft = scrollLeft;
	}
}

function doList(tag1,tag2,obj){
textarea = document.getElementById(obj);

// Code for IE
		if (document.selection) 
			{
				textarea.focus();
				var sel = document.selection.createRange();
				var list = sel.text.split('\n');
		
				for(i=0;i<list.length;i++) 
				{
				list[i] = '* ' + list[i];
				}
				sel.text = list.join("\n");
				
			} else
			// Code for Firefox
			{

		var len = textarea.value.length;
	    var start = textarea.selectionStart;
		var end = textarea.selectionEnd;
		var i;
		
		var scrollTop = textarea.scrollTop;
		var scrollLeft = textarea.scrollLeft;
		
        var sel = textarea.value.substring(start, end);
	   
		var list = sel.split('\n');
		
		for(i=0;i<list.length;i++) 
		{
		list[i] = '* ' + list[i];
		}
		
		var rep = list.join("\n");
		textarea.value =  textarea.value.substring(0,start) + rep + textarea.value.substring(end,len);
		
		textarea.scrollTop = scrollTop;
		textarea.scrollLeft = scrollLeft;
 }
}