import React from 'react';
import ReactDom from 'react-dom';
import Form from './Components/Form';
import './App.css';

class App extends React.Component{

    render(){
        return (
            <div className="wrapp">
                <div className="App">
                <Form />
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'));