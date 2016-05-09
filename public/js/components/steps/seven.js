const React = require('react');

const StepSeven = React.createClass({
  componentDidMount: function() {
    $('#coolername').text('Stock');
    $('#coolerimg').attr('src', 'https://www.endpcnoise.com/sites/default/files/intel_1155_cpu_cooler.jpg');
    $('#coolerprice').text('$0');
    $('#coolerdesc').text('Unless you are going to be taxing your computer with long gaming sessions or video streaming, the stock cooler will do just fine.');
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  changeHandler: function() {
    if(this.refs.check.checked) {
      $('#coolername').text('Cooler Master Hyper 212 EVO');
      $('#coolerimg').attr('src', 'http://ecx.images-amazon.com/images/I/91wN1wFlqzL._SL1500_.jpg');
      $('#coolerprice').text('$30');
      $('#coolerdesc').text('The most popular cooler out there without a doubt. Does everything you could ask for at a very reasonable price.');
    } else {
      $('#coolername').text('Stock');
      $('#coolerimg').attr('src', 'https://www.endpcnoise.com/sites/default/files/intel_1155_cpu_cooler.jpg');
      $('#coolerprice').text('$0');
      $('#coolerdesc').text('Unless you are going to be taxing your computer with long gaming sessions or video streaming, the stock cooler will do just fine.');
    }
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#coolerprice').text().slice(1));
    let part = $('#coolername').text();
    this.props.updatePrice(price);
    this.props.updatePart('cooler', part);
    this.props.nextStage(8);
    $('.cooler-toggle').hide();
  },

  render: function() {
    return (
      <div className="step7">
        <span className="bold">THE CPU COOLER:</span><p className="cooler-toggle">The CPU cooler ... cools the CPU. Most cases come with 'stock' fan coolers that do a good job handling the cooling, but sometimes more is necessary.</p>
        <div className="cooler-toggle">
          <form className="checkform">
            <input type="checkbox" onChange={this.changeHandler} name="check" ref="check"></input>
            <label className="ilb" htmlFor="check">I want another fan</label>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="coolerimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="coolername" className="partname"></p>
            <p id="coolerdesc" className="partdesc"></p>
            <p id="coolerprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton cooler-toggle" onClick={this.clickHandler}>OK</button>
      </div>
    )
  }
})

module.exports = StepSeven;