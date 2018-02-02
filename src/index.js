import { app } from 'hyperapp'

import logger from './utils/logger'
import state from './state'
import actions from './actions'
import view from './view'

logger(app)(state, actions, view, document.body)
