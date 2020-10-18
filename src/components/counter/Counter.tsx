import React from 'react';
import { connect } from 'react-redux';

interface ownProps {
  value: number;
  onIncreaseClick: Function;
}

class Counter extends React.Component<ownProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button
          type="button"
          onClick={() => {
            onIncreaseClick();
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

// Action Creator
const increaseAction = { type: 'increase' };

function mapStateToProps(state: any) {
  return {
    value: state.count,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
