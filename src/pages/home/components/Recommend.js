import React, { PureComponent } from 'react';
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends PureComponent{
	render(){
		return(
			<RecommendWrapper>
				<RecommendItem color_code="144,238,144">
				</RecommendItem>
				<RecommendItem color_code="240,248,255">
				</RecommendItem>
				<RecommendItem color_code="255,240,245">
				</RecommendItem>
				<RecommendItem color_code="255,255,240">
				</RecommendItem>
			</RecommendWrapper>
		)
	}
}

export default Recommend;