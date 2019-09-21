import React from 'react';
import CounterContainer from '../containers/Counter/Counter';
import TodoContainer from '../containers/Todo/Todo';
import CustomComponent from './Custom/Custom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to='/'>counter</Link>
                    </li>
                    <li>
                        <Link to='/todo'>todo</Link>
                        <Link to='/custom'>custom</Link>
                    </li>
                </ul>
                <Route exact path='/' component={CounterContainer}></Route>
                <Route path='/todo' component={TodoContainer}></Route>
                <Route path='/custom' component={CustomComponent}></Route>
            </BrowserRouter>
        </div>
    );
};

export default App;
