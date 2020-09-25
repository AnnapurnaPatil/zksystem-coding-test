import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login/Login'
import Overview from './Overview/Overview'
import {machineProgressData} from './data'
import StatusDetails from './StatusDetails/StatusDetails'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/details/:id">
                    <StatusDetails />
                </Route>
                <Route path="/overview">
                    <Overview data={machineProgressData}/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
