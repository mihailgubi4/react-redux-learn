import React, {useState} from "react";
import PropTypes from "prop-types";

function ExpandableSection (props) {
    const [visible, setVisible] = useState(false);

    if(!visible) {
        return <p>
            <a onClick={setVisible.bind(this, true)}>Load User</a>;
        </p>;
    }

    return (
        props.children
    );
}

ExpandableSection.propTypes = {
    children: PropTypes.object
};

export default ExpandableSection;
