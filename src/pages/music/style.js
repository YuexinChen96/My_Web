import styled from 'styled-components';

export const MusicWrapper = styled.div`
	position: absolute;
	z-index: -1;
	width: 100%;
	bottom: 0;
	opacity: 0.8;
	top: 60px;
	-webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
`;

export const Header = styled.div`
	z-index: 1;
	margin: 10px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	text-align: center;
	font-family: "Comic Sans MS", "Comic Sans", cursive;
	color: #000;
`;

export const SpinCenter = styled.div`
	position: absolute;
	left: 43%;
	top: 40%;
	.img{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		opacity: 0.7;
	}
	.spin{
		display: block;
		transition: all 2s ease-in;
		transform-origin: center center;
	}
`;


/*
export const SpinCenter = styled.div`
	position: absolute;
	left: 43%;
	top: 40%;
	.img{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		opacity: 0.7;
	}
	@-webkit-keyframes rotation{
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}	
	.Rotation{
		-webkit-transform: rotate(360deg);
		animation: rotation 3s linear infinite;
		-moz-animation: rotation 3s linear infinite;
		-webkit-animation: rotation 3s linear infinite;
		-o-animation: rotation 3s linear infinite;
	}
`;*/


export const MusicNext = styled.div`
	position: absolute;
	left: 67%;
	top: 70%;
	height: 75px;
	line-height: 75px;
	width: 75px;
	text-align: center;
	color: #000;
	border: 5px solid #dcdcdc;
	border-radius: 50%;
	font-size: 25px;

`;

export const MusicStart = styled.div`
	position: absolute;
	left: 46%;
	top: 70%;
	height: 75px;
	line-height: 75px;
	width: 75px;
	text-align: center;
	color: #000;
	border: 5px solid #dcdcdc;
	border-radius: 50%;
	font-size: 25px;
`;

export const MusicPrev = styled.div`
	position: absolute;
	left: 25%;
	top: 70%;
	height: 75px;
	line-height: 75px;
	width: 75px;
	text-align: center;
	color: #000;
	border: 5px solid #dcdcdc;
	border-radius: 50%;
	font-size: 25px;
`;