import React from 'react';

/**
 * unsafe: componnetWillMount, componentWillUpdate, componentWillReceiveProps
 */

interface childState {
  child: string;
}

export default class child extends React.Component<any, childState> {
  constructor(props: any) {
    super(props);
    console.log('this is child constructor');
    this.state = {
      child: 'child',
    };
  }

  componentDidMount() {
    console.log('this is child componentDidMount');
  }

  componentDidUpdate(_prevProps: any, _prevState: any) {
    console.log(_prevProps);
    console.log(_prevState);
    console.log('this is child componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('this is componentWillUnmount');
  }

  render() {
    console.log('this is child render');
    return (
      <div>
        <span>{this.state.child}</span>
        <button
          type="button"
          onClick={() => {
            this.setState({
              child: `child${child.length + 1}`,
            });
          }}
        >
          button
        </button>
      </div>
    );
  }
}
