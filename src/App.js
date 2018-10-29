import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import PersonPicker from "./components/PersonPicker";
import IdeaInput from "./components/IdeaInput";
import Display from "./components/Display";
import Voting from "./components/Voting";

class App extends Component {
  state = {
    stage: 0,
    people: 0,
    currentIdea: "",
    ideas: []
  };

  nextStage = () => {
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
          ideas: [
            ...prevState.ideas,
            {
              idea: prevState.currentIdea,
              negVotes: 0,
              posVotes: 0
            }
          ],
          currentIdea: ""
        };
      },
      () => {
        console.log("callback");
        if (this.state.ideas.length >= this.state.people) {
          this.nextStage();
        }
      }
    );
  };

  countVotes = type => {
    return this.state.ideas.reduce((acc, idea) => {
      return (acc += idea[type]);
    }, 0);
  };

  eliminateOption = () => {
    console.log("Eliminated option");
  };

  vote = (index, isElimination) => {
    console.log("You've just voted. Good job.");
    this.setState(
      prevState => {
        const { ideas } = prevState;
        isElimination
          ? (ideas[index].negVotes += 1)
          : (ideas[index].posVotes += 1);
        return { ideas };
      },
      () => {
        const voteCount = isElimination
          ? this.countVotes("negVotes")
          : this.countVotes("posVotes");
        if (voteCount >= this.state.people) {
          if (isElimination) this.eliminateOption();
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

        {/* Display landing page */}
        {this.state.stage === 0 ? (
          <LandingPage nextStage={this.nextStage} />
        ) : null}

        {/* Enter the number of people participating */}
        {this.state.stage === 1 ? (
          <PersonPicker
            updatePeople={this.updatePeople}
            nextStage={this.nextStage}
          />
        ) : null}

        {/* Everyone enters their ideas */}
        {this.state.stage === 2 ? (
          <div>
            <IdeaInput
              people={this.state.people}
              currentIdea={this.state.currentIdea}
              updateCurrentIdea={this.updateCurrentIdea}
              submitIdea={this.submitIdea}
              ideasLength={this.state.ideas.length}
            />
          </div>
        ) : null}

        {/* Eliminate the least favorite option */}
        {this.state.stage === 3 ? (
          <Voting
            ideas={this.state.ideas}
            peopleCount={this.state.people}
            vote={this.vote}
            countVotes={this.countVotes}
            elimination
          />
        ) : null}

        {/* Each person votes on their favorite remaining option */}
        {this.state.stage === 4 ? (
          <Voting
            ideas={this.state.ideas}
            vote={this.vote}
            countVotes={this.countVotes}
          />
        ) : null}

        {/* Display the results in order of votes */}
        {this.state.stage === 5 ? <Display ideas={this.state.ideas} /> : null}
      </div>
    );
  }
}

export default App;
