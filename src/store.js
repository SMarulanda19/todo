import { createSlice, configureStore } from '@reduxjs/toolkit'


function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

const todoSlice = createSlice({
  name: 'todolist',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, {payload}) => {
        if(!state.value){
            state.value = []
        }

      state.value.push(payload)
    },
    updateTodo: (state, {payload}) => {
       console.log(payload)
      state.value = state.value?.map(t => +t.id === +payload.id ? payload: t);
      return state;
    },
    removeTodo :(state, {payload}) => {
        if(!state.value){
            state.value = []
        }
        state.value = state.value.filter(t => +t.id !== +payload);
        return state;
    },
    cleanList: (state) => {
        state.value = []
        return state;
    }
  }
})

export const { addTodo, updateTodo, removeTodo, cleanList } = todoSlice.actions

export const store = configureStore({
  reducer: todoSlice.reducer,
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()));
