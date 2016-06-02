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
  },
  editorOptions: function() {
	 return {
		  lineNumbers: true,
		  mode: "javascript"
    };
  },

  updateFormId: function(){
    return this._id;
  },
  exampleDoc: function () {
    return Apis.findOne({nameOfApi: this.nameOfApi});
  },
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
  },

  'click .fa-pencil-intro' : function(e){
    $('.intro-autoform').toggle();
  },

  'click .fa-pencil-prereq' : function(e){
    $('.prereq-autoform').toggle();
  },

  'click .btn-update-intro' : function(e){
    $('.intro-autoform').toggle();
  },

  'click .btn-update-prereq' : function(e){
    $('.prereq-autoform').toggle();
  },

  'click .fa-pencil-sample' : function(e){
    $('.sample-autoform').toggle();
  },

  'click .btn-update-sample' : function(e){
    $('.sample-autoform').toggle();
  },

  'click .fa-pencil-tut' : function(e){
    $('.tut-autoform').toggle();
  },

  'click .btn-update-tut' : function(e){
    $('.tut-autoform').toggle();
  },



  'click .fa-plus-sample' : function(e){
    $('.sample-add-autoform').toggle();
  },

  'click .sample-add-autoform button' : function(e){
    $('.sample-add-autoform').toggle();
  },

   'click .fa-plus-prereq-step' : function(e){
    $('.prereq-step-add-autoform').toggle();
  },

  'click .prereq-step-add-autoform button' : function(e){
    $('.prereq-step-add-autoform').toggle();
  },

  'click .fa-plus-tut-step' : function(e){
    $('.tut-step-add-autoform').toggle();
  },

  'click .tut-step-add-autoform button' : function(e){
    $('.tut-step-add-autoform').toggle();
  },

  'click .fa-plus-tut' : function(e){
    $('.tut-add-autoform').toggle();
  },

  'click .tut-add-autoform button' : function(e){
    $('.tut-add-autoform').toggle();
  },

});

// Template.apiPage.onRendered(function() {
  // var LANG_LIST = $("#LANG_LIST").text().split(" ");
  // for (var i = 1; i< LANG_LIST.length; i++) {
	  // var lang = LANG_LIST[i];
	  // $("." + lang).hide();
  // }
  
// }); 

Template.apiPage.afterLoad = function(){
	Meteor.defer(function(){
		var LANG_LIST = $("#LANG_LIST").text().split(" ");
		for (var i = 1; i< LANG_LIST.length; i++) {
      if(LANG_LIST[i] != ""){
        var lang = LANG_LIST[i];
        $("." + lang).hide();
      }
		}
    $("."+LANG_LIST[0]).show();
	});
}


