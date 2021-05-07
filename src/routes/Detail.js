import React from "react";

class Detail extends React.Component{
	componentDidMount(){
		const { location, history } = this.props;
		// console.log(location.state);
		if(location.state === undefined) {
			// 영화를 선택하지 않고 주소창에 바로 /movie-detail 타이핑해서 들어오는 경우
			history.push("/");
		}
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			return <span>{location.state.title}</span>
		} else{
			return null;
		}
		
	}
}

export default Detail;