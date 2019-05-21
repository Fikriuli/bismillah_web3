import React, {Component} from 'react';
import './App.css';
import Main from './components/page/Main';
import MyAppBar from "./components/MyAppBar";
import {Container} from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div>
                    <MyAppBar className="menu"/>
                    <Main/>
            </div>
        )
    }
}

export default App;
