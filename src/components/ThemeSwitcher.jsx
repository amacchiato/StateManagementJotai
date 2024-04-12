import {useAtom} from 'jotai';
import {theme} from '../atoms/theme';
import {THEME} from '../enums';

export function ThemeSwitcher() {
    const [appTheme, setAppTheme] = useAtom(theme);
    
    const handleClick = () => setAppTheme(appTheme === THEME.LIGHT
        ? THEME.DARK
        : THEME.LIGHT
    );
    
    return (
        <div className='theme-switcher'>
            <button onClick={handleClick}>
                {appTheme === THEME.LIGHT
                    ? THEME.DARK
                    : THEME.LIGHT}
            </button>
        </div>
    )
}