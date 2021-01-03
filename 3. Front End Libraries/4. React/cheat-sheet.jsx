// JSX is Html with js
{ 'this is treated as JavaScript code' } // Use {} to write js code

// Nested JSX should return 1 element (If there is more wrap it)
const JSX = (
    <div>
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
    </div>
);

// Comments
{/* Comments needs {} */ }

// Rendering
ReactDOM.render(JSX, document.getElementById('challenge-node')); // To render the created JSX element within the element with #challenge-node id
ReactDOM.render(<Kitten />, document.getElementById('challenge-node')); // To render the created React component within the element with #challenge-node id

// JSX attr, element naming
const JSX = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);
// class => className
// onclick => onClick
// onchange => onChange
// <br> => <br />     <hr> => <hr /> ...
// <div></div> => <div></div> or <div /> (it cannot contain anything)

// Stateless functional component
// Can receive data and render it, but does not manage or track changes to that data
const DemoComponent = function() { // Function name must start uppercase
    return (
        <div className='customClass' />
    );
};

// Component with ES6 class
class Kitten extends React.Component { // It has more features (local state, lifecycle hooks...)
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <h1>Hi</h1>
        );
    }
}

// Connect components:
function render() {
    return ( // Make parent which contains child components
        <App>
            <Navbar />
            <Dashboard />
            <Footer />
        </App>
    )
}

// Props
const Welcome = (props) => <h1>Hello, {props.user}!</h1> // Pass properties to child components & JSX elements
(<App>
    <Welcome user='Mark' /> {/* Or user={100} */}
</App>)

// Set default props
MyComponent.defaultProps = { location: 'San Francisco' };

// Check types of props
import PropTypes from 'prop-types'; // There are more types than primitive js types
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }; // handleClick must be a function and required

// Component types:
// Stateless functional component =>  function which accepts props and returns JSX
// Stateless component => a class that extends React.Component, but does not use internal state
// tateful component => a class component that does maintain its own internal state

// Stateful component
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mari'
        }
    }
    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
        </div>
        );
    }
};

// Lifecycle hooks
componentDidMount(); // API calls here, attach event listeners
shouldComponentUpdate(); // Handle component re-rendering here
componentDidUpdate();
componentWillUnmount(); // detach event listeners

// Inline styling
<div style={{ color: "yellow", fontSize: 16 }}>Mellow Yellow</div>

// Conditional JSX
function render() {
    return (
    <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        { this.state.display && <h1>Displayed!</h1> }
    </div>
    );
}

// Server side rendering
ReactDOMServer.renderToString(<App />);

// Component example
const textAreaStyles = {
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            toDoList: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map((toDo,i) => <li key={`${toDo}-${i}`}>{toDo}</li>);
        return (
        <div>
            <textarea
                onChange={this.handleChange}
                value={this.state.userInput}
                style={textAreaStyles}
                placeholder='Separate Items With Commas'
            />
            <br />
            <button onClick={this.handleSubmit}>Create List</button>
            <h1>My "To Do" List:</h1>
            <ul>{items}</ul>
        </div>
        );
    }
}

// Example 2
class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }
    render() {
        const expression = Math.random() > 0.5 ? true : false;
        return (
        <div>
            <button onClick={this.handleClick}>Play Again</button>
            <Results fiftyFifty={expression}/>
            <p>{'Turn: ' + this.state.counter}</p>
        </div>
        );
    }
}