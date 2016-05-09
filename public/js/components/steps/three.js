const React = require('react');

const StepThree = React.createClass({
  componentDidMount: function() {
    $.get('/parts/ram')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#ramname').text(obj.name);
        $('#ramimg').attr('src', obj.img_url);
        $('#ramprice').text(`$${obj.price}`);
        $('#ramdesc').text(obj.description);
      })
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  showPart: function() {
    $.get('/parts/ram')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#ramname').text(obj.name);
        $('#ramimg').attr('src', obj.img_url);
        $('#ramprice').text(`$${obj.price}`);
        $('#ramdesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#ramprice').text().slice(1));
    let part = $('#ramname').text();
    this.props.updatePrice(price);
    this.props.updatePart('ram', part);
    this.props.nextStage(4);
    $('.ram-toggle').hide();
  },

  render: function() {
    return (
      <div className="step3">
        <span className="bold">THE RAM:</span><p className="ram-toggle"> The computers working memory. The more RAM you have, the more applications you can have open at the same time. </p>
        <div className="ram-toggle">
          <p className="output"><span className="lefto">Standard</span><span className="righto">Premium</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="2" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="ramimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="ramname" className="partname"></p>
            <p id="ramdesc" className="partdesc"></p>
            <p id="ramprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton ram-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepThree;