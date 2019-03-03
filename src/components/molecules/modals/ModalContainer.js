import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { connect } from 'react-redux';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      });
    }
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    if (!this.props.modalType) {
      return null;
    }
    return (
      <View>
        <Modal
          visible={this.state.modalIsOpen}
          transparent
          animationType="slide"
          onRequestClose={this.closeModal}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.modal
});

export default connect(
  mapStateToProps,
  null
)(ModalContainer);
