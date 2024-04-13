import { useAtom } from 'jotai';
import { filtered } from '../../atoms/todo/filtered';
import { a, useTransition } from '@react-spring/web';
import { TodoItem } from './TodoItem';

export const Filtered = (props) => {
    const [todos] = useAtom(filtered );
    const transitions = useTransition(todos, {
        keys: (todo) => todo.toString(),
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 40 },
        leave: { opacity: 0, height: 0 },
    });
    
    return transitions((style, atom) => (
        <a.div className='item' style={style}>
            <TodoItem atom={atom} {...props} />
        </a.div>
    ));
}