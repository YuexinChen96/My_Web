import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import { Link } from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {HeaderWrapper, 
	Logo, 
	Nav, 
	NavItem, 
	SearchWrapper, 
	NavSearch, 
	SearchInfo,
	TopSearch,
	SearchRefresh,
	SearchInfoList,
	SearchInfoItem,
	Addition, 
	Button} from './style';

class Header extends Component{
	getListArea(){
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave,
		handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];
		if(newList.length){
			for (let i = (page-1) * 10; i < page * 10; i++){
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		//check mouse state.	
		if(focused || mouseIn){
			return(
				<SearchInfo 
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				>
					<TopSearch>
						Top Search
						<SearchRefresh
						onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
						>
							<i
							ref={(icon)=>{this.spinIcon=icon}}
							className="iconfont spin">&#xe7e9;&nbsp;</i>
							Refresh
						</SearchRefresh>
						<SearchInfoList>
							{
								pageList
							}
						</SearchInfoList>
					</TopSearch>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}

	//static output.
	render(){
		const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props;
		return(
			<HeaderWrapper>
				<Link to='/'>
				<Logo />
				</Link>
				<Nav>
					<NavItem className='left' acitve>Intro</NavItem>
					<NavItem className='left'>Musics</NavItem>
					{
						login ?
						<NavItem 
						onClick={logout}
						className='right'>LogOut</NavItem> : 
						<Link to='/login'>
							<NavItem className='right'>LogIn</NavItem>
						</Link>
					}
					
					<NavItem className='right'>
						<i className="iconfont">&#xe62f;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
						 	<NavSearch
							className={focused ? 'focused':''}
							onFocus={()=>handleInputFocus(list)}
							onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom':'iconfont zoom'}
						>&#xe60b;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/share'>
						<Button className='share'>
							<i className="iconfont">&#xe60c;&nbsp;&nbsp;</i>
							Share</Button>
						<Button className='reg'>SignUp</Button>
					</Link>
				</Addition>
			</HeaderWrapper>
		);
	}
}


const mapStateToProps = (state) => {
	return{
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header','list']),
		totalPage: state.getIn(['header','totalPage']),
		page: state.getIn(['header','page']),
		mouseIn: state.getIn(['header','mouseIn']),
		login: state.getIn(['login','login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		handleInputFocus(list){
			if(list.size === 0){
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage,spin){
			let o_Angle=spin.style.transform.replace(/[^0-9]/ig,'');
			if (o_Angle){
				o_Angle = parseInt(o_Angle, 10);
			}else{
				o_Angle = 0;
			}
			spin.style.transform = 'rotate('+(o_Angle+360)+'deg)';
			if (page < totalPage){
				dispatch(actionCreators.changePage(page+1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		},
		logout(){
			dispatch(loginActionCreators.logout());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);