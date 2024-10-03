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
  },
  
  // CONVERT INDEPENDENT FUNCTIONS INTO METHODS
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    let playlists = this.playlists;
    for (let each in playlists) {
      let playlist = playlists[each];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    let tracks = this.tracks;
    for (let each in tracks) {
      let track = tracks[each];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    const tracks = playlist.tracks;
    
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    
    for (let each of tracks) {
      let track = this.tracks[each];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    //check track and playlist exist
    if (!this.tracks[trackId] || !this.playlists[playlistId]) {
      return "Not a valid track or playlist ID";
    }
    
    //add track to playlist
    this.playlists[playlistId].tracks.push(trackId);
    
    //checking if it pushed
    // console.log(library.playlists[playlistId]);
  },
  
  // adds a track to the library
  addTrack: function(name, artist, album) {
    let newTrack = {
      id: generateUid(),
      name: name,
      artist: artist,
      album: album
    };
    this.tracks[newTrack.id] = newTrack;
    
    //checking if it added
    console.log(this.tracks);
  },
  
  // adds a playlist to the library
  addPlaylist: function(name) {
    let newPlaylist = {
      id: generateUid(),
      name: name,
      tracks: []
    };
    this.playlists[newPlaylist.id] = newPlaylist;
    
    //checking if it added
    console.log(this.playlists);
    
  },
  
  // STRETCH:
  // Given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults: function(query) {
    const lowerCaseQuery = query.toLowerCase();
    let foundQuery = false;
    
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (
        track.name.toLowerCase().search(lowerCaseQuery) !== -1 ||
        track.artist.toLowerCase().search(lowerCaseQuery) !== -1 ||
        track.album.toLowerCase().search(lowerCaseQuery) !== -1
      ) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
        foundQuery = true;
      }
    }
    
    if (!foundQuery) {
      console.log(`No results found for "${query}"`);
    }
  }
};

// TEST FUNCTIONS
// library.printPlaylists();
// library.printTracks();
// library.printPlaylist('p01');
// library.addTrackToPlaylist('t01', 'p02');
// library.addTrack('1998', 'Adele', '25');
// library.addPlaylist("Nhi Phan Playlist");

library.printSearchResults("Code");
library.printSearchResults("Week");
library.printSearchResults("Adele-non");
library.printSearchResults("John");

