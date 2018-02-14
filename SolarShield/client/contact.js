Template.contact.onRendered(function() {
  GoogleMaps.load();
});


Template.contact.events({

  'click .btn-success': function(e)
    {
      e.preventDefault();
      /*$("#wrapper").toggleClass("toggled");*/
      var firstName = $('[name=firstN]').val();
      var lastName = $('[name=lastN]').val();
      var email = $('[name=email]').val();
      var subject = $('[name=subject]').val();
      var description = $('[name=message]').val();

      Meteor.call('sendEmail','dan_307@hotmail.com',email,subject,description);
      alert("Your Message has been sent. Thank You!");
      $('[name=firstN]').val("");
      $('[name=lastN]').val("");
      $('[name=email]').val("");
      $('[name=subject]').val("");
      $('[name=message]').val("");
    
    }
});
