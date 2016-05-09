const React = require('react');

const StepEight = React.createClass({
  componentDidMount: function() {
    $.get('/parts/cases')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#casename').text(obj.name);
        $('#caseimg').attr('src', obj.img_url);
        $('#caseprice').text(`$${obj.price}`);
        $('#casedesc').text(obj.description);
      })
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  showPart: function() {
    $.get('/parts/cases')
      .done((data) => {
        let obj = data[(this.refs.slider.value)-1];
        $('#casename').text(obj.name);
        $('#caseimg').attr('src', obj.img_url);
        $('#caseprice').text(`$${obj.price}`);
        $('#casedesc').text(obj.description);
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#caseprice').text().slice(1));
    let part = $('#casename').text();
    this.props.updatePrice(price);
    this.props.updatePart('case', part);
    this.props.nextStage(9);
    $('.case-toggle').hide();
  },

  render: function() {
    return (
      <div className="step8">
        <span className="bold">THE CASE:</span><p className="case-toggle"> Unless you want a bunch of wires connected to a motherboard lying on your desk, you need a case to hold all of the parts together (and maybe look cool as well!)</p>
        <div className="case-toggle">
          <p className="output"><span className="lefto">Solid</span><span>Awesome</span><span className="righto">Insane</span></p>
          <form>
            <input className="slider" onChange={this.showPart} ref="slider" type="range" min="1" max="3" step="1" defaultValue="1"></input>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="caseimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="casename" className="partname"></p>
            <p id="casedesc" className="partdesc"></p>
            <p id="caseprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton case-toggle" onClick={this.clickHandler}>I want this</button>
      </div>
    )
  }
})

module.exports = StepEight;