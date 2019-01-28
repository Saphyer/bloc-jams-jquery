class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);

  const duration = player.prettyTime(player.currentlyPlaying.duration);
  $('#time-control .total-time').text( duration );
  }
}

const helper = new Helper();
