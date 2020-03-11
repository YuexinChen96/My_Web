import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	id: 1,
	title: "Castle in the Sky",
	MusicBg: "/pics/1-m.jpeg",
	MusicBgm: "/musics/1.mp3",
	Play: true
});


export default (state = defaultState, action) => {
	switch(action.type){
		case constants.CHANGE_PLAY_STATE:
			return state.set('Play',action.value);
		case constants.MUSIC_PREV:
			return state.merge({
				id: action.id,
				title: action.title,
				MusicBg: action.MusicBg,
				MusicBgm: action.MusicBgm,
				Play: action.Play
			});
		case constants.MUSIC_NEXT:
			return state.merge({
				id: action.id,
				title: action.title,
				MusicBg: action.MusicBg,
				MusicBgm: action.MusicBgm,
				Play: action.Play
			});
		default:
			return state;

	}
}