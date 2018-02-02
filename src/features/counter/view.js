import { div, button, h1 } from '@hyperapp/html'

export default ({s, a}) =>
  div([
    h1(s.value),
    button({ onclick: a.down }, 'ー'),
    button({ onclick: a.up }, '＋')
  ])
