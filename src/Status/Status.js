import React, {Component} from 'react'
import './Status.css'

export default class Status extends Component {

    getIconStyle = (progress) => progress === 100 ? '#50963c' : '#2d41d7'
    getProgressStyle = (progress) => {
        if (progress < 90) return '#2d41d7'
        else if (progress > 90 && progress < 100) return '#d7aa55'
        else return '#50963c'
    }


    render() {
        const {progress} = this.props
        return (
            <ol className="ProgressBar">
                <li className="ProgressBar-step">
                    <div className="ProgressBar-step-container">
                        <span className="ProgressBar-step-before"
                              style={{width: `${progress.preAssembly}%`, backgroundColor: '#50963c'}}/>
                    </div>
                    <span className="ProgressBar-icon" style={{backgroundColor: '#50963c'}}/>
                </li>
                <li className="ProgressBar-step">
                    <div className="ProgressBar-step-container">
                        <span className="ProgressBar-step-before" style={{
                            width: `${progress.finalAssembly}%`,
                            backgroundColor: this.getProgressStyle(progress.finalAssembly)
                        }}/>
                    </div>
                    <span className="ProgressBar-icon"
                          style={{backgroundColor: this.getIconStyle(progress.preAssembly)}}/>
                </li>
                <li className="ProgressBar-step">
                    <div className="ProgressBar-step-container">
                        <span className="ProgressBar-step-before" style={{
                            width: `${progress.commissioning}%`,
                            backgroundColor: this.getProgressStyle(progress.commissioning)
                        }}/>
                    </div>
                    <span className="ProgressBar-icon"
                          style={{backgroundColor: this.getIconStyle(progress.finalAssembly)}}/>
                </li>
            </ol>
        )
    }
}