import React, {Component} from 'react';
import { ListGroupItem } from 'reactstrap';
import './sidebar.css';

class SidebarFooter extends Component{
    render(){
        return(
            <ListGroupItem className="list-item">
                Have Questions?
            </ListGroupItem>
        )
    }
}

export default SidebarFooter;