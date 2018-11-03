import dispatcher from './Dispatcher';
import {ACTIONS} from './Constants';

export function testAction(value) {
    dispatcher.dispatch({
        type: ACTIONS.TEST_ACTION,
        value: 'hello',
    });
}
