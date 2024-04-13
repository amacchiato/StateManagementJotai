import {THEME} from '../enums';
import {atomWithStorage} from 'jotai/utils';

export const themePersistent = atomWithStorage(THEME.LIGHT, false);