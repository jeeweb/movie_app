import React from "react";

class Detail extends React.Component {
    componentDidMount(){
        //console.log(this.props)
        const { location, history } = this.props;
        //console.log(location.state) 현재 클릭한 영화의 정보를 가져옴
        if( location.state === undefined ) {
            history.push("/");
            // 영화를 클릭하지 않고 주소창에 주소를 직접 입력하면 홈화면으로 이동 시킴
        }
    };
    render() {
        const { location } = this.props;
        
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
export default Detail;