import {useAtom} from 'jotai';
import {asyncAtom} from '../atoms/async';
import {THEME} from '../enums';
import {themePersistent} from '../atoms/theme-persistent';

export function Async() {
    const [appTheme] = useAtom(themePersistent);
    const [asyncCount] = useAtom(asyncAtom);
    return (
        <div className='fixed top left'>
            <h1 className={`${appTheme
                ? THEME.LIGHT
                : THEME.DARK}`}>
                {`Async Count: ${asyncCount}`}
            </h1>
        </div>
    )
}