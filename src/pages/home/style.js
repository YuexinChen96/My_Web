import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img{
		width: 625px;
		height: 350px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 30px;
	margin-bottom: 18px;
	background: #f7f7f7;
	padding-right: 10px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const MovieList = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic{
		display: block;
		margin-top: 10px;
		width: 150px;
		height: 120px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 440px;
	float: left;
	.title {
		font-family: "Comic Sans MS", "Comic Sans", cursive;
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333
	}
	.desc{
		margin-top: 8px;
		line-height: 20px;
		font-size: 13px;
		color: #999
	}
`;

export const GifBox = styled.div`
	margin-top: 60px;
	width: 300px;
	height: 170px;
	background-color: red;
	background: url(http://spider.nosdn.127.net/dc15cdc609908a9d9afa703420042f1e.gif);
	background-size: contain;
`;


export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-top: 8px;
	background-color:rgb(${(props)=>props.color_code});
	background-size: contain;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`

export const BackTop = styled.div`
	position: fixed;
	right: 80px;
	bottom: 80px;
	border-radius: 30px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;

`