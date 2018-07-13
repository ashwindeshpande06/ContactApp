import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

import ContactList from '../components/ContactList';
import AddContactModal from '../components/AddContactModal';
import EditContactModal from '../components/EditContactModal';
import * as actions from '../redux/actions';

class App1 extends Component {
    constructor(props) {
        super(props);

        this.state = {                   
            showNewModal: false
        };   
        this.openAddModal = this.openAddModal.bind(this);
    }

    openAddModal() {
        this.setState({
            showNewModal: !this.state.showNewModal
        });
    }

    render() {
        var { showNewModal} = this.state;
        return (
            <div>
                <div className="row">
                    <div id="main-content" className="panel panel-primary" >
                        <div className="panel-heading">
                            <span className="panel-title">Contact</span>
                            <button className="btn btn-default btn-sm pull-right" onClick={this.openAddModal}><span className="glyphicon glyphicon-plus"></span></button>
                        </div>
                        <div className="panel-body">
                            <ContactList contacts={this.props.contacts}
                                deleteItemAction={this.props.actions.deleteItem}                                                             
                            />
                        </div>
                    </div>
                    {
                        showNewModal && <AddContactModal isOpen={showNewModal} toggler={this.openAddModal}/>
                    }                                            
                </div>
            </div>
        );
    }
}


var mapStateToProps = function (state) {
    return state;
};

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App1);
