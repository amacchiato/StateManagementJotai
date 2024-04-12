import {ThemeSwitcher} from './components/ThemeSwitcher';
import {useAtom} from 'jotai';
import {theme} from './atoms/theme';

export default function App() {
    const [appTheme] = useAtom(theme);
    return (
        <div className={`max-height ${appTheme}`}>
           <ThemeSwitcher />
        </div>
    )
}