/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = (text:string) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
});
export const toggleTodo = (id:number) => ({
  type: TOGGLE_TODO,
  id
});

const initialState=[
    {
        id: 1,
        text: '예시',
        done: false
    }
];

interface IAction{
    type:string;
    id?:number;
    todo:ITodo[];
}
interface ITodo{
    id:number;
    text:string;
    done:boolean;
}
export default function todos(state = initialState, action:IAction) {
    switch (action.type) {
      case ADD_TODO:
        return state.concat(action.todo);
      case TOGGLE_TODO:
        return state.map(
          todo =>
            todo.id === action.id // id 가 일치하면
              ? { ...todo, done: !todo.done } // done 값을 반전시키고
              : todo // 아니라면 그대로 둠
        );
      default:
        return state;
    }
  }