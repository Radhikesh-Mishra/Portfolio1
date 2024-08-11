import React from "react";

const Card = (props) => {
    return (
        <div className="card-container" style={{ backgroundColor: 'white', borderRadius: '22px', margin: '0 0 100px 70px', padding: '20px', width: '85%' }}>
            <h2 className="w3-white w3-border-bottom w3-border-black w3-center" style={{ margin: '0 20px' }}><strong>{props.title}</strong></h2>
            <p className="w3-white w3-center">{props.desc}</p>
            <p className="w3-white"><strong className="w3-white">Technologies Used: </strong>{props.tech}</p>
            <a className="w3-white" target="_blank" style={{ textDecoration: 'none' }} href={props.link}><button className="w3-teal" style={{ border: 'none', padding: '5px 15px' }}>GitHub Link</button></a>
        </div>
    )
};

export default Card;
