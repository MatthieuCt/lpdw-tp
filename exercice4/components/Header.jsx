import React from 'react';

class Header extends React.Component {
    render() {
        return <h1> { this.props.title } </h1>;
    }
}

Header.propTypes = { title: React.PropTypes.string };
Header.defaultProps = { title: "No title" };

module.exports = Header;
