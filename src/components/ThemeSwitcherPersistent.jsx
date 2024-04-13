import {useAtom} from 'jotai';
import {themePersistent} from '../atoms/theme-persistent';
import {THEME} from '../enums';

export function ThemeSwitcherPersistent() {
    const [appTheme, setAppTheme] = useAtom(themePersistent);
    
    const handleClick = () => setAppTheme(!appTheme);
    
    return (
        <div className='fixed top right'>
            <button onClick={handleClick}>
                {appTheme ? THEME.DARK : THEME.LIGHT}
            </button>
        </div>
    )
}