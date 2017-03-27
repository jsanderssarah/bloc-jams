var setSong = function(songNumber) {
    currentlyPlayingSongNumber = parsInt(songNumber);
    currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
};
getSongNumberCell function(number) {
    return$('.song-item-number[data-song-number="' + number + '"]');
};
var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
    var $row = template;
    
    var clickHandler = function() {
      var songNumber = parseInt($(this).attr('data-song-number'));    
	  if (setSong(songNumber) !== null) {
		var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
		currentlyPlayingCell.html(setSong(songNumber));
	  }
	  if (setSong(songNumber) !== songNumber) {
		// Switch from Play -> Pause button to indicate new song is playing.
		$(this).html(pauseButtonTemplate);
		setSong(songNumber) = songNumber;
        setSong(songNumber) = currentAlbum.songs[songNumber - 1];
        updatePlayerBarSong();  
	  } else if (setSong(songNumber) === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
		$('.main-controls .play-pause').html(playerBarPlayButton);
        setSong(songNumber) = null; 
        setSong(songNumber) = null;    
	  }

      var onHover = function(event) {
        var songNumberCell = parseInt($(this).find('.song-item-number'));
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));

        if (songNumber !== setSong(songNumber)) {
            songNumberCell.html(playButtonTemplate);
        }
      };
      var offHover = function(event) {
        var songNumberCell = parseInt($(this).find('.song-item-number'));
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));
        if (songNumber !== setSong(songNumber)) {
          songNumberCell.html(songNumber);
        console.log("songNumber type is " + typeof songNumber + "\n and setSong(songNumber) type is " + typeof setSong(songNumber));    
        }
      };

    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return$row;
   };
 };
var updatePlayerBarSong = function() {
    $('.currently-playing .song-name').text(setSong(songNumber).title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(setSong(songNumber).title + " - " + currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);
};
var nextSong = function() {
    var currentSongIndex = trackIndex(currentAlbum, setSong(songNumber));
    // Note that we're _incrementing_ the song here
    currentSongIndex++;

    if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    }

    // Save the last song number before changing it
    var lastSongNumber = setSong(songNumber);

    // Set a new current song
    setSong(songNumber) = currentSongIndex + 1;
    setSong(songNumber) = currentAlbum.songs[currentSongIndex];

    // Update the Player Bar information
    updatePlayerBarSong();

    var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber) + setSong(songNumber);
    var $lastSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber) + lastSongNumbe;

    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
};
var previousSong = function() {
    var currentSongIndex = trackIndex(currentAlbum, setSong(songNumber));
    // Note that we're _decrementing_ the index here
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = currentAlbum.songs.length - 1;
    }

    // Save the last song number before changing it
    var lastSongNumber = setSong(songNumber);

    // Set a new current song
    setSong(songNumber) = currentSongIndex + 1;
    setSong(songNumber) = currentAlbum.songs[currentSongIndex];

    // Update the Player Bar information
    updatePlayerBarSong();

    $('.main-controls .play-pause').html(playerBarPauseButton);

    var $previousSongNumberCell = $('.song-item-number[data-song-number="' + setSong(songNumber) + '"]');
    var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');

    $previousSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
};
var setCurrentAlbum = function(album) {
    currentAlbum = album;
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
     $albumSongList.empty();
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };
var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';
var currentAlbum = null;
var currentlyPlayingSongNumber = null;     
var currentSongFromAlbum = null;
var currentSoundFile = null;
var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');
var songRows = document.getElementsByClassName('album-view-song-item');
$(document).ready(function() {
  setCurrentAlbum(albumPicasso);   
   $previousButton.click(previousSong);
  $nextButton.click(nextSong);
});  

