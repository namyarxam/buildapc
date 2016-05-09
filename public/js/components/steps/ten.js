const React = require('react');

const StepTen = React.createClass({
  componentDidMount: function() {
    $('#optname').text('None');
    $('#optimg').attr('src', 'https://cdn2.iconfinder.com/data/icons/interface-part-1/32/circle-diagonal-line-512.png');
    $('#optprice').text('$0');
    $('#optdesc').text('No optical drive.');
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  changeHandler: function() {
    if(this.refs.check.checked) {
      $('#optname').text('Asus DRW-24B1ST');
      $('#optimg').attr('src', 'https://www.asus.com/media/global/products/Xf3lRLd28V8de4YN/zhORvYvnuNkD6E0s_500.jpg');
      $('#optprice').text('$19');
      $('#optdesc').text('Cheap, sturdy, functional.');
    } else {
      $('#optname').text('None');
      $('#optimg').attr('src', 'https://cdn2.iconfinder.com/data/icons/interface-part-1/32/circle-diagonal-line-512.png');
      $('#optprice').text('$0');
      $('#optdesc').text('No optical drive.');
    }
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#optprice').text().slice(1));
    let part = $('#optname').text();
    this.props.updatePrice(price);
    this.props.updatePart('opt', part);
    this.props.nextStage(11);
    $('.opt-toggle').hide();
  },

  render: function() {
    return (
      <div className="step10">
        <span className="bold">THE OPTICAL DRIVE:</span><p className="opt-toggle">Pure preference here. An optical drive is another name for a CD drive.</p>
        <div className="opt-toggle">
          <form className="checkform">
            <input type="checkbox" onChange={this.changeHandler} name="check" ref="check"></input>
            <label className="ilb" htmlFor="check">I still use CDs</label>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="optimg" className="partimg slidedown"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="optname" className="partname"></p>
            <p id="optdesc" className="partdesc"></p>
            <p id="optprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton opt-toggle" onClick={this.clickHandler}>OK</button>
      </div>
    )
  }
})

module.exports = StepTen;