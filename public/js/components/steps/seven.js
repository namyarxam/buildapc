const React = require('react');

const StepSeven = React.createClass({
  componentDidMount: function() {
    $('#coolername').text('Stock');
      $('#coolerimg').attr('src', 'https://cdn2.iconfinder.com/data/icons/interface-part-1/32/circle-diagonal-line-512.png');
      $('#coolerprice').text('$0');
      $('#coolerimg').addClass('slidedown');
      $('#coolerdesc').text('A solid-state drive is not requied (but reccomended!).');
  },

  changeHandler: function() {
    if(this.refs.check.checked) {
      $('#coolername').text('Crucial BX100 250GB');
      $('#coolerimg').attr('src', 'http://content.hwigroup.net/images/products_xl/272983/crucial-bx100-250gb.jpg');
      $('#coolerprice').text('$77');
      $('#coolerimg').removeClass('slidedown');
      $('#coolerdesc').text('A very good value cooler with great performance. Low priced for its capacity and one of the best all-around cooler deals.');
    } else {
      $('#coolername').text('Stock');
      $('#coolerimg').attr('src', 'https://cdn2.iconfinder.com/data/icons/interface-part-1/32/circle-diagonal-line-512.png');
      $('#coolerimg').addClass('slidedown');
      $('#coolerprice').text('$0');
      $('#coolerdesc').text('A solid-state drive is not requied (but reccomended!).');
    }
  },

  clickHandler: function(e) {
    e.preventDefault();
    this.props.nextStage(6);
    $('.cooler-toggle').hide();
  },

  render: function() {
    return (
      <div className="step7">
        <p><span className="bold">THE COOLER:</span> Computer cases (coming soon) come with their own stock coolers which do the job most of the time. If you are going to be doing heavy gaming, a basic cooler is reccomended. </p>
        <div className="cooler-toggle">
          <form>
            <input type="checkbox" onChange={this.changeHandler} name="check" ref="check"></input>
            <label className="ilb" htmlFor="check">I want a cooler</label>
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