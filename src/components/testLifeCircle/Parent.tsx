import React from 'react';
import Child from './Child';
/**
 * unsafe: componnetWillMount, componentWillUpdate, componentWillReceiveProps
 */

interface parentState {
  parent: string;
}

export default class parent extends React.Component<any, parentState> {
  constructor(props: any) {
    super(props);
    console.log('this is parent constructor');
    this.state = {
      parent: 'parent',
    };
  }

  componentDidMount() {
    console.log('this is parent componentDidMount');
  }

  componentDidUpdate(_prevProps: any, _prevState: any) {
    console.log(_prevProps);
    console.log(_prevState);
    console.log('this is parent componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('this is componentWillUnmount');
  }

  render() {
    console.log('this is parent render');
    return (
      <div>
        <span>{this.state.parent}</span>
        <button
          type="button"
          onClick={() => {
            this.setState({
              parent: `parent${parent.length + 1}`,
            });
          }}
        >
          button
        </button>
        <Child />
      </div>
    );
  }
}
