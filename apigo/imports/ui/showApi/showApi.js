import { Template } from 'meteor/templating';

import './showApi.html'
import './tutorialHeader.html'
import './introduction.html'
import './menu.html'

Template.showApi.onRendered(function() {
	var LANG_LIST = $("#LANG_LIST").text().split(" ");
	
    $(".lang-btn-group a").click(function(){
		//<a href='#' class="btn btn-primary" id="nodeJS">Node.js</a>
		//<a href='#' class="btn btn-default" id="java">Java</a>
		$(this).attr("class", "btn btn-primary");
		$(this).siblings().attr("class", "btn btn-default");
        var lang_clicked = $(this).attr('id');
		for (i=0; i<LANG_LIST.length; i++) {
			var lang = LANG_LIST[i];
			if (lang_clicked == lang) {
				$("." + lang).show();
			} else {
				$("." + lang).hide();
			}
		}
    });
	
}); 