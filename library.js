const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  let playlists = library.playlists;
  for (let each in playlists) {
    let playlist = playlists[each];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let tracks = library.tracks;
  for (let each in tracks) {
    let track = tracks[each];
    console.log(track);
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  const tracks = playlist.tracks;
  
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  
  for (let each of tracks) {
    let track = library.tracks[each];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  //check track and playlist exist
  if (!library.tracks[trackId] || !library.playlists[playlistId]) {
    return "Not a valid track or playlist ID";
  }
  
  //add track to playlist
  library.playlists[playlistId].tracks.push(trackId);
  
  //checking if it pushed
  // console.log(library.playlists[playlistId]);
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let newTrack = {
    id: generateUid(),
    name: name,
    artist: artist,
    album: album
  };
  library.tracks[newTrack.id] = newTrack;
  
  //checking if it added
  console.log(library.tracks);
}


// adds a playlist to the library
const addPlaylist = function(name) {
  let newPlaylist = {
    id: generateUid(),
    name: name,
    tracks: []
  };
  library.playlists[newPlaylist.id] = newPlaylist;
  
  //checking if it added
  console.log(library.playlists);
  
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}

// printPlaylists();
// printTracks();
// printPlaylist('p01');
// addTrackToPlaylist('t01', 'p02');
// addTrack('1998', 'Adele', '25');
addPlaylist("Nhi Phan Playlist");
// printSearchResults();