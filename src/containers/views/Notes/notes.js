import React, {Component} from 'react';
import png from './notes.png'

class Notes extends Component{
    render(){
        return(
            <div>
                <h1>Hello from Notes</h1>
                <br/>
                <img src={png} alt="notes"/>
            </div>
        )
    }
}

export default Notes;