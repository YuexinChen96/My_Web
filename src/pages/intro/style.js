import styled from 'styled-components';

export const Ta_c = styled.div`
	

	@-webkit-keyframes rotation{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(360deg);}
	}

	.Rotation{
	-webkit-transform: rotate(360deg);
	animation: rotation 8s linear infinite;
	-moz-animation: rotation 8s linear infinite;
	-webkit-animation: rotation 8s linear infinite;
	-o-animation: rotation s linear infinite;
	}

	.img{
		border-radius:50%;
		opacity: 0.7;
	}
`;