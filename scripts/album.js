//example album info stored in object
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism'
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
};

//Another example
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
     ]
};

//Example 3
var albumMadonna = {
    title: 'Evita',
    artist: 'Madonna and varios artists',
    label: 'Warner Bros.',
    year: '1995',
    albumArtUrl: 'assets/images/album_covers/Evita.png',
    songs: [
        { title: 'Requiem for Evita', duration: '4:16'},
        { title: 'Oh What a Circus' , duration: '5:45'},
        { title: 'On This Night of A Thousand Stars' , duration: '2:24'},
        { title: 'Eva and Magaldi', duration: '5:21'},
        { title: 'Buenos A1res', duration: '4:09'},
        { title: 'Another Suitcase in Another Hall', duration: '3:33'},
        { title: 'Goodnight and Thankyou', duration: '4:18'},
        { title: 'Id Be Surprisingly Good for You', duration: '4:19'},
        { title: 'Perons Latest Flame', duration: '5:18'},
        { title: 'A New Argentina', duration: '4:17'},
        { title: 'Dont Cry for Me Argentina', duration: '5:36'},
        { title: 'High Flying, Adored', duration: '3:32'},
        { title: 'Rainbow High', duration: '2:27'},
        { title: 'And the Money Kept Flowing In', duration: '3:53'},
        { title: 'She is a Diamond', duration: '1:40'},
        { title: 'Waltz for Eva and Che', duration'4:13'},
        { title: 'You Must Love Me', duration: '2:52'},
        { title: 'Evas Final Broadcast', duration: '5:16'},
        { title: 'Lament', duration:'5:17'}
    ]
};
    
    
}

var createSongRow = function(songNumber, songName, songLength){
    var template =
      '<tr class="album-view-song-item">'
    + '  <td class="song-item-number">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
      ;
    return template;
};

var setCurrentAlbum = function(album){
    
    // select all of the HTML elements required to display on the album page
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    
    // firstChild property identifies the first child node of element, and  nodeValue returns or sets the value of the node
    albumTitle.firstChilde.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + '' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
       
            var images = ['assets/images/album_covers/01.png', 'assets/images/album_covers/20.png', 'assets/images/album_covers/Evita.png'];
            
            var img = images[i];
            albumImage.addEventListener("click", function(){
                for (var i = 0; i < images.length; i++){
                   
                    img = images[i + 1]; 
                });
        
            
    
    // clear the album song list HTML to make sure there are no interfering elements.
    albumSongList.innerHTML = '';
    
    //go through all the songs from the specified album object and insert them into the HTML using the innerHTML property. The createSongRow function is called at each loop, passing in the song number, name, and length arguments from our album object
    for (var i = 0; i < album.songs.length; i++){
        albumSongList.innerHTML += createSongRow(i + 1, album.song[i].title, album.songs[i].duration);
    }
    
};

window.onlaod = function() {
    setCurrentAlbum(albumPicasso);
};