import styled from 'styled-components';
import logoPic from '../../statics/logo.jpeg';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 60px;
	border-bottom: 1px solid #000000;
	background: rgb(61,232,163,0.1);
`;

export const Logo = styled.div`
	position: absolute;
	top:0;
	left: 0;
	display: block;
	width: 98px;
	height: 60px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 80px;
	margin: 0 auto;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 60px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	font-family: "Comic Sans MS", "Comic Sans", cursive;
	&.left{
		margin-left: 15px;
		float:left;
	}
	&.right{
		float:right;
		color: #969696;
	}
	&.active{
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom{
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`

export const NavSearch = styled.input.attrs({
	placeholder:'Search'
})`	
	width: 160px;
	height: 40px;
	padding: 0 35px 0 20px;
	margin-top: 10px;
	margin-left: 30px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px; 
	background: #DEE6FD;
	opacity: 0.6;
	color: #666;
	font-size: 14px;
	&::placholder{
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active{
		width: 240px;
	}
	&.slide-exit{
		transition: all .2s ease-out;
	}
	&.slide-exit-active{
		width: 160px;
	}
`

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 60px;
	width: 240px;
	padding: 0 20px;
	background-color: #ffffff;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const TopSearch = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`

export const SearchRefresh = styled.span`
	float:right;
	font-size: 13px;
	.spin{
		display: blcok;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`

export const SearchInfoList = styled.div`
	margin-top: 10px;
	overflow: hidden;
`

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 10px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 60px;
`

export const Button = styled.div`
	float: right;
	margin-top: 10px;
	margin-right: 20px;
	padding: 0 10px;
	line-height: 40px;
	border-radius: 19px;
	font-family: "Comic Sans MS", "Comic Sans", cursive;
	border: 1px solid #FF6338;
	font-size: 14px;
	&.reg{
		color: #FF6338;
	}
	&.share{
		color: #fff;
		background: #FF6338;
	}

`

