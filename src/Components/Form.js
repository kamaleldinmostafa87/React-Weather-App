import React from 'react';
import Weather from './Weather';
import './form.css'

//import { render } from 'react-dom';

class Form extends React.Component{
   /* constructor(props){
        super(props)
    
    };*/
state={
        temp:'',
        city:'',
        country:'',
        hum:'',
        desc:'',
        error:''
    };
    
    getWeather=async(e)=>{
        const KEY='41db23d8b3de65f699615f9073587e94';
        e.preventDefault();
        console.log('welcome');
        const city=e.target.elements.city.value;//????
         const country=e.target.elements.country.value;
        
        const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}`)
        const data= await api.json();
        console.log(data);

        if(city &&country){
            this.setState({
                temp:data.main.temp,
                city:data.sys.name,
                country:data.sys.country,
                hum:data.main.humidity,
                desc:data.weather[0].description,
                error:''
            })}

            else{
                this.setState({
                    temp:'',
                    city:'',
                    country:'',
                    hum:'',
                    desc:'',
                    error:'Please Enter Data'
                })
            }

    };
    render(){
        return(
            <div className="f">
            <div className="form1">
            <form className="form2" onSubmit={this.getWeather}>
               <input  name="city" placeholder="city.."/>
               <input  name="country" placeholder="country.."/>
                <button>Get Data</button>
            </form>
            </div>

            <div className="weather">
             <Weather temp={this.state.temp} city={this.state.city} country={this.state.country} hum={this.state.hum} desc={this.state.desc} error={this.state.error} />
             </div>
             </div>
        )
    }
}



 export default Form;
