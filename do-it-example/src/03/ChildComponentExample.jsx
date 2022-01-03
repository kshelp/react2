import React from 'react';
//import ChildComponent from './ChildComponent';
import ChildComponent from './ChildComponent2';

class App extends React.Component {
  render() {
    const array = [1,2,3];
    const obj = {name:'제목', age:30};
    const node = <h1>노드</h1>;
    const func = () => { console.log('메시지'); };
    return (
      <ChildComponent 
          boolValue={true}
          numValue={1}
          arrayValue={array}
          objValue={obj}
          nodeValue={node}
          funcValue={func}
          requiredStringValue="문자"
      />
    );
  }
}

export default App;
