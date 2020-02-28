export const LOAD_USER_DETAILS = 'LOAD_USER';

export function loadUser(userId) {
    return {
        type: LOAD_USER_DETAILS,
        payload: userId
    };
}
