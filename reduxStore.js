import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './src/store';

export default ({ element }) => {
    const store = configureStore;
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {element}
            </PersistGate>
        </Provider>
    );
};
