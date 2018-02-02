export default {
  down: () => state => ({ value: state.value - 8 }),
  up: () => state => ({ value: state.value + 8 })
}
