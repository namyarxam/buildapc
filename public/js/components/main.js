const React = require('react');

/* External Components */
const StepOne      = require('./steps/one')
const StepTwo      = require('./steps/two')
const StepThree    = require('./steps/three')
const StepFour     = require('./steps/four')
const StepFive     = require('./steps/five')
const StepSix      = require('./steps/six')
const StepSeven    = require('./steps/seven')
const StepEight    = require('./steps/eight') 
const StepNine     = require('./steps/nine')
const StepTen      = require('./steps/ten')
const StepEleven   = require('./steps/eleven')
const StepTwelve   = require('./steps/twelve')
const StepThirteen = require('./steps/thirteen')

const Main = React.createClass({
  getInitialState: function() {
    return {
      buildName: '',
      stage: 0,
      price: 0,
      partArray: []
    }
  },

  componentDidMount: function() {
    this.state.stage = 0;
    this.setState({ stage: 0 });
  },

  setName: function(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    if(name) {
      this.state.buildName = name;
      this.setState({ buildName: name });
      // Stage increment
      this.state.stage = 1;
      this.setState({ stage: 1 });

      this.refs.nameForm.reset();
    }
  },

  render: function() {
    return (
      <div>
        <div className="greybar">
          <p id="build-name">{this.state.buildName}</p>
        </div>
        <div className="main-container">
          <div className="adjacent left-main">
            <div className="gutter-left">
              <div className="stages zero">
                <div className="desc">
                  <p>BuildAPC is the easiest, most powerful way to build high-quality, cost efficient computers. Learn what each part of a computer does, and build your ultimate machine for a price you wont believe!</p>
                  <p>Lets begin by picking a name for your new machine:</p>
                </div>
                <form className="name-form" ref="nameForm" onSubmit={this.setName}>
                  <input type="text" ref="name" placeholder="My build"></input>
                  <input type="submit" value="submit"></input>
                </form>
              </div>
              <div className="stages">
                {this.state.stage>0 ? 
                  <div>
                  <h2 id="divide"><span>STEP 1</span></h2>
                  <StepOne /> 
                  </div> 
                : <div></div>}
                {this.state.stage>1 ? <StepTwo /> : <div></div>}
                {this.state.stage>2 ? <StepThree /> : <div></div>}
                {this.state.stage>3 ? <StepFour /> : <div></div>}
                {this.state.stage>4 ? <StepFive /> : <div></div>}
                {this.state.stage>5 ? <StepSix /> : <div></div>}
                {this.state.stage>6 ? <StepSeven /> : <div></div>}
                {this.state.stage>7 ? <StepEight /> : <div></div>}
                {this.state.stage>8 ? <StepNine /> : <div></div>}
                {this.state.stage>9 ? <StepTen /> : <div></div>}
                {this.state.stage>10 ? <StepEleven /> : <div></div>}
                {this.state.stage>11 ? <StepTwelve /> : <div></div>}
                {this.state.stage>12 ? <StepThirteen /> : <div></div>}
              </div>
            </div>
          </div>
          <div className="adjacent right-main">
            <div className="gutter-right">
              <p id="btrack">Build Tracker</p>
              <h1></h1>
              <p id="btrack-name">{this.state.buildName}:</p>
            </div>
          </div>
        </div>
      </div>
    )
  }



})

module.exports = Main;