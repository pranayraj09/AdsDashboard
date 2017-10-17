import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Button } from 'reactstrap';
import './breadcrumb.css'

class Breadcrumbs extends Component{
    render(){
        return(
            <Breadcrumb>
                <Col>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                </Col>
                <Col>
                    <span className="pull-right date-filter">
                        <Button outline color="info">Today</Button>{' '}
                        <Button color="info">Week View</Button>{' '}
                        <Button outline color="info">Month View</Button>{' '}
                        <Button outline color="info">Year View</Button>
                    </span>
                </Col>
            </Breadcrumb>
        )
    }
}

export default Breadcrumbs;