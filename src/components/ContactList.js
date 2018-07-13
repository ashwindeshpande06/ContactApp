import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import EditContactModal from "./EditContactModal";
import ContactItem from './ContactItem';

import * as actions from '../redux/actions';

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditModal: false,
            idx: -1
        };
        this.openEditModal = this.openEditModal.bind(this);
       
    }

    openEditModal(id) {
        
        this.setState({
            showEditModal: !this.state.showEditModal,
            idx: id
        });
    }

    render() {
        var { showEditModal, idx } = this.state;
        var data = this.props.contacts[idx];
        return (
        <div className="list-group">
            {this.props.contacts.map((contact, index) =>
                <ContactItem {...contact}
                    key={index}
                    id={index}
                    onDeleteClick={ this.props.deleteItemAction }                    
                    openEditModal={this.openEditModal}
                />
            )}
                {showEditModal && <EditContactModal isOpen={showEditModal} toggler={this.openEditModal} contact={data} id={idx}/>}
        </div>        
        )
    }
    
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     }).isRequired).isRequired
// };

var mapStateToProps = function (state) {
    return state;
};

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);