import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: "no data",
    };
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData를 호출한다.
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    const { formData } = this.state;
    // this.state.loading은 현재 true 이다.
    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    // 이후 호출될 출력함수에서의 this.state.loading은 false이다.
    console.log("loading값", this.state.loading);
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능하다. */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
