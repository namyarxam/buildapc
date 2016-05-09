const React = require('react');

const StepTwelve = React.createClass({
  componentDidMount: function() {
    $.get('/parts/headphones')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#headphonename').text(obj.name);
        $('#headphoneimg').attr('src', obj.img_url);
        $('#headphoneprice').text(`$${obj.price}`);
        $('#headphonedesc').text(obj.description);
      })
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  showPart: function() {
    $.get('/parts/headphones')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#headphonename').text(obj.name);
        $('#headphoneimg').attr('src', obj.img_url);
        $('#headphoneprice').text(`$${obj.price}`);
        $('#headphonedesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#headphoneprice').text().slice(1));
    let part = $('#headphonename').text();
    this.props.updatePrice(price);
    this.props.updatePart('headphones', part);
    this.props.nextStage(13);
    $('.headphone-toggle').hide();
  },

  render: function() {
    return (
      <div className="step12">
        <span className="bold">THE HEADPHONES:</span><p className="headphone-toggle"> You need headphones to fully enjoy the experience of a personal computer. There are many great options for headphones that blow the typical apple headphone out of the water. </p>
        <div className="headphone-toggle">
          <p className="output"><span className="lefto">High quality</span><span className="righto">Premium</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="2" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="headphoneimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="headphonename" className="partname"></p>
            <p id="headphonedesc" className="partdesc"></p>
            <p id="headphoneprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton headphone-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepTwelve;