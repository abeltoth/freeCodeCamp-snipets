// We have to use react-redux package

// Provider
class AppWrapper extends React.Component { // High level wrapper
    render() {
        return (
        <Provider store={store}>
            <App />
        </Provider>
        );
    }
};

// Connect
const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};
const mapStateToProps = (state) => {
    return {
        messages: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
        dispatch(addMessage(message));
        }
    }
};
class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>This is a Presentational Component</h3>
    }
};
const ConnectedComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Presentational);

// Example:

// Redux:
const ADD = 'ADD';
const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
        return [
            ...state,
            action.message
        ];
        default:
        return state;
    }
};
const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        });
    }
    render() {
        return (
        <div>
            <h2>Type in a new Message:</h2>
            <input
            value={this.state.input}
            onChange={this.handleChange}/><br/>
            <button onClick={this.submitMessage}>Submit</button>
            <ul>
            {this.props.messages.map( (message, idx) => {
                return (
                    <li key={idx}>{message}</li>
                )
                })
            }
            </ul>
        </div>
        );
    }
};

// React & Redux
const mapStateToProps = (state) => {
    return {messages: state}
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
        dispatch(addMessage(message))
        }
    }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
    render() {
        return (
        <Provider store={store}>
            <Container/>
        </Provider>
        );
    }
};