import React from "react";

const Info =(props) => {
    return(
        <div className="info" key={props.id}>
            <h1>{props.group}</h1>
            {
                props.names.map((name)=>(<p>{name}</p>))
            }
        </div>
    )
}

export default Info