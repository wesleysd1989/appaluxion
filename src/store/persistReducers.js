import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'appaluxion',
      storage: AsyncStorage,
      whitelist: ['gallery'],
    },
    reducers,
  );
  return persistedReducer;
};
