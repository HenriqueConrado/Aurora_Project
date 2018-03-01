import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/dado.css'

import React from 'react'
class Dado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolando: false
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState(...this.state, {rolando: !this.state.rolando})
    }

    render() {

        let rolando = this.state.rolando
        let style = null
        if (rolando){
            console.log("ok")
            style = (
                <style>
                    {"@keyframes spin {" +
                        "0% { transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }" +
                        "16% { transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg); }" +
                        "33% { transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg); }" +
                        "50% { transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }" +
                        "66% { transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg); }" +
                        "83% { transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg); }" +
                        "100% { transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }" +
                        "}" +
                    "@keyframes spin-duplicate {" +
                        "0% { transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }" +
                        "16% { transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg); }" +
                        "33% { transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg); }" +
                        "50% { transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }" +
                        "66% { transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg); }" +
                        "83% { transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg); }" +
                        "100% { transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }" +
                    "}" +
                    "@keyframes roll {" +
                        "0% { transform: translate3d(-200px,-50px,-400px) }" +
                        "12% { transform: translate3d(0px,0,-100px) }" +
                        "25% { transform: translate3d(200px,-50px,-400px) }" +
                        "37% { transform: translate3d(0px,-100px,-800px) }" +
                        "50% { transform: translate3d(-200px,-50px,-400px) }" +
                        "62% { transform: translate3d(0px,0,-100px) }" +
                        "75% { transform: translate3d(200px,-50px,-400px) }" +
                        "87% { transform: translate3d(0px,-100px,-800px) }" +
                        "100% { transform: translate3d(-200px,-50px,-400px) }" +
                    "}"}
                </style>
            )
        }

        return (
            <div>
                {style != null ? style : ""}
                <div id="background"></div>
                <div id="wrapper">
                    <input id="secondroll" name="roll" type="checkbox" />
                    <input id="roll" name="roll" type="checkbox" />
                    <label htmlFor="roll">Roll it!</label>
                    <label htmlFor="secondroll" onClick={this.onClick}><span>Stop!</span></label>
                    <div id="platform">
                        <div id="dice">
                            <div className="side front">
                                <div className="dot center"></div>
                            </div>
                            <div className="side front inner"></div>
                            <div className="side top">
                                <div className="dot dtop dleft"></div>
                                <div className="dot dbottom dright"></div>
                            </div>
                            <div className="side top inner"></div>
                            <div className="side right">
                                <div className="dot dtop dleft"></div>
                                <div className="dot center"></div>
                                <div className="dot dbottom dright"></div>
                            </div>
                            <div className="side right inner"></div>
                            <div className="side left">
                                <div className="dot dtop dleft"></div>
                                <div className="dot dtop dright"></div>
                                <div className="dot dbottom dleft"></div>
                                <div className="dot dbottom dright"></div>
                            </div>
                            <div className="side left inner"></div>
                            <div className="side bottom">
                                <div className="dot center"></div>
                                <div className="dot dtop dleft"></div>
                                <div className="dot dtop dright"></div>
                                <div className="dot dbottom dleft"></div>
                                <div className="dot dbottom dright"></div>
                            </div>
                            <div className="side bottom inner"></div>
                            <div className="side back">
                                <div className="dot dtop dleft"></div>
                                <div className="dot dtop dright"></div>
                                <div className="dot dbottom dleft"></div>
                                <div className="dot dbottom dright"></div>
                                <div className="dot center dleft"></div>
                                <div className="dot center dright"></div>
                            </div>
                            <div className="side back inner"></div>
                            <div className="side cover x"></div>
                            <div className="side cover y"></div>
                            <div className="side cover z"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dado