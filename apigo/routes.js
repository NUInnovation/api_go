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

Router.route('/api/:name', function () {
  this.render('apiPage', {
    data: function () {
      return Apis.findOne({nameOfApi: this.params.name});
    }
  });
});


Router.route('/newApi', function(){
  this.render('newApi');
});