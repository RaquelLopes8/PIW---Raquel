import React, { Component } from 'react';

import './ClassesDinami.css'

class ClassesDinami extends Component {
    state = {
        blue: false
    }

    butAzul = () => {
        this.setState({
            blue: !this.state.blue,
        })
        console.log(this.state.blue)
    }
    render() { 
        //let classes;
        //if(this.state.blue==true){
          //  classes = "botao azul"
        //}else{
          //  classes = "botao"
        //}
        //return (  
        //    <button className={classes} onClick={this.butAzul}>Me clique!!</button>
        //);

        let classesList = [];
        classesList.push("botão");
        if (this.state.blue===true){
            classesList.push("azul");
        }
        let classes = classesList.join("");

        return(
            <button className={classes} onClick={this.butAzul}>
                Me clique
            </button>
        );
    }
}
 
export default ClassesDinami;