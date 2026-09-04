import { useReducer, useState } from "react";
import { Circle, CheckCircleFill } from "react-bootstrap-icons";

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false
                    }
                ]
            };

        case "TOGGLE":
            return {
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };

        case "REMOVE":
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        default:
            return state;
    }
}

function TodoList() {
    const [state, dispatch] = useReducer(reducer, {
        todos: [
            { id: 1, text: "Learn HTML CSS and JavaScript", completed: true },
            { id: 2, text: "Learn React", completed: false },
            { id: 3, text: "Create Projects", completed: false },
            { id: 4, text: "Upload on Github", completed: false },
            { id: 5, text: "Create Portfolio Website", completed: false },
            { id: 6, text: "Create Resume", completed: false },
            { id: 7, text: "Apply for Job", completed: false }
        ]

    });
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        dispatch({ type: "ADD", payload: input });
        setInput("");
    };

    return (
        <div className="card shadow text-center border-2">
            <div className="card-body">
                <h5 className="card-title text-start">Todo List</h5>

                <form onSubmit={handleSubmit} className="mt-3 border-bottom pb-3">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter list item name"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button className="btn border text-muted" type="submit">
                            Add Todo Item
                        </button>
                    </div>
                </form>
                {state.todos.length === 0 ? (<p className="mt-3 text-muted">Currently there are no todo items</p>) : (<p className="mt-3 text-muted d-none">Currently there are no todo items</p>)}
                {state.todos.map(todo => (
                    <div key={todo.id} className="d-flex justify-content-between align-items-center mt-2 border-bottom pb-2">
                        <div className="d-flex gap-2 align-items-center ">
                            <button
                                className={`btn border-0 ${todo.completed ? "text-success" : ""}`}
                                onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
                            >
                                {todo.completed ? <CheckCircleFill /> : <Circle />}
                            </button>

                            <p className={`mb-0 ${todo.completed ? "text-decoration-line-through" : ""}`}>
                                {todo.text}
                            </p>
                        </div>

                        <button
                            className="btn btn-outline-danger"
                            onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;