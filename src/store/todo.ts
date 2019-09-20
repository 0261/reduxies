import produce from 'immer';
// 액션타입
const ADD = 'todo/add';
const REMOVE = 'todo/remove';
const EDIT = 'todo/edit';
const DONE = 'todo/done';
interface ADD {
    type: typeof ADD;
    payload: {
        todo: Todo;
    };
}
interface REMOVE {
    type: typeof REMOVE;
    payload: {
        index: number;
    };
}
interface EDIT {
    type: typeof EDIT;
}
interface DONE {
    type: typeof DONE;
    payload: {
        index: number;
    };
}
type TodoActions = ADD | REMOVE | EDIT | DONE;

export interface Todo {
    title: string;
    desc: string;
    isDone: boolean;
}
// 액션생성자
export const addTodo = (todo: Todo) => ({ type: ADD, payload: { todo } });
export const removeTodo = (index: number) => ({
    type: REMOVE,
    payload: { index },
});
export const doneTodo = (index: number) => ({
    type: DONE,
    payload: { index },
});

// 리듀서

const initState = [] as Array<Todo>;
const reducer = (state = initState, action: TodoActions) => {
    return produce(state, draft => {
        switch (action.type) {
            case ADD:
                draft.push(action.payload.todo);
                break;
            case REMOVE:
                draft.splice(action.payload.index, 1);
                break;
            case EDIT:
                break;
            case DONE:
                draft[action.payload.index].isDone = true;
                break;
            default:
                break;
        }
    });
};

export default reducer;
