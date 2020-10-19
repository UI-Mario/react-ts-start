/* eslint-disable no-use-before-define */
import React from 'react';
// 这是抽什么风，告诉我never used
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReduxState } from 'Src/redux/reducer';
import { actionDecrease, actionIncrease } from './action';

// 真正从父组件获取的props
interface CounterProps { }

interface CounterState {}

type Iprops = ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>
  & CounterProps;

class Counter extends React.Component<Iprops, CounterState> {
  constructor(props: Iprops) {
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

function mapStateToProps(state: ReduxState) {
  return {
    value: state.count,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onIncreaseClick: () => dispatch(actionIncrease()),
    onDecreaseClick: () => dispatch(actionDecrease()),
  };
}

// eslint-disable-next-line import/prefer-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
