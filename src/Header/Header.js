import React, {Component} from 'react'
import userLogo from '../userLogo.svg'
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-lignt">
                <div className="navbar-collapse collapse" id="collapsingNavbar2">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsingNavbar2">
                    <span className="navbar-toggler-icon my-toggler"></span>
                </button>
                <img src={userLogo} alt="user-logo"/>
            </nav>
        )
    }
}