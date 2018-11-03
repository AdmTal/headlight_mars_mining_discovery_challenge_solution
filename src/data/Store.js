import dispatcher from './Dispatcher';
import {EventEmitter} from 'events';
import {ACTIONS} from './Constants';

let testData = 'initial';

class Store extends EventEmitter {

    handleActions(action) {

        switch (action.type) {
            case ACTIONS.TEST_ACTION: {
                testData = action.value;
                break;
            }
            default: {
              break;
            }
        }

        this.emit("storeUpdated");
    }

    getValuesFromStore() {
        return {
          testData
        };
    }
}

const store = new Store();
dispatcher.register(store.handleActions.bind(store));
export default store;
