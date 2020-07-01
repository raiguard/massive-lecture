import React from "react";
import axios from "axios";

class AvengerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editView: false,
      superInput: ""
    };
  }

  editSuperPower = () => {
    const { superInput } = this.state;
    const { getAvengersFn, avenger } = this.props;
    const { id } = avenger;

    axios
      .put(`/api/avenger/${id}`, { superPower: superInput })
      .then(() => {
        this.toggleEdit();
        getAvengersFn();
      })
      .catch((err) => console.log(err));
  };

  snapHero = () => {
    const { getAvengersFn, avenger } = this.props;
    const { id } = avenger;
    axios
      .delete(`/api/avenger/${id}`)
      .then(() => getAvengersFn())
      .catch((err) => console.log(err));
  };

  handleInput = (val) => {
    this.setState({ superInput: val });
  };

  toggleEdit = () => {
    this.setState({ editView: !this.state.editView });
  };

  render() {
    const { editView, superInput } = this.state,
      { avenger } = this.props;

    return (
      <div className="avenger-box">
        <p>{avenger.name}</p>
        {!editView ? (
          <p>{avenger.super_power}</p>
        ) : (
          <>
            <input value={superInput} onChange={(e) => this.handleInput(e.target.value)} />
            <button onClick={this.editSuperPower}>Submit</button>
          </>
        )}
        <button onClick={this.toggleEdit}>Edit SuperPower</button>
        <button onClick={this.snapHero}>Snap</button>
      </div>
    );
  }
}

export default AvengerDisplay;
