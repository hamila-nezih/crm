import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import ContentDB from './ContentDB';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>   
                <ContentDB/>
                <Footer/>    
         
                
            </div>
        );
    }
}

export default Dashboard;