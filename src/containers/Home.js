import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './Home.css'

import Navigation from '../components/Navigation/Navigation';
import Sidebar from '../components/Sidebar/sidebar';
import Breadcrumbs from '../components/Breadcrumb/breadcrumb';

import QuickView from '../containers/views/Quickview/quickview';
import DetailedView from "./views/DetailedView/detailedView";
import Locations from './views/Locations/locations'
import Compare from './views/Compare/comparision';
import BidderPerformance from './views/Performance/Bidders/bidder-performance';
import PublisherPerformance from './views/Performance/Publishers/pusblisher-performance';
import Notes from './views/Notes/notes';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class Home extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Row>
                        <Col md="12" lg="12">
                            <Navigation/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" md="3" lg="2" className="sidebar-col">
                            <Sidebar/>
                        </Col>
                        <Col sm="8" md="9" lg="10" className="main-content">
                            <Row><Breadcrumbs/></Row>
                            <Row>
                                <Route exact path="/" component={QuickView}/>
                                <Route exact path="/detail-view" component={DetailedView}/>
                                <Route exact path="/locations" component={Locations}/>
                                <Route exact path="/comparision" component={Compare}/>
                                <Route exact path="/bidder-performance" component={BidderPerformance}/>
                                <Route exact path="/publisher-performance" component={PublisherPerformance}/>
                                <Route exact path="/notes" component={Notes}/>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Router>
        )

    }
}

export default Home;