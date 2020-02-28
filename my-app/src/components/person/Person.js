import { connect } from 'react-redux';
import {loadUser} from "../../store/actions/user-actions";
import {UserDetails} from "./user-details/UserDetails";

const mapStateToProps = (store, ownProps) => {
    return {
        userDetails: store.userDetails.find(user => user.id === ownProps.user.id) || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadUserAction: user => dispatch(loadUser(user.id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
