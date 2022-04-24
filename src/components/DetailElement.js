import React from "react";

const DetailElement = props => {
    return (
        <div className="element">
        <span className="key">{props.first} :</span> 
            <span className="value">{props.value}</span>
        </div>
    );
}

export default DetailElement;