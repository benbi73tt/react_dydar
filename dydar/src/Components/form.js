import React from 'react'

const form =(props)=> (
            <form onSubmit={props.WeatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить погоду</button>
            </form>
        )

export default form;
