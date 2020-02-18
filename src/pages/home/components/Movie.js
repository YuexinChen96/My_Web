import React, { PureComponent } from 'react';
import {MovieList, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';


class Movie extends PureComponent{
	render(){
		const {list, getMoreList, page} = this.props;
		return(
			<div>
				{
					list.map((item, index)=>{
						return(
							<Link key={index} to={'/detail/'+item.get('id')}>
								<MovieList>
									<img
									className='pic'
									src={item.get('imgUrl')} 
									alt=''
									/>
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</MovieList>
							</Link>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>
				More
				</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.get('home').get('movieList'),
	page: state.getIn(['home','moviePage'])
})

const mapDispatch = (dispatch) => ({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page))
	}
})


export default connect(mapState,mapDispatch)(Movie);