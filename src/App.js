import React, { Component } from 'react'
import {
	createStore,
	applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './redux-flow/reducers'
import SpaceForm from './containers/SpaceForm'
import SectionForm from './containers/SectionForm'
import Content from './containers/Content'
import Header from './components/Header'
import Form from './components/Form'
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
				<Header>Skore API</Header>
				<Form>
					<SpaceForm />
					<SectionForm />
				</Form>
				<Content />
				</div>
			</Provider>
		)
	}
}

export default App
