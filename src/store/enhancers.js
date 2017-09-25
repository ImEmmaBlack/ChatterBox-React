const __DEV__ = true 
//TODO: Dont forget to get rid of this and use proper env vars
const enhancers = __DEV__ && window.devToolsExtension
    ? [window.devToolsExtension()]
    : [];

export default enhancers;

