const React = require('react');

/* External Components */
const StepOne      = require('./steps/one');
const StepTwo      = require('./steps/two');
const StepThree    = require('./steps/three');
const StepFour     = require('./steps/four');
const StepFive     = require('./steps/five');
const StepSix      = require('./steps/six');
const StepSeven    = require('./steps/seven');
const StepEight    = require('./steps/eight'); 
const StepNine     = require('./steps/nine');
const StepTen      = require('./steps/ten');
const StepEleven   = require('./steps/eleven');
const StepTwelve   = require('./steps/twelve');
const StepThirteen = require('./steps/thirteen');
const StepFourteen = require('./steps/fourteen');
const EditButton   = require('./editbutton');

const Main = React.createClass({
  getInitialState: function() {
    return {
      buildName: '',
      stage: 0,
      price: 0,
      parts: {
        processor: '',
        gpu: '',
        ram: '',
        hd: '',
        ssd: '',
        mb: '',
        cooler: '',
        case: '',
        psu: '',
        opt: '',
        monitor: '',
        headphones: '',
        keyboard: '',
        mouse: ''
      }
    }
  },

  componentDidMount: function() {
    this.state.stage = 0;
    this.setState({ stage: 0 });
  },

  changeStage: function(stageNum) {
    this.state.stage = stageNum;
    this.setState({ stage: stageNum });
  },

  updatePrice: function(partPrice) {
    let newPrice = this.state.price + partPrice;
    this.state.price = newPrice;
    this.setState({ price: newPrice })
  },

  updatePart: function(partName, choice) {
    this.state.parts[partName] = choice;
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
      $('.name-form').hide();
    }
  },

  finished: function() {
    // $('.main-container').empty();
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
                  <p className="name-form">Lets begin by picking a name for your new machine:</p>
                </div>
                <form className="name-form" ref="nameForm" onSubmit={this.setName}>
                  <input type="text" ref="name" placeholder="My build"></input>
                  <input type="submit" value="submit"></input>
                </form>
              </div>
              <div className="stages">
                {this.state.stage >= 1 ? 
                  <div>
                    <h2 id="divide"><span>STEP 1</span></h2>
                    <StepOne updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} /> 
                    <EditButton updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.nextStage} num="1" />
                  </div> 
                : <div></div>}
                {this.state.stage >= 2 ? 
                  <div>
                    <h2 id="divide"><span>STEP 2</span></h2>
                    <StepTwo updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div>
                : <div></div>}
                {this.state.stage >= 3 ? 
                  <div>
                    <h2 id="divide"><span>STEP 3</span></h2>
                    <StepThree updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} /> 
                  </div>
                : <div></div>}
                {this.state.stage >= 4 ?
                  <div>
                    <h2 id="divide"><span>STEP 4</span></h2>
                    <StepFour updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} /> 
                  </div>
                : <div></div>}
                {this.state.stage >= 5 ?
                  <div>
                    <h2 id="divide"><span>STEP 5</span></h2>
                    <StepFive updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} /> 
                  </div>
                : <div></div>}
                {this.state.stage >= 6 ?
                  <div>
                    <h2 id="divide"><span>STEP 6</span></h2>
                    <StepSix updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div>
                : <div></div>}
                {this.state.stage >= 7 ?
                  <div>
                    <h2 id="divide"><span>STEP 7</span></h2>
                    <StepSeven updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} /> 
                  </div>
                : <div></div>}
                {this.state.stage >= 8 ? 
                  <div>
                    <h2 id="divide"><span>STEP 8</span></h2>
                    <StepEight updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div> 
                : <div></div>}
                {this.state.stage >= 9 ?
                  <div>
                    <h2 id="divide"><span>STEP 9</span></h2>
                    <StepNine updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} /> 
                  </div>
                : <div></div>}
                {this.state.stage >= 10 ? 
                  <div>
                    <h2 id="divide"><span>STEP 10</span></h2>
                    <StepTen updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div>
                : <div></div>}
                {this.state.stage >= 11 ?
                  <div>
                    <h2 id="divide"><span>STEP 11</span></h2>
                    <StepEleven updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div> 
                : <div></div>}
                {this.state.stage >= 12 ?
                  <div>
                    <h2 id="divide"><span>STEP 12</span></h2>
                    <StepTwelve updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div>
                : <div></div>}
                {this.state.stage >= 13 ?
                  <div>
                    <h2 id="divide"><span>STEP 13</span></h2>
                    <StepThirteen updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div>
                : <div></div>}
                {this.state.stage >= 14 ? 
                  <div>
                    <h2 id="divide"><span>STEP 14</span></h2>
                    <StepFourteen updatePart={this.updatePart} updatePrice={this.updatePrice} nextStage={this.changeStage} />
                  </div>
                : <div></div>}
              </div>
              {this.state.stage == 15 ? 
                <div id="finished-div">
                  <p>Congrats! Your build is complete. Press 'next' to save your build.</p>
                  <button id="finished" onClick={this.finished}>NEXT</button>
                </div>
              : <div></div>}
            </div>
          </div>
          <div className="adjacent right-main">
            <div className="gutter-right">
              <p id="btrack">Build Tracker</p>
              <h1></h1>
              <p id="btrack-name">{this.state.buildName}:</p>
              {this.state.price > 0 ? 
                <p id="btrack-price">Build Cost: ${this.state.price}</p>
              : <p></p>}
              {this.state.parts.processor ? 
                <div>
                  <p id="btrack-partName">PROCESSOR:</p>
                  <p id="btrack-parts">  {this.state.parts.processor}</p>
                </div>
              : <p></p>}
              {this.state.parts.gpu ? 
                <div>
                  <p id="btrack-partName">GPU:</p>
                  <p id="btrack-parts">  {this.state.parts.gpu}</p>
                </div>
              : <p></p>}
              {this.state.parts.ram ? 
                <div>
                  <p id="btrack-partName">RAM:</p>
                  <p id="btrack-parts">  {this.state.parts.ram}</p>
                </div>
              : <p></p>}
              {this.state.parts.hd ? 
                <div>
                  <p id="btrack-partName">HD:</p>
                  <p id="btrack-parts">  {this.state.parts.hd}</p>
                </div>
              : <p></p>}
              {this.state.parts.ssd ? 
                <div>
                  <p id="btrack-partName">SSD:</p>
                  <p id="btrack-parts">  {this.state.parts.ssd}</p>
                </div>
              : <p></p>}
              {this.state.parts.mb ? 
                <div>
                  <p id="btrack-partName">MOTHERBOARD:</p>
                  <p id="btrack-parts">  {this.state.parts.mb}</p>
                </div>
              : <p></p>}
              {this.state.parts.cooler ? 
                <div>
                  <p id="btrack-partName">COOLER:</p>
                  <p id="btrack-parts">  {this.state.parts.cooler}</p>
                </div>
              : <p></p>}
              {this.state.parts.case ? 
                <div>
                  <p id="btrack-partName">CASE:</p>
                  <p id="btrack-parts">  {this.state.parts.case}</p>
                </div>
              : <p></p>}
              {this.state.parts.psu ? 
                <div>
                  <p id="btrack-partName">PSU:</p>
                  <p id="btrack-parts">  {this.state.parts.psu}</p>
                </div>
              : <p></p>}
              {this.state.parts.opt ? 
                <div>
                  <p id="btrack-partName">OPTICAL DRIVE:</p>
                  <p id="btrack-parts">  {this.state.parts.opt}</p>
                </div>
              : <p></p>}
              {this.state.parts.monitor ? 
                <div>
                  <p id="btrack-partName">MONITOR:</p>
                  <p id="btrack-parts">  {this.state.parts.monitor}</p>
                </div>
              : <p></p>}
              {this.state.parts.headphones ? 
                <div>
                  <p id="btrack-partName">HEADPHONES:</p>
                  <p id="btrack-parts">  {this.state.parts.headphones}</p>
                </div>
              : <p></p>}
              {this.state.parts.keyboard ? 
                <div>
                  <p id="btrack-partName">KEYBOARD:</p>
                  <p id="btrack-parts">  {this.state.parts.keyboard}</p>
                </div>
              : <p></p>}
              {this.state.parts.mouse ? 
                <div>
                  <p id="btrack-partName">MOUSE:</p>
                  <p id="btrack-parts">  {this.state.parts.mouse}</p>
                </div>
              : <p></p>}
            </div>
          </div>
        </div>
      </div>
    )
  }



})

module.exports = Main;