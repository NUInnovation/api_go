$(document).ready(function(){
    $(".lang-btn-group").click(function(){
		//<a href='#' class="btn btn-primary" id="nodeJS">Node.js</a>
		//<a href='#' class="btn btn-default" id="java">Java</a>
		$(this).attr("class", "btn btn-primary");
		$(this).siblings().attr("class", "btn btn-default");
        var id = $(this).attr('id');
		alert(id);
    });
}); 