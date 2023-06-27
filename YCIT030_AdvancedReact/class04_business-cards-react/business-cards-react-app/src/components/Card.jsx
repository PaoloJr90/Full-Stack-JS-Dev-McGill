import { Component } from "react";

import "./card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not Specified",
      position: "Not Specified",
      phone: "Not Specified",
      email: "Not Specified",
      photo: "../assets/image/no-photo.png",
      show: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: props.name || state.name,
      position: props.position || state.position,
      phone: props.phone || state.phone,
      email: props.email || state.email,
    };
  }

  deleteCard = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      this.state.show && (
        <div className="card">
          <div className="card__img">
            <img src={this.state.photo} alt="profile" />
          </div>
          <p className="card__name">{this.state.name}</p>
          <h2 className="card__position">{this.state.position}</h2>
          <a className="card__phone" href={`tel:${this.state.phone}`}>
            {this.state.phone}
          </a>
          <a className="card__mail" href="mailto:some@website">
            {this.state.email}
          </a>
          <button className="card__btn" onClick={this.deleteCard}>
            Delete
          </button>
        </div>
      )
    );
  }
}

export default Card;
