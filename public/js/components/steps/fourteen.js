const React = require('react');

const StepFourteen = React.createClass({
  componentDidMount: function() {
    $.get('/parts/mice')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#mousename').text(obj.name);
        $('#mouseimg').attr('src', obj.img_url);
        $('#mouseprice').text(`$${obj.price}`);
        $('#mousedesc').text(obj.description);
      })
  },

  showPart: function() {
    $.get('/parts/mice')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#mousename').text(obj.name);
        $('#mouseimg').attr('src', obj.img_url);
        $('#mouseprice').text(`$${obj.price}`);
        $('#mousedesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#mouseprice').text().slice(1));
    let part = $('#mousename').text();
    this.props.updatePrice(price);
    this.props.updatePart('mouse', part);
    this.props.nextStage(15);
    $('.mouse-toggle').hide();
  },

  render: function() {
    return (
      <div className="step14">
        <span className="bold">THE MOUSE:</span><p className="mouse-toggle"> The last step. Pick a mouse that suits your needs.</p>
        <div className="mouse-toggle">
          <p className="output"><span className="lefto">Standard</span><span id="fps">FPS</span><span className="righto">MMO</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="3" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="mouseimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="mousename" className="partname"></p>
            <p id="mousedesc" className="partdesc"></p>
            <p id="mouseprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton mouse-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepFourteen;