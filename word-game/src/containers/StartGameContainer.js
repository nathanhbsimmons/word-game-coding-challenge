import StartGame from "../components/StartGame";
import { connect } from "react-redux";
import { setCount,generateLetters,resetCount,resetWordsUsed,setError } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
        setCount: function () {
          let action = setCount();
          dispatch(action);
        },
        generateLetters: function () {
          let action = generateLetters();
          dispatch(action);
        },
        resetCount: function () {
          let action = resetCount();
          dispatch(action);
        },
        resetWordsUsed: function () {
          let action = resetWordsUsed();
          dispatch(action);
        },
        setError: function (error) {
          let action = setError(error);
          dispatch(action);
        },
  };
}

const mapStateToProps = state => ({count: state.count})

export default connect(mapStateToProps,mapDispatchToProps)(StartGame);
