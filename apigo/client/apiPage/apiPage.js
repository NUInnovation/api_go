Template.apiPage.helpers({
  name: function () {
    return this.nameOfApi;
  },
  intro: function(){
    return this.intro;
  },
  languages: function(){
    return this.languages;
  },
  sampleworks: function(){
    return this.sampleworks;
  }
});


Template.apiPage.events({
  'click .lang-btn-group a': function(event){
    var LANG_LIST = $("#LANG_LIST").text().split(" ");
    $("#"+event.target.id).attr("class", "btn btn-primary");
    $("#"+event.target.id).siblings().attr("class", "btn btn-default");
    var lang_clicked = event.target.id;
    for (i=0; i<LANG_LIST.length; i++) {
      var lang = LANG_LIST[i];
      if (lang_clicked == lang) {
        $("." + lang).show();
      } else {
        $("." + lang).hide();
      }
    }
  }
});



Template.apiPage.onRendered(function() {
  var LANG_LIST = $("#LANG_LIST").text().split(" ");
  for (var i = 1; i< LANG_LIST.length; i++) {
	  var lang = LANG_LIST[i];
	  $("." + lang).hide();
  }
  
}); 

Template.apiPage.afterLoad = function(){
	Meteor.defer(function(){
		var LANG_LIST = $("#LANG_LIST").text().split(" ");
		for (var i = 1; i< LANG_LIST.length; i++) {
			var lang = LANG_LIST[i];
			$("." + lang).hide();
		}
	});
}
