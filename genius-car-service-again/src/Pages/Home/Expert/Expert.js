import React from 'react';

const Expert = (props) => {

    const { name, img } = props.expert

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-5">
            <div class="card text-center" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;