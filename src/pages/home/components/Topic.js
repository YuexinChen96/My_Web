import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {TopicWrapper,TopicItem} from '../style';
import { Link } from 'react-router-dom';

class Topic extends PureComponent{
	render(){
		return(
			<TopicWrapper>
				{
					this.props.list.map((item)=>{
						return(
							<Link key={item.get('id')} to={'/'+item.get('title')+'/'}>
							<TopicItem key={item.get('id')}>
							<img 
							className='topic-pic'
							src={item.get('imgUrl')} 
							alt='' 
							/>
							{item.get('title')}</TopicItem>
							</Link>
						)
					})
				}

				
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic);