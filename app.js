const HelloWorld = function() {
  return (<h1>Hello World!</h1>)
}

const Hello = function(props) {
  return (<h1>Hello {props.name}</h1>)
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))