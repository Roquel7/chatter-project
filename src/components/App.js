import React, { useEffect, useState } from 'react'
import { 
    HashRouter as Router,
    Route,
    Switch 
} from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import Header from './Header'
import { saveUserData } from '../actions'
//helper
import { auth } from '../services/firebase'
//pages
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import ProfilePage from '../pages/ProfilePage'
import HomePage from '../pages/HomePage'
import ChannelPage from '../pages/ChannelPage'
import InfoPage from '../pages/InfoPage'


const App = props => {
    let [loading, setLoading] = useState(true) 
    let [ authenticated, setAuth ] = useState(false)
    let [ user, setUser ] = useState(null)

    useEffect( (props) => {
        auth().onAuthStateChanged( user => {
            if (user) {
                setAuth(true)
                setUser(user)
                setLoading(false)
                saveUserData(user)            } else {
                setAuth(false)
                setUser(null)
                setLoading(false)
            }
        })
    }, [])

    return (
        <Router>
            <div>
                { loading  ? (
                    <div> Loading...</div>
                    ) : (
                    <div>
                        <Header authenticated={ authenticated } />
                        <Switch>
                            <Route exact path="/" >
                                <HomePage  authenticated={ authenticated } />
                            </Route>
                            <Route path="/login" component={ LoginPage } />
                            <Route path="/signup" component={ SignUpPage } />
        
                            <PrivateRoute authenticated={ authenticated } path="/profile" component={ProfilePage} />
                            <PrivateRoute authenticated={ authenticated } path="/home" component={HomePage} />
                            <PrivateRoute authenticated={ authenticated } path="/info" component={InfoPage} />
                            <PrivateRoute authenticated={ authenticated } path="/channels" component={ChannelPage} />
                        </Switch>
                    </div>
                )}
            </div>
        </Router>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = { saveUserData }

export default connect(mapStateToProps, mapDispatchToProps)(App)