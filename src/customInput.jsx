import React , { Component} from 'react';
import '../style/button.scss'
export default class CustomInput extends Component {
    render() {
        return (
            <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        )
    }
}