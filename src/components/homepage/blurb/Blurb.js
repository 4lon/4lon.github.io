import React from "react";
import Photo from './Alon-Circle.png';
import Description from './Description'
import "./Blurb.css";


const Title = (props) => {

    return (
        <div className="header">
            <span>
                <img className="photo" src={Photo} alt="Circular portrait of Alon Nusem"></img>
                <h1 className="title">Alon Nusem</h1>
            </span>
        </div>
    );
}


const Blurb = () => {

    return (
        <div className="blurb">
            <Title/>
            <p className="description">
                {Description}
            </p>
        </div>
    );
}

export default Blurb;