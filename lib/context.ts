import { createContext } from 'react';
import userContextI from '../models/UserContext';

let userContextDefault: userContextI = { user: null, username: null };

export const UserContext = createContext(userContextDefault);
