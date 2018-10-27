import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import PersonPicker from "./components/PersonPicker";
import Scroll from "./components/Scroll";
import Hat from "./components/Hat";

class App extends Component {
  state = {
    stage: 0,
    people: 0,
    currentIdea: "",
    ideas: []
  };

  nextStage = e => {
    this.setState(state => {
      return {
        stage: state.stage + 1
      };
    });
  };

  updatePeople = e => {
    this.setState({
      people: +e.target.value
    });
  };

  updateCurrentIdea = e => {
    this.setState({
      currentIdea: e.target.value
    });
  };

  submitIdea = () => {
    this.setState(
      prevState => {
        return {
          ideas: [...prevState.ideas, prevState.currentIdea],
          currentIdea: ""
        };
      },
      () => {
        console.log("callback");
        if (this.state.ideas.length === this.state.people) {
          this.nextStage();
        }
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Group Think</h1>
        {/* Craptastic routing */}
        {this.state.stage === 0 ? (
          <LandingPage nextStage={this.nextStage} />
        ) : null}
        {this.state.stage === 1 ? (
          <PersonPicker
            updatePeople={this.updatePeople}
            nextStage={this.nextStage}
          />
        ) : null}
        {this.state.stage === 2 ? (
          <Scroll
            people={this.state.people}
            currentIdea={this.state.currentIdea}
            updateCurrentIdea={this.updateCurrentIdea}
            submitIdea={this.submitIdea}
            ideasLength={this.state.ideas.length}
          />
        ) : null}
        {this.state.stage === 3 ? <Hat /> : null}
      </div>
    );
  }
}

export default App;
