import React, { Component } from 'react'
import { render } from 'enzyme'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        return "<div><div class='QuizQuestion'></div></div>"
    }
}

export default Quiz
