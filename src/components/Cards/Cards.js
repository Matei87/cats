import React from 'react';
import Card from '../Card/Card';


class Cards extends React.Component {
    render() {
        return (
            <>
                {this.props.monsters.map(monster =>
                    <Card monster={monster} key={monster.id} />
                )}
            </>
        )
    }
}

export default Cards;