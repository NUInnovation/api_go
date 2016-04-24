Router.route('/', function(){
  this.render('home');
});

Router.route('/add', function(){
  this.render('addApi');
});

Router.route('/api/:_id', function () {
  this.render('showApi', {
    data: function () {
      return Apis.findOne({_id: this.params._id});
    }
  });
});
