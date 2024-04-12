import { atom } from "jotai";
import {THEME} from '../enums';
import {atomWithStorage} from 'jotai/utils';

const theme = atom(THEME.LIGHT);
const themeWithStorage = atomWithStorage(THEME.LIGHT, false);

export { theme, themeWithStorage };
    
    