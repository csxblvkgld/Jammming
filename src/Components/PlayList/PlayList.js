import React from 'react';

import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    render(){
        return (
            <div className="Playlist">
                <input deafultValue={'New Playlist'}/>
                <TrackList tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;