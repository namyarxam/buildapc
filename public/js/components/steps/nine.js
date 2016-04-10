const React = require('react');

const StepNine = React.createClass({
  componentDidMount: function() {
    $.get('/parts/psus')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#psuname').text(obj.name);
        $('#psuimg').attr('src', obj.img_url);
        $('#psuprice').text(`$${obj.price}`);
        $('#psudesc').text(obj.description);
      })
  },

  showPart: function() {
    $.get('/parts/psus')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#psuname').text(obj.name);
        $('#psuimg').attr('src', obj.img_url);
        $('#psuprice').text(`$${obj.price}`);
        $('#psudesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#psuprice').text().slice(1));
    let part = $('#psuname').text();
    this.props.updatePrice(price);
    this.props.updatePart('psu', part);
    this.props.nextStage(10);
    $('.psu-toggle').hide();
  },

  render: function() {
    return (
      <div className="step9">
        <span className="bold">THE POWER SUPPLY:</span><p className="psu-toggle"> The power supply is connected to your parts and a wall-socket. Some high-end parts (GPUs, processors) require more power!</p>
        <div className="psu-toggle">
          <p className="output"><span className="lefto">Bronze</span><span>Gold</span><span className="righto">Platinum</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="3" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="psuimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="psuname" className="partname"></p>
            <p id="psudesc" className="partdesc"></p>
            <p id="psuprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton psu-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepNine;