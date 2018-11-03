import dispatcher from './Dispatcher';
import {ACTIONS} from './Constants';
import {postPosts} from './API';

export function testAction(value) {
  postPosts();
  dispatcher.dispatch({
    type: ACTIONS.TEST_ACTION,
    value: 'hello',
  });
}
