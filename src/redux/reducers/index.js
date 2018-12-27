import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import tasks from './taskReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  tasks: tasks
})

