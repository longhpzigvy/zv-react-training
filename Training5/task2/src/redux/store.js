import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddle from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import rootSaga from './saga'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authorization']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddle()
const store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)))

const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }
