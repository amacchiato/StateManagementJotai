import {atom, useSetAtom} from 'jotai';
import {todos} from '../../atoms/todo/todos';
import {TodoFilter} from './TodoFilter';
import {Filtered} from './Filtered';

export const TodoList = () => {
    const setTodos = useSetAtom(todos);
    const remove = (todo) => setTodos((prev) => prev.filter((item) => item !== todo));
    const add = (e) => {
        e.preventDefault();
        const title = e.currentTarget.title.value;
        e.currentTarget.title.value = '';
        setTodos((prev) => [...prev, atom({ title, completed: false })]);
    }

    return (
        <div className='todo-list'>
            <h1>Todos</h1>
            <form onSubmit={add}>
                <TodoFilter />
                <input name='title' placeholder='Enter a todo...' />
                <Filtered remove={remove} />
            </form>
        </div>
    )
}