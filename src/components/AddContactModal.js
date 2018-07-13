import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class AddContactModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            number: "",
            email: ""
        };
        this.addItemAction = this.addItemAction.bind(this);
        this.handleChange = this.handleChange.bind(this);       
    }

    addItemAction() {
        if (!!!this.state.name == "" && !!!this.state.number == "" && !!!this.state.email == ""){
            this.props.actions.addItem(this.state.name, this.state.number, this.state.email);           
        }
        this.props.toggler();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        var { isOpen, toggler, contact } = this.props;
        var { name, number, email } = this.state;
        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggler} fade={false}>
                    <ModalHeader toggle={toggler}>Add</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="form-group">
                                <label htmlFor="contact_name" className="control-label">Name:</label>
                                <input type="text" className="form-control" name="name" id="contact_name" value={name} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact_number" className="control-label">Number:</label>
                                <input type="text" className="form-control" name="number" id="contact_number" value={number} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact_email" className="control-label">Email:</label>
                                <input type="text" className="form-control" name="email" id="contact_email" value={email} onChange={this.handleChange} />
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addItemAction}>Add</Button>{' '}
                        <Button color="secondary" onClick={toggler}>Cancel</Button>
                    </ModalFooter>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContactModal);