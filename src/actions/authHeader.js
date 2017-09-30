import token from './token'

export default () => {
    return { headers: { 'Authorization': `Bearer ${token.get()}` } };
}
