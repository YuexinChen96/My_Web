import axios from 'axios';
import * as constants from './constants';

const changePlayState = (t_value) => ({
	type: constants.CHANGE_PLAY_STATE,
	value: t_value
});

const MusicPrev = (id, title, MusicBg, MusicBgm, Play) => ({
	type: constants.MUSIC_PREV,
	id,
	title,
	MusicBg,
	MusicBgm,
	Play
});

const MusicNext = (id, title, MusicBg, MusicBgm, Play) => ({
	type: constants.MUSIC_NEXT,
	id,
	title,
	MusicBg,
	MusicBgm,
	Play
});

export const play = (musicState) => {
	return (dispatch) => {
		if(musicState){
			dispatch(changePlayState(false));
		}else{
			dispatch(changePlayState(true));
		}
	}
}


export const prev = (id) => {
	return (dispatch) => {
		axios.get('/api/music.json').then((res)=>{
			const result = res.data.data;
			if(id === 1){
				var t_id = result.length;
				var t_t = result[t_id-1].title;
				var t_bg = result[t_id-1].MusicBg;
				var t_bgm = result[t_id-1].MusicBgm;
				dispatch(MusicPrev(t_id,t_t, t_bg,t_bgm, true));
			}else{
				dispatch(MusicPrev(id-1,
					result[id-2].title,
					result[id-2].MusicBg,
					result[id-2].MusicBgm,
					true));
			}
		})
	}
}

export const next = (id) => {
	return (dispatch) => {
		axios.get('/api/music.json').then((res)=>{
			const result = res.data.data;
			if(id === result.length){
				dispatch(MusicPrev(1,
					result[0].title,
					result[0].MusicBg,
					result[0].MusicBgm,
					true));
			}else{
				dispatch(MusicNext(id+1,
					result[id].title,
					result[id].MusicBg,
					result[id].MusicBgm,
					true));
			}
		})
	}
}
