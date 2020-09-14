import React from 'react';
//import ReactDom from 'react-dom';
import './form.css';
import './weather.css';

const Weather =(props)=>{
        return (
        
            <div>
                 { 
                    props.temp && <p>temp:{props.temp}</p>
                }
                {
                    props.city && <p>city:{props.city} </p>   
                }
                {
                    props.country &&<p> temp:{props.country}</p>
                } 
                {
                    props.hum &&<p> hum:{props.hum}</p>    
                }
                {
                    props.desc && <p>desc:{props.desc}</p>
                }
                {
                    props.error&& <p>error:{props.error}</p>

                }
            </div>
           
        )
}

export default Weather;

/*
 return (
            <form onSubmit={this.getWeather}>
                <input  name="city" placeholder="city.."/>
                <input  name="country" placeholder="country.."/>
                <button>Get Data</button>
            </form>
        )
*/