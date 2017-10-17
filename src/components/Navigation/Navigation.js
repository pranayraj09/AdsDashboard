import React, { Component } from 'react';
import { Navbar, Card, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navigation.css'

class Navigation extends Component{
    constructor(){
        super();

        let today = new Date(),
            date = today.getMonth()  + '-' + today.getDate() + '-' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render(){
        return (
            <Card>
                <Navbar light>
                    <NavbarBrand href="/">Ad Publisher Inc.</NavbarBrand>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink href="/">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Date: {this.state.date}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <i className="fa fa-bell"> </i> Updates
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <i className="fa fa-user-circle"> </i> John Doe <i className="fa fa-caret-down"> </i>
                                </NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
            </Card>
        );
    }
}


export default Navigation;