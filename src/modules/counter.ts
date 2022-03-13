//다른 모듈과 액션 이름이 중복되는 것을 방지.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수
export const setDiff  = (diff:number) =>({type:SET_DIFF, diff});
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

//초기 상태 선언
const initialState = {
    number:0,
    diff:1
};
interface IAction{
    type:string;
    diff?:number;
}
//리듀서
export default function counter(state=initialState,action:IAction){
    switch(action.type){
        case SET_DIFF:
            return{
                ...state,
                diff:action.diff
            };
        case INCREASE:
            return{
                ...state,
                number:state.number + state.diff
            };
        case DECREASE:
            return{
                ...state,
                number:state.number - state.diff
            }
    }
}