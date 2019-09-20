import produce from 'immer';
console.log('카운터 리듀서 생성');
/**
 * Action Type
 * 액션 타입은 이름이 겹치지 않도록 앞에 폴더명을 작성해준다.
 */
const INCREMENT_COUNT = 'counter/INCREMENT_COUNT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

interface IncrementAction {
    type: typeof INCREMENT_COUNT;
}
interface ChangeAction {
    type: typeof CHANGE_COLOR;
    payload: {
        color: string;
    };
}
type CounterActionTypes = IncrementAction | ChangeAction;

/**
 * Action Creator
 * 액션 생성 함수는 타입을 반환한다. 필요하다면 인수도 같이 반환한다.
 */
export const incrementCount = () => {
    console.log('넘버 증가 액션 생성함수');
    return { type: INCREMENT_COUNT };
};
export const changeColor = (color: string) => {
    return {
        type: CHANGE_COLOR,
        payload: {
            color,
        },
    };
};

const initState = {
    payload: { color: 'red', number: 0 },
};
/**
 * Reducer
 * 리듀서는 상태를 직접 변경해주는 녀석이다.
 * 이전 상태와 타입을 받아서 새로운 상태를 반환한다.
 */
const counterReducer = (state = initState, action: CounterActionTypes) => {
    return produce(state, draft => {
        switch (action.type) {
            case INCREMENT_COUNT:
                draft.payload.number = draft.payload.number + 1;
                break;
            case CHANGE_COLOR:
                draft.payload.color = action.payload.color;
                break;
            default:
                break;
        }
    });
};
export default counterReducer;
//////////////////////////////////////////////////////////////////////////////
///////
//
// view => action => middleware => reducer => store => view
// 액션 생성자를 호출하고 액션생성자의 반환값이 리듀서를 호출하고 리듀서는 상태를 변경한 뒤 스토어에 저장한다.
//
///////
//////////////////////////////////////////////////////////////////////////////
