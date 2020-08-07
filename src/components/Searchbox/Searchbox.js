import React from 'react'
import './Searchbox.css';

class Searchbox extends React.Component {
    render() {
        return (
            <>
                <input
                    type="search"
                    placeholder="search cats"
                    onChange={this.props.handlechange}
                />
            </>
        )
    }
}

export default Searchbox;
