import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//components
import App from './components/App'

// import reducers from './reducers'

// const store = createStore(reducers)

ReactDOM.render(
        <App />,
    document.querySelector('#root')
)






//we will create reducers for creating/deleting a channel, and once youre inside teh channel, to create a message