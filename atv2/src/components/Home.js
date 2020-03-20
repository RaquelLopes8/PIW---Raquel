import React, { Component } from 'react';
import Nav from './commons/Nav';
import GaleriaPost from './GaleriaPost';
import './Post.css';

class Home extends Component {
    
    render() { 
        return ( 
            <div>
                <Nav></Nav>
                <GaleriaPost></GaleriaPost>
            </div>
         );
    }
}
 
export default Home