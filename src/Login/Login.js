import React from 'react'
import {useHistory} from "react-router-dom"
import './Login.css'

export default function Login() {
    const history = useHistory()

    function handleClick() {
        history.push("/overview")
    }

    return (
        <form className="form-signin">
            <div className="text-center m-5">
                <h5>ZkSystems</h5>
            </div>
            <div className="radio-toolbar employee-type-check">
                <input type="radio" id="prufer" name="options"/>
                <label htmlFor="prufer" className="w-50 prufer">Prufer</label>
                <input type="radio" id="worker" name="options"/>
                <label htmlFor="worker" className="w-50 worker">Worker</label>
            </div>
            <div className="form-group">
                <label>Standort</label>
                <input type="email" className="form-control" id="username"
                       aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Passwort</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-color" onClick={handleClick}>Anmelden</button>
        </form>
    )
}