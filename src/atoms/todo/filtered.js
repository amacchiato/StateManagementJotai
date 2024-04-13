import {atom} from 'jotai';
import {filter as filteredAtom} from './filter';
import {todos as todosAtom} from './todos';
import {FILTER} from '../../enums';

export const filtered = atom((get) => {
    const filter = get(filteredAtom);
    const todos = get(todosAtom);
    
    if (filter === FILTER.ALL) {
        return todos;
    } else if (filter === FILTER.COMPLETED) {
        return todos.filter(atom => get(atom).completed);
    } else {
        return todos.filter(atom => !get(atom).completed);
    }
});