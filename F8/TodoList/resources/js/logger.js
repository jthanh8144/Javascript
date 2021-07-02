export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action);
        console.log('PreState: ', preState);
        console.log('Action arguments: ', args)
        const nextState = reducer(preState, action, args);
        console.log('NextState: ', nextState);
        console.groupEnd();
        return nextState;
    }
}