import React from 'react';
import { connect } from 'react-redux';

interface stateProps {
  value: any;
  onIncreaseClick: Function;
  onDecreaseClick: Function;
}

interface ownProps {}

interface dispatchProps {}

type Iprops = stateProps & ownProps & dispatchProps;

class Counter extends React.Component<Iprops> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props;
    return (
      <div>
        <span>{value.count}</span>
        <button
          type="button"
          onClick={() => {
            onIncreaseClick();
          }}
        >
          Increase
        </button>
        <button
          type="button"
          onClick={() => {
            onDecreaseClick();
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
}

// Action Creator
const increaseAction = { type: 'increase' };
const decreaseAction = { type: 'decrease' };

function mapStateToProps(state: any) {
  return {
    value: state.count,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
  };
}

// eslint-disable-next-line import/prefer-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
