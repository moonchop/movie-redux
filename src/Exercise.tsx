import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 함수 정의
function increase() {
  return {
    type: INCREASE,
  };
}
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text: string) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item: {id:number,text:string}) => {
  return {
    type: ADD_TO_LIST,
    item,
  };
};

interface IAction {
  type: string;
  [key: string]: any;
}

//리듀서 만들기:변화를 일으키는 함수임. 두가지 파라미터를 받아옴.

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      //catch가 아니라 기존 state를 반환하도록 작성
      return state;
  }
}

//스토어 만들기. 현재의 앱상태와 리듀서, 몇가지 내장 함수들이 있음.

const store = createStore(reducer);

//현재 store 안에 들어있는 상태를 조회.
console.log(store.getState());

//스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const linstner = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(linstner);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕1'));
store.dispatch(addToList({id:1,text:'와우'}));
