import { div, h1 } from '@hyperapp/html'

import counter from './features/counter/view'

export default (s, a) =>
  div([
    h1({}, 'say 23'),
    counter({s: s.counter, a: a.counter})
  ])
