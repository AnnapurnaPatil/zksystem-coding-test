import React from 'react'
import './MachineStatus.css'
import Status from '../Status/Status'
import {useHistory} from 'react-router-dom'

export default function MachineStatus(props) {
    const history = useHistory()

    function handleClick(serialNumber) {
        history.push(`/details/${serialNumber}`)
    }

    return (
        <div className="container engine-status-container" id={props.serialNumber}>
            <div className="row align-items-center">
                <div className="col-md-1 p-1">
                    <img className="status-image" src={props.imageUrl} alt="machine"/>
                </div>
                <div className="col-md-3 p-0">
                    <p className="font-weight-bold m-0">{props.name}</p>
                    <p className="font-weight-light text-muted m-0">SN: {props.serialNumber}</p>
                    <p className="font-weight-light  text-muted m-0">{props.status}</p>
                </div>
                <div className="col-md-6 p-0">
                    <Status progress={props.progress}></Status>
                </div>
                <div className="col-md-2 p-0 text-center">
                    <button type="button" className="btn btn-link light-blue" onClick={() => handleClick(props.serialNumber)}>
                        >
                    </button>
                </div>
            </div>
        </div>
    )
}