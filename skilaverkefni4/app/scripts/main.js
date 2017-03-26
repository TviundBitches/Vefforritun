
/**
 * Bootstrap and start the game.
 */
$(function() {
    'use strict';

    var game = new window.Game($('.GameCanvas'));
    game.start();
});

function volume() {
  var check = $('#volume').hasClass('volumeOn')
  if (check) {
    $('.volume').find('audio').each(function() {
      this.muted = true;
    });
    document.getElementById('volume-button').innerHTML = 'volume_off';
    $('button.volumeOn').removeClass('volumeOn').addClass('volumeOff');
  } else {
    $('.volume').find('audio').each(function() {
      this.muted = false;
    });
    document.getElementById('volume-button').innerHTML = 'volume_up';
    $('button.volumeOff').removeClass('volumeOff').addClass('volumeOn');
  }

}
