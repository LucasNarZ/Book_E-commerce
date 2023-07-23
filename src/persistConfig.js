import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Escolha o mecanismo de armazenamento desejado

import rootReducer from './reducer';