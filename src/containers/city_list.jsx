import React, { Component } from "react";
import { connect } from "react-redux";
import City from './city';

class CityList extends Component {
  render() {
    return (
      <div className="list-group cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
