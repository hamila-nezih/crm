import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import ContentClient from './ContentClient';
class Client extends Component {
    render() {
        return (
            <div>
               
                <ContentClient />
            </div>
        );
    }
}

export default Client;