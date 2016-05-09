const React = require('react');

const StepFive = React.createClass({
  componentDidMount: function() {
    $('html', 'body').animate({
      scrollTop: $("#bottom").offset().top
    }, 2000);
    $('#ssdname').text('None');
    $('#ssdimg').attr('src', 'https://cdn2.iconfinder.com/data/icons/interface-part-1/32/circle-diagonal-line-512.png');
    $('#ssdprice').text('$0');
    $('#ssdimg').addClass('slidedown');
    $('#ssddesc').text('A solid-state drive is not requied (but reccomended!).');
  },
  
  changeHandler: function() {
    if(this.refs.check.checked) {
      $('#ssdname').text('Crucial BX100 250GB');
      $('#ssdimg').attr('src', 'http://content.hwigroup.net/images/products_xl/272983/crucial-bx100-250gb.jpg');
      $('#ssdprice').text('$77');
      $('#ssdimg').removeClass('slidedown');
      $('#ssddesc').text('A very good value SSD with great performance. Low priced for its capacity and one of the best all-around SSD deals.');
    } else {
      $('#ssdname').text('None');
      $('#ssdimg').attr('src', 'https://cdn2.iconfinder.com/data/icons/interface-part-1/32/circle-diagonal-line-512.png');
      $('#ssdimg').addClass('slidedown');
      $('#ssdprice').text('$0');
      $('#ssddesc').text('A solid-state drive is not requied (but reccomended!).');
    }
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#ssdprice').text().slice(1));
    let part = $('#ssdname').text();
    this.props.updatePrice(price);
    this.props.updatePart('ssd', part);
    this.props.nextStage(6);
    $('.ssd-toggle').hide();
  },

  render: function() {
    return (
      <div className="step5">
        <span className="bold">THE SSD:</span><p className="ssd-toggle">Solid State Drives are very popular for custom build PC's. A SSD is a seperate hard-drive that is ultra-fast. That means you can save things to your SSD and they will load/start a lot faster than just a plain old HD. SSD's are not required for a PC, but reccomended for increase quality of life. </p>
        <div className="ssd-toggle">
          <form className="checkform">
            <input type="checkbox" onChange={this.changeHandler} name="check" ref="check"></input>
            <label className="ilb" htmlFor="check">I want a SSD</label>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="ssdimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="ssdname" className="partname"></p>
            <p id="ssddesc" className="partdesc"></p>
            <p id="ssdprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton ssd-toggle" onClick={this.clickHandler}>OK</button>
      </div>
    )
  }
})

module.exports = StepFive;