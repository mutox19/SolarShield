import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './homePage.html';

Template.homepage.onRendered(function()
{
    //create a sound 
  var mySound = new buzz.sound( "/video/brokenglass", {
      formats: [ "ogg", "mp3", "aac" ]
  });

  //this is for the splash screen
  var readAnnouncement = sessionStorage.getItem("readAnnouncement");
  if (!readAnnouncement)
  {

    console.log("home page rendered");
    $.fn.center = function ()
    {
      this.css("position","absolute");
      this.css("top", Math.max(0, (
        ($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px"
      );
      this.css("left", Math.max(0, (
        ($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px");
      return this;
    }

    $("#overlay").show();
    $("#overlay-content").show().center();

    //fade the black overlay on main page and play glass noise
    setTimeout(function()
    {
      $("#overlay").fadeOut();
      mySound.play();
    }, 5000);

    sessionStorage.setItem("readAnnouncement", "true");
  }

});

/*
if (Meteor.isClient) {

youtubeBackend = new MusicPlayer.backends.youtube({

 });

 soundcloudBackend = new MusicPlayer.backends.soundcloud({

 }).init();

 musicPlayer = new MusicPlayer({
   backends: 'youtube',
 });

 Template.hello.events({
   'click [data-action="load"]': function () {
     var url = "/tracks/293"
     soundcloudBackend.load(url);
   },
 });

 Template.player.statusIs = function (str) {
   var status = soundcloudBackend.status();
   console.log('status', status);
   return status == str;
 };

 Template.player.title = function () {
   return soundcloudBackend.title();
 };

 Template.player.artwork_url = function () {
   return soundcloudBackend.artwork_url();
 };

 var dragging = false;
 Template.player.rendered = function () {
   var el = this.find('.player-slider input[type="range"]');
   el.addEventListener('input', function (e) {
     dragging = true;
   });
   el.addEventListener('change', function (e) {
     dragging = false;
     soundcloudBackend.seekTo(this.value);
   });

   Deps.autorun(function () {
     var pos = soundcloudBackend.getPosition();
     if (!dragging)
       el.value = pos;
   });

   Deps.autorun(function () {
     var dur = soundcloudBackend.getDuration();
     el.max = dur;
   });
 };

 Template.player.duration = function () {
   var duration =  soundcloudBackend.getDuration();
   duration = moment.duration(duration, 'ms');
   var time = moment.utc(duration.asMilliseconds());
   if (duration.asHours() >= 1) {
     return time.format('HH:mm:ss');
   } else {
     return time.format('mm:ss');
   }
 };

 Template.player.remaining = function () {
   var duration = soundcloudBackend.getDuration() - soundcloudBackend.getPosition();
   duration = moment.duration(duration, 'ms');
   var time = moment.utc(duration.asMilliseconds());
   if (duration.asHours() >= 1) {
     return time.format('HH:mm:ss');
   } else {
     return time.format('mm:ss');
   }
 };

 Template.player.events({
   'click .player-pause': function () {
     console.log('pause', soundcloudBackend.pause);
     soundcloudBackend.pause();
   },
   'click .player-play': function () {
     console.log('play');
     soundcloudBackend.play();
   },
 });

}






/*

Template.homepage.helpers({


  togglePlay: function() {
    var audioElm = document.getElementById("audio1"); // Audio element
    var ratedisplay = document.getElementById("rate"); // Rate display area
    if (document.getElementById("audio1")) {

      if (audioElm.paused == true) {
        playAudio(audioElm);    //  if player is paused, then play the file
      } else {
        pauseAudio(audioElm);   //  if player is playing, then pause
      }
    }
  },
  decreaseSpeed: function() {
    var audioElm = document.getElementById("audio1"); // Audio element
    var ratedisplay = document.getElementById("rate"); // Rate display area
    if (audioElm.playbackRate <= 1) {
      var temp = audioElm.playbackRate;
      audioElm.playbackRate = (temp / 2);
    } else {
      audioElm.playbackRate -= 1;
    }
  },
  increaseSpeed: function() {
    var audioElm = document.getElementById("audio1"); // Audio element
    var ratedisplay = document.getElementById("rate"); // Rate display area
    audioElm.playbackRate += 1;
  },
  pauseAudio: function(audioElm) {
    var audioElm = document.getElementById("audio1"); // Audio element
    var ratedisplay = document.getElementById("rate"); // Rate display area
    document.getElementById("playbutton").innerHTML = "play"; // Set button text == Play
    audioElm.pause();
  },
  playAudio: function(audioElm) {
    var audioElm = document.getElementById("audio1"); // Audio element
    var ratedisplay = document.getElementById("rate"); // Rate display area
    document.getElementById("playbutton").innerHTML = "Pause"; // Set button text == Pause
    // Get file from text box and assign it to the source of the audio element
    audioElm.src = document.getElementById('audioFile').value;
    audioElm.play();
  },

});

*/



/*
Template.Homepage.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});
/*
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
