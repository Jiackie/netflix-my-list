import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList, getRecommendation, getPending, getError } from '../redux/selectors';
import { fetchList } from '../redux/actions';
import List from './List';
import Recommandation from './Recommandation';

// Hooks;

function MyList(props) {
  const { fetchList, list, error, recommendation, pending } = props;
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if (pending) {
    return (<p>Pending...</p>);
  } else if (error) {
    return (<p>Loading Error! {error.message}</p>);
  }

  return (
    <div>
      <div className="bar">
        <img
          src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-icon">
        </img>
      </div>
      <div className="list-header">
        <h2>My List</h2>
      </div>
      <List list={list} />
      <div className="list-header">
        <h2>Recommandation</h2>
      </div>
      <Recommandation recommendation= {recommendation} />
      <div className="bottom-bar">
        <h4 className="bottom-header">My List : </h4>
        {list.map(item => (<a key={item.id}>{item.title}</a>))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pending: getPending(state),
  list: getList(state),
  recommendation: getRecommendation(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchList: fetchList
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList);

// class MyList extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchList());
//   }
// 
//   render() {
//     const { pending, list, recommendation, error } = this.props;
//     if (pending) {
//       return (<p>Pending...</p>);
//     } else if (error) {
//       return (<p>Loading Error! {error.message}</p>);
//     }
// 
//     return (
//       <div>
//         <div className="bar">
//           <img
//             src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png"
//             alt="netflix-icon">
//           </img>
//         </div>
//         <div className="list-header">
//           <h2>My List</h2>
//         </div>
//         <List list={list} />
//         <div className="list-header">
//           <h2>Recommandation</h2>
//         </div>
//         <Recommandation recommendation= {recommendation} />
//       </div>
//     );
//   }
// }
