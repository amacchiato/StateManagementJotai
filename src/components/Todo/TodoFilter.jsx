import { useAtom } from 'jotai';
import { filter } from '../../atoms/todo/filter';
import { Radio } from 'antd';
import { FILTER } from "../../enums";

export const TodoFilter = () => {
    const [todoFilter, setTodoFilter] = useAtom(filter);
    
    return (
        <Radio.Group onChange={(e) => setTodoFilter(e.target.value)} value={todoFilter}>
            <Radio value={FILTER.ALL}>{FILTER.ALL}</Radio>
            <Radio value={FILTER.COMPLETED}>{FILTER.COMPLETED}</Radio>
            <Radio value={FILTER.UNCOMPLETED}>{FILTER.UNCOMPLETED}</Radio>
        </Radio.Group>
    )
}