const React = require('react');

const StepThirteen = React.createClass({
  componentDidMount: function() {
    $('#r1').prop("checked", true);
    $.get('/parts/keyboards')
      .done((data) => {
        $('#keyboardname').text(data[0].name);
        $('#keyboardimg').attr('src', data[0].img_url);
        $('#keyboardprice').text(`$${data[0].price}`);
        $('#keyboarddesc').text(data[0].description);
      })
    $("html, body").animate({
      scrollTop: $('#bottom').offset().top
    }, 1000);
  },

  changeHandler: function() {
    $.get('/parts/keyboards')
      .done((data) => {
        if($('#r1').is(':checked')) {
          $('#keyboardname').text(data[0].name);
          $('#keyboardimg').attr('src', data[0].img_url);
          $('#keyboardprice').text(`$${data[0].price}`);
          $('#keyboarddesc').text(data[0].description);
        } else if($('#r2').is(':checked')) {
          $('#keyboardname').text(data[1].name);
          $('#keyboardimg').attr('src', data[1].img_url);
          $('#keyboardprice').text(`$${data[1].price}`);
          $('#keyboarddesc').text(data[1].description);
        } else if($('#r3').is(':checked')) {
          $('#keyboardname').text(data[2].name);
          $('#keyboardimg').attr('src', data[2].img_url);
          $('#keyboardprice').text(`$${data[2].price}`);
          $('#keyboarddesc').text(data[2].description);
        } else if($('#r4').is(':checked')) {
          $('#keyboardname').text(data[3].name);
          $('#keyboardimg').attr('src', data[3].img_url);
          $('#keyboardprice').text(`$${data[3].price}`);
          $('#keyboarddesc').text(data[3].description);
        }
      })
  },

  clickHandler: function(e) {
    e.preventDefault();
    let price = parseInt($('#keyboardprice').text().slice(1));
    let part = $('#keyboardname').text();
    this.props.updatePrice(price);
    this.props.updatePart('keyboard', part);
    this.props.nextStage(14);
    $('.keyboard-toggle').hide();
  },

  render: function() {
    return (
      <div className="step13">
        <span className="bold">THE KEYBOARD:</span><p className="keyboard-toggle"> A surprisingly customizable peripheral part for a custom PC. There is a wide range of keybaords to choose from. Most are catergorized as (1) mechanical or (2) non-mechanical.</p>
        <div className="keyboard-toggle">
          <form ref="radioForm" className="checkform" onChange={this.changeHandler}>
            <label id="radio"><input id="r1" type="radio" name="keyboard-choice" defaultValue="checked" value="1"></input>Normal #1</label>
            <label id="radio" className="radio2"><input id="r2" type="radio" name="keyboard-choice" value="2"></input>Normal #2</label>
            <label id="radio"><input id="r3" type="radio" name="keyboard-choice" value="3"></input>Mech #1</label>
            <label id="radio"><input id="r4" type="radio" name="keyboard-choice" value="4"></input>Mech #2</label>
          </form>
        </div>
        <div className="partcontainer">
          <div className="ilb pimg-container">
            <img id="keyboardimg" className="partimg"></img>
          </div>
          <div className="ilb pinfo-container">
            <p id="keyboardname" className="partname"></p>
            <p id="keyboarddesc" className="partdesc"></p>
            <p id="keyboardprice" className="partprice"></p>
          </div>
        </div>
        <button className="pickbutton keyboard-toggle" onClick={this.clickHandler}>OK</button>
      </div>
    )
  }
})

module.exports = StepThirteen;