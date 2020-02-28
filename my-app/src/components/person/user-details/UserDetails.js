import PropTypes from 'prop-types';
import React, {useEffect} from 'react';

export function UserDetails ({ user, loadUserAction, userDetails }) {
    useEffect(() => {
        !Object.keys(userDetails).length && loadUserAction(user);
    });

    return <ul>
        <li>{userDetails.fullName}</li>
        <li>{userDetails.job}</li>
    </ul>;
}

UserDetails.propTypes = {
    user: PropTypes.object,
    userDetails: PropTypes.object,
    loadUserAction: PropTypes.func
};
