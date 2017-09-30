import Cookies from 'universal-cookie';

const cookie = new Cookies();

export default {
    save: (token, id) => {
        cookie.set('token', token, { path: '/' })
        cookie.set('userId', id, { path: '/' })
    },
    remove: () => {
        cookie.remove('token', { path: '/' })
        cookie.remove('userId', { path: '/' })
    },
    get: () => {
        return cookie.get('token')
    },
    getId: () => {
        return cookie.get('userId')
    }
}
