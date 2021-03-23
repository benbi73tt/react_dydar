import React from 'react'

// export default class weather extends Component {
//     render() {
//         return (
//     <div>
//     {this.props.city?     
//         <span>                
//             <p>Местоположение: {this.props.city}, {this.props.country}</p>
//             <p>Температура: {this.props.temp}</p>
//             <p>Давление: {this.props.pressure} </p>
//             <p>Заход солнца: {this.props.sunset}</p>
//         </span>
//         :<p>{this.props.error}</p>
//     }

// </div>

//         )
//     }
// }
const Weather = props => (
    <div className="infoWeath">
        {props.city?     
            <span>                
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure} </p>
                <p>Заход солнца: {props.sunset}</p>
            </span>
            :<p className="error">{props.error}</p>
        }

    </div>
    )
export default Weather;
