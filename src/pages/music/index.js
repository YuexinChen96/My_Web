import React, { PureComponent } from 'react';
import { MusicWrapper, Header, SpinCenter, MusicNext, MusicPrev, MusicStart} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Music extends PureComponent{
	render(){
		const {id, title, MusicBg, MusicBgm, PlayState} = this.props;
		return(
			<div>
				<MusicWrapper>
					<img height="600" width="1250" src={MusicBg} alt=" "/>
				</MusicWrapper>

				<SpinCenter>
					<img className="Rotation img" src={MusicBg} width="150" height="150" alt="logo" />
				</SpinCenter>

				<audio src={MusicBgm} controls id="audio"></audio>
				<Header>{title}</Header>
				<MusicPrev
				onClick = {() => this.props.prev(id)}
				>&lt;-Prev
				</MusicPrev>
				<MusicStart
				onClick = {() => this.props.play(PlayState)}
				>
				{PlayState ? 'Pause' : 'Play'}
				</MusicStart>
				<MusicNext
				onClick = {() => this.props.next(id)}
				>Next-&gt;
				</MusicNext>
			</div>
		)
	}
	componentDidMount(){
		const audio = document.getElementById("audio");
		audio.addEventListener("loadstart", function(){
			audio.play();
		});
		audio.addEventListener("ended", function(){
			console.log("ended");
		});
	}
	componentWillUnmount(){
		const audio = document.getElementById("audio");
		audio.removeEventListener("loadstart", function(){
			audio.pause();
		});
		audio.removeEventListener("ended", function(){
			audio.pause();
		});
	}
}

const mapState = (state) => ({
	id: state.getIn(['music','id']),
	title: state.getIn(['music','title']),
	MusicBg: state.getIn(['music','MusicBg']),
	MusicBgm: state.getIn(['music','MusicBgm']),
	PlayState: state.getIn(['music','Play'])
})

const mapDispatch = (dispatch) => ({
	play(musicState){
		if(musicState){
			const audio = document.getElementById("audio");
			audio.pause();
			dispatch(actionCreators.play(musicState));
		}
		else{
			const audio = document.getElementById("audio");
			audio.play();
			dispatch(actionCreators.play(musicState));
		}
	},
	prev(id){
		dispatch(actionCreators.prev(id));
	},
	next(id){
		dispatch(actionCreators.next(id));
	}

})

export default connect(mapState, mapDispatch)(Music);