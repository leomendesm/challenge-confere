import React, { Component } from 'react'
import {
	createStore,
	applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './redux-flow/reducers'
import SpaceForm from './containers/SpaceForm'

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
				<SpaceForm />
				</div>
			</Provider>
		)
	}
}

export default App
