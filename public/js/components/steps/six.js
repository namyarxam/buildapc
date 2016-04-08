const React = require('react');

const StepSix = React.createClass({
  componentDidMount: function() {
    $.get('/parts/motherboards')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#motherboardname').text(obj.name);
        $('#motherboardimg').attr('src', obj.img_url);
        $('#motherboardprice').text(`$${obj.price}`);
        $('#motherboarddesc').text(obj.description);
      })
  },

  showPart: function() {
    $.get('/parts/motherboards')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#motherboardname').text(obj.name);
        $('#motherboardimg').attr('src', obj.img_url);
        $('#motherboardprice').text(`$${obj.price}`);
        $('#motherboarddesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    this.props.nextStage(7);
    $('.motherboard-toggle').hide();
  },

  render: function() {
    return (
     <div className="step6">
        <span className="bold">THE MOTHERBOARD:</span><p className="motherboard-toggle"> Motherboards hold your parts together. Every piece of the PC is connected to a port on the board. "Better" motherboards have very marginal differences in performance. </p>
        <div className="motherboard-toggle">
          <p className="output"><span className="lefto">Standard</span><span className="righto">Premium</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="2" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="motherboardimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="motherboardname" className="partname"></p>
            <p id="motherboarddesc" className="partdesc"></p>
            <p id="motherboardprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton motherboard-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepSix;