import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	HomeWrapper, HomeLeft,HomeRight, BackTop
	 } from './style';
import Movie from './components/Movie';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Gif from './components/Gif';
import {actionCreators} from './store';
import axios from 'axios';

class Home extends PureComponent{
	
	handleScrollTop(){
		window.scrollTo(0,0);
	}


	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img 
					className='banner-img'
					src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574754806671&di=fe2eca085fdc12f376128db20edde5b5&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201502%2F12%2F20150212085124_2rZnC.thumb.700_0.jpeg" 
					alt=''
					/>
					<Topic />
					<Movie />
				</HomeLeft>
				<HomeRight>
				<Gif></Gif>
				<Recommend></Recommend>
				</HomeRight>
				{this.props.showScroll ?
				<BackTop onClick={this.handleScrollTop}> Back </BackTop>:null
				}
				
			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}
	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData(action){
		axios.get('/api/home.json').then((res)=>{
			const result = res.data.data;
			const action ={
				type: 'change_home_data',
				topicList: result.topicList,
				movieList: result.movieList
			}
			dispatch(action);
		})
	},
	changeScrollTopShow(){
		if(document.documentElement.scrollTop > 200){
			dispatch(actionCreators.toggleTopShow(true))
		}else{
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})


export default connect(mapState, mapDispatch)(Home);
