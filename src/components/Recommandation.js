import React from "react";
import { connect } from "react-redux";
import { addToMyList } from '../redux/actions'

function Recommandation (props) {
  return (
    <div className="myList">
    {props.recommendation.map(mylist => {
      return (
        <figure key={mylist.id} className="figure-mylist">
          <img src={mylist.img} alt={mylist.id} />
          <figcaption>{mylist.title}</figcaption>
          <button
            className="btn"
            onClick={() => props.addToMyList(mylist.id)}>
            Add
          </button>
        </figure>
      );
    })}
    </div>
  );
}

export default connect (
  null,
  {addToMyList}
)(Recommandation);