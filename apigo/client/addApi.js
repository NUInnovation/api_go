Template.addApi.events({
    'submit form': function(event){
        event.preventDefault();
        var apiName = $('[name=apiName]').val();
        Apis.insert({
          name: apiName
        });
        $('[name=apiName]').val('');
    }
});

Template.addApi.helpers({
    'api': function(){
        return Apis.find({}, {sort: {name: 1}});
    }
});