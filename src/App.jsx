import {useAtom} from 'jotai';
import {themePersistent} from './atoms/theme-persistent';
import {ThemeSwitcherPersistent} from './components/ThemeSwitcherPersistent';
import {THEME} from './enums';
import {Suspense} from 'react';
import {Async} from './components/Async';
import {TodoList} from './components/Todo/TodoList';

export default function App() {
    const [appTheme] = useAtom(themePersistent);
    return (
        <div className={`max-height ${appTheme
            ? THEME.LIGHT
            : THEME.DARK}`}>
           <ThemeSwitcherPersistent />
            <Suspense fallback={<span>Loading...</span>}>
                <Async />
            </Suspense>
            <TodoList />
        </div>
    )
}