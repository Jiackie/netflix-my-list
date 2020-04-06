import React from "react";
import { connect } from "react-redux";
import { deleteMyList } from '../redux/actions';

function List (props) {
  return (
    <div className="myList">
      {props.list.map(mylist => {
        return (
          <figure key={mylist.id} className="figure-mylist">
            <img src={mylist.img} alt={mylist.id} />
            <figcaption>{mylist.title}</figcaption>
            <button
              className="btn"
              onClick={() => props.deleteMyList(mylist.id)}>
              Remove
            </button>
          </figure>
        );
      })}
    </div>
  );
}

export default connect (
  null,
  {deleteMyList}
)(List);
