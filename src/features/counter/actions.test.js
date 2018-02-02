import actions from './actions'
import state from './state'

test('remove that test', () => {
  expect(actions.up()(state)).toMatchObject({value: 31})
})
