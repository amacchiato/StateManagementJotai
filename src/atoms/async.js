import {atom} from 'jotai';

const counter = atom(1);
export const asyncAtom = atom(async (get) => get(counter) * 5);