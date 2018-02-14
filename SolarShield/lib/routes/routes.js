//Route for homepage
//Route for homepage

Router.route('/', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('homepage');
  },
  onAfterAction: function() {
    document.title = 'Home - Solar Shield';
  }
});

Router.route('/about', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('about');
  },
  onAfterAction: function() {
    document.title = 'About Us - Solar Shield';
  }
});

Router.route('/price', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('prices');
  },
  onAfterAction: function() {
    document.title = 'Prices - Solar Shield';
  }
});
Router.route('/tints', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('tints');
  },
  onAfterAction: function() {
    document.title = 'Window Tinting - Solar Shield';
  }
});
Router.route('/windshield', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('windshield');
  },
  onAfterAction: function() {
    document.title = 'windshield Replacement - Solar Shield';
  }
});
Router.route('/stone', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('stone');
  },
  onAfterAction: function() {
    document.title = 'Stone Chip Repairs - Solar Shield';
  }
});
Router.route('/bodywork', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('bodywork');
  },
  onAfterAction: function() {
    document.title = 'Body Work - Solar Shield';
  }
});
Router.route('/wrapping', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('wrapping');
  },
  onAfterAction: function() {
    document.title = 'Car Wrapping - Solar Shield';
  }
});
Router.route('/wash', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('wash');
  },
  onAfterAction: function() {
    document.title = 'Engine Wash - Solar Shield';
  }
});
Router.route('/contact', {
  waitOn: function() {
    Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('contact');
  },
  onAfterAction: function() {
    document.title = 'Contact Us - Solar Shield';
  }
});
