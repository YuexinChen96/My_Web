import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const addMovieList = (list) => ({
	type: constants.ADD_MOVIE_LIST,
	list: fromJS(list)
})

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page='+page).then((res)=>{
			const result = res.data.data;
			dispatch(addMovieList(result, page+1));
		})
	};
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})
