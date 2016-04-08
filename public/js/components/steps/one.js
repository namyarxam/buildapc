const React = require('react');

const StepOne = React.createClass({
  componentDidMount: function() {
    $.get('/parts/processors')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#processorname').text(obj.name);
        $('#processorimg').attr('src', obj.img_url);
        $('#processorprice').text(`$${obj.price}`);
        $('#processordesc').text(obj.description);
      })
  },

  showPart: function() {
    $.get('/parts/processors')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#processorname').text(obj.name);
        $('#processorimg').attr('src', obj.img_url);
        $('#processorprice').text(`$${obj.price}`);
        $('#processordesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    this.props.nextStage(2);
    $('.processor-toggle').hide();
  },

  render: function() {
    return (
      <div className="step1">
        <span className="bold">THE PROCESSOR:</span><p className="processor-toggle"> The processor is all about the speed of your computer. A faster processor will be able to complete tasks quicker than a slower one.</p>
        <div className="processor-toggle">
          <p className="output"><span className="lefto">Average</span><span>Fast</span><span className="righto">Fastest</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="3" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="processorimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="processorname" className="partname"></p>
            <p id="processordesc" className="partdesc"></p>
            <p id="processorprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton processor-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepOne;