import React from "react";



// const todoTitle = "call Family";
// const todoDesc = "Sunt adipisicing ut id ipsum minim exercitation proident proident commodo eiusmod velit anim.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yaerName = date.getFullYear();

function Card(props){
    const {todoTitle,todoDesc}= props;
    return(
        <div className="card">
            <h3 className="todoTitle">{todoTitle}</h3>
            <p className="todoDesc">{todoDesc}</p>
            <p className="cardFooter">{dateName + "/" + monthName + "/" + yaerName}</p>

        </div>
    )};
export default Card;
