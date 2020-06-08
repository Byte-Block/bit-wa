import React from 'react';
import PropTypes from 'prop-types';

const SingleShowCard = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 py-3">
            <div className="card">
                <img src={props.showImageURL} className="card-img-top" alt={props.showName} />
                <div className="card-body">
                    <h5 className="card-title">{props.showName}</h5>
                </div>
            </div>
        </div>
    );
}

SingleShowCard.propTypes = {
    showImageURL: PropTypes.string,
    showName: PropTypes.string
}

SingleShowCard.defaultProps = {
    showImageURL: "https://i.kym-cdn.com/photos/images/facebook/000/684/247/962.jpg",
    showName: "Groovie The Movie"
}

export { SingleShowCard };