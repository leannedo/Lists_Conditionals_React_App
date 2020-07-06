import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";


class App extends Component {
    state = {
        inputText: "",
        chars: [],
        // inputTextLength: null
        //    should not store length as property because we can access it with input text
    }

    inputChangedHandler = (event) => {
        let inputValue = event.target.value;
        this.setState({
            inputText: inputValue,
            chars: inputValue.split('')
        });
    }

    deleteCharHandler = (deletedIndex) => {
        // const charArray = [...this.state.arrayInputText];
        // charArray.splice(index, 1);
        // this.setState({arrayInputText: charArray});

        const updatedChars = this.state.chars.filter( (_, i) => deletedIndex !== i);
        this.setState({chars: updatedChars});

    }

    renderChar = (chars) => {
        return chars.map((el, index) => (<CharComponent
            character={el.toUpperCase()}
            key={index}
            clicked={() => {
                this.deleteCharHandler(index)
            }}/>))
    }

    render() {
        const { inputText, chars } = this.state;
        // destructuring
        const len = inputText.length;

        return (

            <div className="App">
                <input type="text" onChange={this.inputChangedHandler}/>
                <p>Text input: {inputText}</p>
                <p>Text length: {len}</p>
                <ValidationComponent text={inputText}/>
                {chars && (
                    <div>{this.renderChar(chars)}</div>
                )}
            </div>
        );
    }

}

export default App;
