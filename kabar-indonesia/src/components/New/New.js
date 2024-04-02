import React from "react";
import "./New.css"
import { NavLink } from "react-router-dom";


const New = (props) => {
    const { title, description, thumbnail } = props;
    return (
        <div class="new">
            <img src={thumbnail} alt=""/>
            <h3 className="title">
                <NavLink to={`/detail/${title}`}>{title}</NavLink>
            </h3>
            <p className="des">{description}</p>
        </div>
    );
};

export default New;