
export default function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token');
    if (token) {
        return token;
    } else {
        return '';
    }
}