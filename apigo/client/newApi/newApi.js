Template.newApi.onCreated(function(){
  this.addLanguagesFields = new ReactiveVar( false );
  this.addSampleworksFields = new ReactiveVar( false );
});

Template.newApi.helpers({
  addLanguagesFields() {
    return Template.instance().addLanguagesFields.get();
  },
  addSampleworksFields() {
    return Template.instance().addSampleworksFields.get();
  }
});

Template.newApi.events({
  'click .add-languages-btn': function( event, template ) {
  	if ( Template.instance().addLanguagesFields.get()) {
      template.addLanguagesFields.set( false );
      $('.add-languages-btn').html("Add Tutorials");
    } else {
      template.addLanguagesFields.set( true );
      $('.add-languages-btn').html("Remove");
    }
  },
  'click .add-sampleworks-btn': function( event, template ) {
    if ( Template.instance().addSampleworksFields.get()) {
      template.addSampleworksFields.set( false );
      $('.add-sampleworks-btn').html("Add Examples");
    } else {
      template.addSampleworksFields.set( true );
      $('.add-sampleworks-btn').html("Remove");
    }
  },

});
