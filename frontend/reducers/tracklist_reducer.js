import merge from 'lodash/merge';

import { RECEIVE_PLAYLIST_WITH_TRACKLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_PLAY_SONG_WITH_TRACKLIST } from '../actions/audio_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';


const tracklistReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_PLAYLIST_WITH_TRACKLIST:
            return action.payload.playlist.song_ids;
        case RECEIVE_PLAY_SONG_WITH_TRACKLIST:
            return action.tracklist;
        case RECEIVE_SONGS:
            return Object.keys(action.songs).map(songId => parseInt(songId));
        // case RECEIVE_ALBUM:
        //     return action.payload.album.song_ids;
        default:
            return oldState;
    }
};

export default tracklistReducer;