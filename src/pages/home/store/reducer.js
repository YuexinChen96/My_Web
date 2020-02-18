import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList:[],
	movieList: [],
	moviePage: 1,
	showScroll: false
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		movieList: fromJS(action.movieList)
	});
}

const addMovieList = (state, action) => {
	return state.merge({
		'movieList': state.get('movieList').concat(action.list),
		'moviePage': action.nextPage
	});
}

export default (state = defaultState, action) => {
	switch(action.type){
		case 'change_home_data':
			return changeHomeData(state,action)
		case constants.ADD_MOVIE_LIST:
			return addMovieList(state,action)
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show)
		default:
			return state;
	}
}