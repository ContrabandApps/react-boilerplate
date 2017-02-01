const Greeter = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Hello, React Boilerplate!</h1>
        <p>This is a boilerplate for building ReactJS applications.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById("app")
);
