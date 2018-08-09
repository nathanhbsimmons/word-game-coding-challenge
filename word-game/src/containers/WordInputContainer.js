import WordInput from "../components/WordInput";
import { connect } from "react-redux";
import { inputPlayersWord, setWordsUsed} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
      inputPlayersWord:function(word){
      let action = inputPlayersWord(word);
      dispatch(action);
      },
      setWordsUsed:function(word){
        let action = setWordsUsed(word);
        dispatch(action);
        },
  };
}

const mapStateToProps = state => ({ playersWords: state.playersWords, wordsUsed: state.wordsUsed, letters: state.letters })

export default connect(mapStateToProps,mapDispatchToProps)(WordInput);