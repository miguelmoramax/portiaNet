import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import UserInfo from '../molecules/UserInfo';
import CheckInCard from '../molecules/CheckInCard';
import { Card, CardSection } from '../atoms';
import MyIcon from '../../assets/config/icon-font.js';

class HomeMenu extends Component {
  render() {
    const { homeMenuContainer, checkPointStyle, textStyle } = styles;
    return (
      <Card style={homeMenuContainer}>
        <CardSection style={{ zIndex: 999, flex: 1 }}>
          <UserInfo />
        </CardSection>
        <CardSection
          style={{ paddingTop: '15%', height: '80%', backgroundColor: '#fff' }}
        >
          <CardSection style={checkPointStyle}>
            <MyIcon name={'location'} size={25} color={'#9b9b9b'} />
            <Text style={textStyle}>Check-In Pendientes (3)</Text>
          </CardSection>
          <CheckInCard />
          <CheckInCard />
          <CheckInCard />
          <CheckInCard />
          <CheckInCard />
          <CheckInCard />
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  homeMenuContainer: {
    backgroundColor: '#fff',
    zIndex: 1
  },
  checkPointStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%'
  },
  textStyle: {
    color: '#9b9b9b',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: '5%',
    paddingTop: '3%',
    paddingLeft: '5%'
  }
};
const mapDispatchToProps = dispatch => ({ 
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
   dispatch(showModal({ modalProps, modalType }))
  }
 })
export default connect(null, mapDispatchToProps)(HomeMenu);
