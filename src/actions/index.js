export default {
  add: (/* event (e) */) => ({ num }) => ({ num: num + 1 }),
  sub: (/* event (e) */) => ({ num }) => ({ num: num - 1 }),
  addHundred: (/* event (e) */) => ({num}) => ({num: num + 100})
};
