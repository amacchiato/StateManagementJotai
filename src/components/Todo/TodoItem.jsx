import {useAtom} from 'jotai';
import { CloseOutlined } from '@ant-design/icons';

export const TodoItem = ({ atom, remove }) => {
    const [item, setItem] = useAtom(atom);
    const toggleCompleted = () => setItem((props) => ({
        ...props,
        completed: !props.completed,
    }));
    
    return (
        <>
            <input
                type='checkbox'
                checked={item.completed}
                onChange={toggleCompleted}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>
                {item.title}
            </span>
            <CloseOutlined onClick={() => remove(atom)}  />
        </>
    )
}