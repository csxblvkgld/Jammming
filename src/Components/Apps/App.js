import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'My PLaylist',
      playlistTracks: [{name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4},
      {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5},
      {name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 6}]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack(this);
  }

  addTrack(track) {
    let tracks =  this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(tracks);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks =  this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          
          <SearchBar />
          <div className="App-playlist">
          
          <SearchResults searchResults={this.state.searchResults} 
                          onAdd={this.addTrack}/>
          
          <PlayList playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    )
  }
}

export default App;
