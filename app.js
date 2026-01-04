/*
<div id='parent'>
  <div id='child1'>
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
  <div id='child2'>
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div>
*/

const attributes = { id: "heading" };
const h1 = "I'm an h1 tag";
const h2 = "I'm an h2 tag";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement('div', { id: 'child1' }, [React.createElement('h1', {}, h1), React.createElement('h2', {}, h2)]),
    React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, h1), React.createElement('h2', {}, h2)])
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
