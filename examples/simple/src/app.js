const React = require('react');
const ReactDOM = require('react-dom');

const h = require('react-hyperscript');
const { div, span, h1 } = require('hyperscript-helpers')(h);

module.exports = () => {

	class MyComponent extends React.Component {
	  render() {
	    return div(`Hello World ${Math.random()}`);
	  }
	}

	ReactDOM.render(h(MyComponent), document.getElementById('container') );
}

// module.exports = () =>{
// 	//console.log(`Hello World ${Math.random()}`);
// }
