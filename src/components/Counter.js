import { h } from "hyperapp";

export default ({ num }, { add, sub, addHundred }) => (
  <div class="counter">
    <h1>Hyperapp exempel</h1>
    <p>
      <em>JSX och Webpack</em>
    </p>
    <hr />
    <section>
      <button class="sub" onclick={sub} disabled={num < 1}>
        -
      </button>
      <h1 class="count">{num}</h1>
      <button class="add" onclick={add}>
        +
      </button>
      <button class ="add" onclick={addHundred}>
      +100
      </button>
    </section>
  </div>
);
