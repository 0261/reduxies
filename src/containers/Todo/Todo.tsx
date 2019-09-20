import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoComponent from '../../components/Todo/Todo';

import { AppState } from '../../store/modules';
import { addTodo, Todo, removeTodo, doneTodo } from '../../store/todo';
import { Dispatch } from 'redux';

interface Props {
    todo: Array<Todo>;
    addTodo: typeof addTodo;
    removeTodo: typeof removeTodo;
    doneTodo: typeof doneTodo;
}

export class TodoContainer extends Component<Props> {
    render() {
        return (
            <div>
                <TodoComponent
                    todo={this.props.todo}
                    onAddTodo={this.props.addTodo}
                    onRemoveTodo={this.props.removeTodo}
                    onDoneTodo={this.props.doneTodo}
                ></TodoComponent>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    todo: state.todo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: (todo: Todo) => dispatch(addTodo(todo)),
    removeTodo: (index: number) => dispatch(removeTodo(index)),
    doneTodo: (index: number) => dispatch(doneTodo(index)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoContainer);
