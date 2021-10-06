import React , { Component} from 'react';
import '../style/button.scss'
export default class CustomButton extends Component {
    render() {
        return (
            <button onClick={() => console.log('Custom Button!!')}>Custom Button</button>
        )
    }
}