import Data from "./resources/quizQuestion.json";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }

    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.quit = this.quit.bind(this)

  }   

 previous(){
  if(this.state.index == 0){
    this.setState({index : Data.length - 1})
  }
  else{
      this.setState({index : this.state.index - 1})
  }
    }

next(){
  if(this.state.index == Data.length - 1){
    this.setState({index : 0})
  }
  else{
      this.setState({index : this.state.index + 1})
  }
    }

quit(){
  alert("Are you sure you want to quit?")
  this.setState({index : this.state.index + 1})
}    


  render() {
    let qnIndex = this.state.index

    return (
      <div>

        <div className="container">
          <h1 className="qn">Question</h1>
          <p>1 of 15</p>

  <p className="qn">{Data[qnIndex].question}</p>
  <div className="options">
    <div className="option">
      <p>{Data[qnIndex].optionA}</p>
    </div>
    <div className="option">
      <p>{Data[qnIndex].optionB}</p>
    </div>
    <div className="option">
      <p>{Data[qnIndex].optionC}</p>
    </div>
    <div className="option">
      <p>{Data[qnIndex].optionD}</p>
    </div>
  </div>

          <div className="buttons">
            <button className="previous" onClick={this.previous}>Previous</button>
            <button className="next" onClick={this.next}>Next</button>
            <button className="quit" onClick={this.quit}>Quit</button>
          </div>
  
        </div>



      </div>
    );
  }
}

export default App;
