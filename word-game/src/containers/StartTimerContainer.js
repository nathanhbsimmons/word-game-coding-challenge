import StartTimer from "../components/StartTimer";
import { connect } from "react-redux";
import { setCount } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
      setCount:function(){
      let action = setCount();
      dispatch(action);
      },
  };
}

const mapStateToProps = state => ({count: state.count})

export default connect(mapStateToProps,mapDispatchToProps)(StartTimer);
