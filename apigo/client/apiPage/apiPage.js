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