import React from 'react';
import {currentTime, timeDelta} from "../utils/time.js";
import generateWords from "../utils/words.js";

export default class TypingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};

        // How many characters to display to either side of the current char
        this.window = 20;
        // Decimal precision for accuracy
        this.precision = 1;
        
        // Text that has been correctly typed
        this.previousText = "";
        // Upcoming text
        this.nextText = generateWords(this.window * 2);
        // The current character to be typed
        this.currentChar = this.nextText.charAt(0);
        this.nextText = this.nextText.slice(1);
        // The current typos
        this.errorText = "";

        this.wordCount = 0;
        this.errors = 0;
        this.keyPresses = 0;
        
        this.startTime = null;
        this.wpm = 0;
        this.accuracy = (100).toFixed(this.precision);
        
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }




    handleKeyDown(event) {
        if (!this.startTime) {
            this.startTime = currentTime();
        }
        this.keyPresses++;
        if (event.key === this.currentChar && this.errorText.length == 0) {
            if (this.nextText.charAt(0) == " ") {
                this.wordCount++;
            }
            this.previousText += this.currentChar;
            this.currentChar = this.nextText.charAt(0);
            this.nextText = this.nextText.slice(1);
            if (this.nextText.split(" ").length <= this.window) {
                this.nextText += ' ' + generateWords(this.window);
            }
        } else {
            if (event.key === "Backspace" || event.key === "Delete") {
                this.errorText = this.errorText.substring(0, this.errorText.length - 1);
                this.keyPresses--;
            } else if (event.key.length == 1) {
                this.errors++;
                this.errorText += event.key;
            }
        }

        this.wpm = (this.wordCount / timeDelta(this.startTime)).toFixed(0) || 0;
        this.accuracy = ((1 - this.errors / this.keyPresses) * 100).toFixed(this.precision);
        this.setState({});
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }
    
    render () {
        return (
            <div className="typing">
                <span id="previousText">{this.previousText.substring(this.previousText.length-(Math.max(this.window - this.errorText.length, 0)))
                    .padStart((Math.max(this.window - this.errorText.length, 0)))}</span>
                <span id="errorText">{this.errorText.slice(-this.window)}</span>
                <span id="currentChar">{this.currentChar}</span>
                <span id="nextText">{this.nextText.substring(0, this.window)}</span>
                <div id="stats"><span id="wpm">{this.wpm.toString().padStart(3) || 0} words/minute</span><span id="accuracy">{this.accuracy} %</span></div>
            </div>
        );
    }
}