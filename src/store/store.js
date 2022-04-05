import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        todos: [
            { title: 1, project: 'project1', done: false },
			{ title: 2, project: 'project2', done: true },
			{ title: 3, project: 'project3', done: false },
			{ title: 4, project: 'project4', done: true },
            { title: 5, project: 'project5', done: false},
        ]

    },

    mutations: {
        missionCompleted: function(state, todoId) {
			let todo = state.todos.indexOf(todoId);
            console.log(todo);
			state.todos[todo].done = !state.todos[todo].done;
		},

        // xóa 1 todo
        deleteTodo: function(state, todoId){
            let todoIndex = state.todos.indexOf(
                todoId
            );
            state.todos.splice(todoIndex, 1);
        },

        // thêm 1 todo
        addTodo: function(state,todoText) {
            state.todos.push(todoText);
		}
    },
    getters: {
		thisTodo: state => todoId => {
			return state.todos.find(todo => todo.id === todoId);
		},
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
			return getters.doneTodos.length;
		},
		activeTodos: state => {
			return state.todos.filter(todo => !todo.done);
		},
		activeTodosCount: (state, getters) => {
			return getters.activeTodos.length;
		}
    }
});