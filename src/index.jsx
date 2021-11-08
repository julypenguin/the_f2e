import React from "react"
import { render } from "react-dom"
import { Provider, ReactReduxContext } from 'react-redux'

import configureStore, { history } from "./store"
import rootSaga from "./sagas"
import App from './components/App'

const store = configureStore();
// start saga
store.runSaga(rootSaga);

const rootElement = document.getElementById("root");

render(
    <Provider store={store} context={ReactReduxContext}>
        <App history={history} />
    </Provider>,
    rootElement
)
