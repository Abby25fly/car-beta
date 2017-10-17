import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import "./damage.css";

class Camera extends Component {
    constructor(props){
        super(props)
        this.flag=true;
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        var video = document.getElementById('video');
        
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            });
        }

        var canvas = document.getElementById('canvas');
        var video = document.getElementById('video');
        const context = this.refs.canvas.getContext('2d');

        document.getElementById("snap").addEventListener("click", ()=> {
            context.drawImage(video, 0, 0, 380, 300);
            this.flag=false;
        });
    }
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <video id="video" width="380" height="300" autoPlay></video>
                    <button className="col-xs-12" id="snap">Snap Photo</button>
                    <canvas ref="canvas" id="canvas" width="380" height="300"></canvas>
                </div>
            </div>
        </div>
        );
    };
}

export default Camera;
