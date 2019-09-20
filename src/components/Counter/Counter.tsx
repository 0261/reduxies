import React from 'react';

interface CounterProps {
    number: number;
    color: string;
    onChangeColor: (color: string) => any;
    onIncrementCount: () => any;
}

const Counter: React.FunctionComponent<CounterProps> = props => {
    return (
        <div>
            {props.color}
            {props.number}
            <button onClick={props.onIncrementCount}>+1</button>
            <button onClick={e => props.onChangeColor('blue')}>
                changeColor
            </button>
        </div>
    );
};

export default Counter;
