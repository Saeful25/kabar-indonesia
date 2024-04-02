import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailNew } from "./../../api"; 

const Detail = () => {
    const { id } = useParams();
    const [New, setNew] = useState(null);

    useEffect(() => {
        const fetchNew = async () => {
            try {
                const newData = await getDetailNew(id);
                setNew(newData);
            } catch (error) {
            }
        };

        fetchNew();
    }, [id]);

    if (!New) {
        return <div>Loading...</div>;
    }

    const { title, description,thumbnail } = New;

    return (
        <div className="container">
            <section className="hero">
              <div className="hero-left">
                <h2 className="hero-title"> {title}</h2>
                <p className="hero-description">
                Overview: {description}
                </p>
                <p className="hero-button">Watch</p>
              </div>
              <div class="hero-right">
                <img className="hero-image" src={thumbnail} alt={title} />
              </div>
            </section>
        </div>
    );
};

export default Detail;