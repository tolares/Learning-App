import React from 'react'
import PropTypes from 'prop-types'

import Profile from './Profile'

import contactData from '../../assets/data/contact.json'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
    header: null,
});

ProfileScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ProfileScreen