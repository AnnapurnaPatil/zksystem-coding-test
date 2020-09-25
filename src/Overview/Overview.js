import React, {Component} from 'react'
import Header from '../Header/Header'
import MachineStatus from '../MachineStatus/MachineStatus'
import './Overview.css'

export default class Overview extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                {this.props.data.map(data => (
                    <div className="overview mx-auto pl-4 pr-4 pt-5 pb-5">
                        <div className="status-container mb-0 pt-3">
                            <p className="font-weight-light m-0 pl-3">{data.stage}</p>
                            {data.engines.map(engine => (
                                <MachineStatus {...engine}/>
                            ))}
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}