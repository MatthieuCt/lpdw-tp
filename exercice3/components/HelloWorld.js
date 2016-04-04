import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <h1> Hello, { this.props.name } !</h1>;
    }
}

HelloWorld.defaultProps = { name: "World" };

module.exports = HelloWorld;
