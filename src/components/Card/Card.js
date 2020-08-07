import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const { monster } = this.props;
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <img className="card-img-top" src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} alt="monster" />
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                </div>
            </div >
        );
    }
}

export default Card;