const React = require('react');

const EditButton = React.createClass({
  clickHandler: function(e) {
    e.preventDefault();
    let price = -1 * parseInt($(`${this.props.part}price`));
    this.props.updatePrice(price);
    $(`.${this.props.part}-toggle`).show();
    this.props.updatePart(this.props.part, '');
    this.props.nextStage(this.props.num)
  },

  render: function() {
    return (
      <p className="edit-button" onClick={this.clickHandler}>edit</p>
    )
  }
})

module.exports = EditButton;