import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

class Detail extends PureComponent{
	render(){
		return(
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content
				dangerouslySetInnerHTML={{__html: this.props.content}}
				></Content>
				<video height="480" width="850" src={this.props.video} controls="controls">
				</video>
			</DetailWrapper>
		)
	}
	//pre-mount webpage
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
	}
}//dangerouslySetInnerHTML will force HTML output

const mapState = (state) => ({
	title: state.getIn(['detail','title']),
	content: state.getIn(['detail','content']),
	video: state.getIn(['detail','video'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id){
		dispatch(actionCreators.getDetail(id));
	}
})

export default connect(mapState, mapDispatch)(Detail);