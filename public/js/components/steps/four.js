const React = require('react');

const StepFour = React.createClass({
  componentDidMount: function() {
    $.get('/parts/hd')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#hdname').text(obj.name);
        $('#hdimg').attr('src', obj.img_url);
        $('#hdprice').text(`$${obj.price}`);
        $('#hddesc').text(obj.description);
      })
  },

  showPart: function() {
    $.get('/parts/hd')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#hdname').text(obj.name);
        $('#hdimg').attr('src', obj.img_url);
        $('#hdprice').text(`$${obj.price}`);
        $('#hddesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    this.props.nextStage(5);
    $('.hd-toggle').hide();
  },

  render: function() {
    return (
     <div className="step4">
        <span className="bold">THE HD:</span><p className="hd-toggle"> Hard drives are the main component for computer storage. These days HD's are pretty large and can store a lot. </p>
        <div className="hd-toggle">
          <p className="output"><span className="lefto">Standard</span><span className="righto">Premium</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="2" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="hdimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="hdname" className="partname"></p>
            <p id="hddesc" className="partdesc"></p>
            <p id="hdprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton hd-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepFour;