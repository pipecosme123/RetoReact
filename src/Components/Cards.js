import React from 'react';
//import imagen from './../img/Iron_Man.jpg'

const Cards = () => {

    /*fetch("https://run.mocky.io/v3/2e850170-dc59-4389-9499-2e896cc58338").then((resolve) => {
        return resolve.json();
    }).then((data) => {
        console.log("DATA!! ", this.getData(data));
        this.setState({
            data: this.getData(data)
        });
    });*/

    fetch("https://run.mocky.io/v3/55dc8d2f-5cae-467d-bc32-3579bc4f4c1e").then((resolve)=>{
            return resolve.json();
        }).then((data)=>{
            console.log("DATA!! ",data);            
        });

    return(
        <div>
        <div>
            <img src="./../" alt=""/>
        </div>
        <div>
            <h4>Nombre</h4>
            <h5>Profesion</h5>
            <span>correo</span><br/>
            <a href="">correo</a>
        </div>
    </div>
    );
}

export default Cards;