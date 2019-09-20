import React from 'react';
import CounterContainer from '../containers/Counter/Counter';
import TodoContainer from '../containers/Todo/Todo';
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
                    </li>
                </ul>
                <Route exact path='/' component={CounterContainer}></Route>
                <Route path='/todo' component={TodoContainer}></Route>
            </BrowserRouter>
        </div>
    );
};

export default App;
