import React, { Component } from 'react'

export default class form extends Component {
    render() {
        return (
            <form onSubmit={this.props.WeatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить погоду</button>
            </form>
        )
    }
}
