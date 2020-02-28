import React from 'react';
import PropTypes from "prop-types";
import ExpandableSection from "../expanadable-section/ExpandableSection";
import Person from "../../components/person/Person";

export function UsersList (props) {
    return props.users.map((user) => (
        <ExpandableSection key={user.id}>
            <Person user={user}/>
        </ExpandableSection>
    ));
}

UsersList.propTypes = {
    users: PropTypes.array
};

