import { connect } from 'react-redux';
import { UsersList } from "./components/users-list/UsersList";

const mapStateToProps = store => {
    return {
        users: store.users
    };
};

export default connect(mapStateToProps)(UsersList);
