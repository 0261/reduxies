import React, { Component } from 'react';
import CounterComponent from '../../components/Counter/Counter';
import { AppState } from '../../store/modules';
import { changeColor, incrementCount } from '../../store/counter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

class Counter extends Component<{
    number: number;
    color: string;
    changeColor: (color: string) => any;
    incrementCount: () => any;
}> {
    render() {
        return (
            <div>
                <CounterComponent
                    number={this.props.number}
                    color={this.props.color}
                    onChangeColor={this.props.changeColor}
                    onIncrementCount={this.props.incrementCount}
                ></CounterComponent>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    console.log('스테이트 투 프롭스');
    console.log('스테이트가 변경되면 컴포넌트 렌더링이 다시 된다.');
    return {
        number: state.counter.payload.number,
        color: state.counter.payload.color,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    console.log('디스패치 투 프롭스');
    return {
        changeColor: (color: string) => dispatch(changeColor(color)),
        incrementCount: () => dispatch(incrementCount()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
