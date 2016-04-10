const React = require('react');

const StepEleven = React.createClass({
  componentDidMount: function() {
    $.get('/parts/monitors')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#monitorname').text(obj.name);
        $('#monitorimg').attr('src', obj.img_url);
        $('#monitorprice').text(`$${obj.price}`);
        $('#monitordesc').text(obj.description);
      })
  },

  showPart: function() {
    $.get('/parts/monitors')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#monitorname').text(obj.name);
        $('#monitorimg').attr('src', obj.img_url);
        $('#monitorprice').text(`$${obj.price}`);
        $('#monitordesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#monitorprice').text().slice(1));
    let part = $('#monitorname').text();
    this.props.updatePrice(price);
    this.props.updatePart('monitor', part);
    this.props.nextStage(12);
    $('.monitor-toggle').hide();
  },

  render: function() {
    return (
      <div className="step11">
        <span className="bold">THE MONITOR:</span><p className="monitor-toggle"> The first part that doesnt go inside your case. Monitor quality is personal preference unless you're building a gaming PC.</p>
        <div className="monitor-toggle">
          <p className="output"><span className="lefto">Budget</span><span>Gamer</span><span className="righto">Show-off</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="3" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="monitorimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="monitorname" className="partname"></p>
            <p id="monitordesc" className="partdesc"></p>
            <p id="monitorprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton monitor-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepEleven;