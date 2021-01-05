import './App.css';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import { quotes } from './quotes';

// Action => Store => Reducer => Store
const backgroundColors = ["#c2f9bb", "#9ad1d4", "#62c370", "#cc3363", "#20063b", "#513c2c", "#28190e", "#211a1d", "#6320ee", "#8075ff"];

const NEW_QUOTE = 'NEW_QUOTE';
const NEW_COLOR = 'NEW_COLOR';
const getQuote = () => {
	const quoteIndex = Math.floor(Math.random() * quotes.quotes.length);
    return {
        type: NEW_QUOTE,
        quote: quotes.quotes[quoteIndex]
    }
};

const getBackgroundColor = () => {
	const colorIndex = Math.floor(Math.random() * backgroundColors.length);
    return {
        type: NEW_COLOR,
        color: backgroundColors[colorIndex]
    }
};

const quoteReducer = (state = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)], action) => {
    switch (action.type) {
		case NEW_QUOTE:
			return action.quote;
        default:
			return state;
    }
};

const colorReducer = (state = backgroundColors[Math.floor(Math.random() * backgroundColors.length)], action) => {
    switch (action.type) {
		case NEW_COLOR:
			return action.color;
        default:
			return state;
    }
};

const store = createStore(combineReducers({quoteReducer, colorReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
	constructor(props) {
        super(props);
        this.getNewQuote = this.getNewQuote.bind(this);
        this.getNewBackgroundColor = this.getNewBackgroundColor.bind(this);
	}

	getNewQuote() {
		console.log('asdad');
		return this.props.getNewQuote();
	}

	getNewBackgroundColor() {
		return this.props.getNewBackgroundColor();
	}

	render() {
		return (
		<div className="App" style={{backgroundColor: this.props.color}}>
			<div id="quote-box" style={{color: this.props.color}}>
				<p id="text">{this.props.quote.quote}</p>
				<p id="author">{this.props.quote.author}</p>
					<button id="new-quote" style={{backgroundColor: this.props.color}} onClick={() => { this.getNewQuote(); this.getNewBackgroundColor() }}>New Quote</button>
					<a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote" style={{color: this.props.color}}>Tweet</a>
			</div>
		</div>
	);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		quote: state.quoteReducer,
		color: state.colorReducer
	}
};
const mapDispatchToProps = (dispatch) => {
    return {
        getNewQuote: () => {
			return dispatch(getQuote())
        },
        getNewBackgroundColor: () => {
			return dispatch(getBackgroundColor())
        }
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
    render() {
        return (
        <Provider store={store}>
            <Container/>
        </Provider>
        );
    }
};

export default AppWrapper;
