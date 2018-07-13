import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contactIcon from "../images/contact.png";

class ContactItem extends Component {
    
    render() {
 
        return (
        <a href="#" className="list-group-item">
            <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" onClick={(e) => this.openEditModal(e)}></span>
                 &nbsp;&nbsp;
                <span className="glyphicon glyphicon-remove" onClick={ e => this.itemDeleteHandler(e) }></span>
            </div>
            <img id="contact-icon" className="pull-left" src={ contactIcon } alt="contact"/>
            <address>
                <strong>{this.props.name}</strong><br/>
                <abbr title="Phone">Phone:</abbr> {this.props.number}<br/>
                <abbr title="Email">Email:</abbr> {this.props.email}
            </address>
            </a>
        );
    }
  
    itemDeleteHandler(e) {
        e.preventDefault();
        this.props.onDeleteClick(this.props.id);
    }
    
    openEditModal(e) {
        e.preventDefault();
        this.props.openEditModal(this.props.id)
    }
	
}

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired
// };

export default ContactItem;