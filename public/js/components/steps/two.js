const React = require('react');

const StepTwo = React.createClass({
  componentDidMount: function() {
    $.get('/parts/gpus')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#gpuname').text(obj.name);
        $('#gpuimg').attr('src', obj.img_url);
        $('#gpuprice').text(`$${obj.price}`);
        $('#gpudesc').text(obj.description);
      })
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  showPart: function() {
    $.get('/parts/gpus')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#gpuname').text(obj.name);
        $('#gpuimg').attr('src', obj.img_url);
        $('#gpuprice').text(`$${obj.price}`);
        $('#gpudesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#gpuprice').text().slice(1));
    let part = $('#gpuname').text();
    this.props.updatePrice(price);
    this.props.updatePart('gpu', part);
    this.props.nextStage(3);
    $('.gpu-toggle').hide();
  },

  render: function() {
    return (
      <div className="step2">
        <span className="bold">THE GRAPHICS CARD:</span><p className="gpu-toggle"> A better graphics cards will enhance your computer's ability to display pictures, videos, and programs. This is the most important piece of the PC for gamers. </p>
        <div className="gpu-toggle">
          <p className="output"><span className="lefto">Average</span><span>Fast</span><span className="righto">Fastest</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="3" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="gpuimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="gpuname" className="partname"></p>
            <p id="gpudesc" className="partdesc"></p>
            <p id="gpuprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton gpu-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepTwo;