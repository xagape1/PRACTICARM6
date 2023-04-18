import { createSlice } from "@reduxjs/toolkit";
const initialState = {

    formulari: [],

    isSaving: false,

    error: "",

    isLoading: false,

    todos: [],

    // todo: {
    //     name: "",
    //     description: "",
    //     file: { filepath: "" },
    //     author: { name: "" },
    //     latitude: 0,
    //     longitude: 0,
    //     visibility: 0,
    // },

    page: 1,

    pages: [],

    // filter: { description: "", author: "" },

}
export const todosSlice = createSlice({

    name: "todo",

    initialState,

    reducers: {

        setisSaving: (state, action) => {
            state.isSaving = action.payload;
        },

        setisLoading: (state, action) => {

            state.isLoading = action.payload;
        },

        setError: (state, action) => {

            state.error = action.payload

        },

        setTodo: (state, action) => {

            state.todo = action.payload

        },
        setTodos: (state, action) => {

            state.todos = action.payload

        },
        setPage: (state, action) => {

            state.page = action.payload

        },
        setPages: (state, action) => {

            state.pages = action.payload

        },
        setFilter: (state, action) => {

            state.filter = action.payload

        }

    }

});

export const { setisSaving, setisLoading, setTodo, setError, setTodos, setPages, setPage, setFilter } = todosSlice.actions;

export default todosSlice.reducer
