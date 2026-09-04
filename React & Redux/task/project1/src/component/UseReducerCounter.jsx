import { act, Fragment, useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT_1":
            if (state >= 10) {
                alert("Allow only till 10 Increment")
                return state;
            }
            return state + 1;
        case "DECREMENT_1":
            if (state <= 0) {
                alert("Allow only till 0 Decrement")
                return state;
            }
            return state - 1;
        case "INCREMENT_2":
            if (state >= 9) {
                alert("Allow only till 10 Increment")
                return state;
            }
            return state + 2;
        case "DECREMENT_2":
            if (state <= 1) {
                alert("Allow only till 0 Decrement")
                return state;
            }
            return state - 2;
        case "RESET":
            return 0;

        default:
            return state;
    }
}
function UseReducerCounter() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <Fragment>

            <h2 className="text-start text-danger fw-normal mt-2">Counter ( useReducer Hook ) = {count}</h2>
            <div className="d-flex  gap-4 align-items-center border-top py-3 ">
                <button onClick={() => dispatch({ type: "INCREMENT_1" })} className="btn border border-2 border-danger text-danger">Increment By 1</button>
                <button onClick={() => dispatch({ type: "DECREMENT_1" })} className="btn border border-2 border-danger text-danger">Decrement By 1</button>
                <button onClick={() => dispatch({ type: "INCREMENT_2" })} className="btn border border-2 border-danger text-danger">Increment By 2</button>
                <button onClick={() => dispatch({ type: "DECREMENT_2" })} className="btn border border-2 border-danger text-danger">Decrement By 2</button>
                <button onClick={() => dispatch({ type: "RESET" })} className="btn border border-2 border-danger text-danger">Reset</button>
            </div>
        </Fragment>
    )
}
export default UseReducerCounter