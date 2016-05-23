Router.route('/', function(){
  this.render('homepage');
});

Router.route('/api/alchemy', function(){
  this.render('showApi');
});

Router.route('/add', function(){
  this.render('addApi');
});
  
Router.route('/api-intro', function(){
  this.render('about');
});

Router.route('/api/:_id', function () {
  this.render('showApi', {
    data: function () {
      return Apis.findOne({_id: this.params._id});
    }
  });

});


Router.route('/newApi', function(){
  this.render('newApi');
});