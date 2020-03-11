import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content,video) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content,
	video
})

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res)=>{
			const result = res.data.data;
			for (var i=0;i<result.length;i++){
				if (result[i].id === parseInt(id)){					
					var t_title = result[i].title;
					var t_content = result[i].content;
					var t_video = result[i].video;
				}
			}
			dispatch(changeDetail(t_title,t_content,t_video));
		})
	}
}