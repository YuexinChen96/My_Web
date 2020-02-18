import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res)=>{
			const result = res.data.data;
			for (var i=0;i<result.length;i++){
				if (result[i].id == id){
					var t_title = result[i].title;
					var t_content = result[i].content;
				}
			}
			dispatch(changeDetail(t_title,t_content));
		})
	}
}
