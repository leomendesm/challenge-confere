import React, { Component } from 'react'
import {
	createStore,
	applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './redux-flow/reducers'

const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
				</div>
			</Provider>
		)
	}
}

export default App
