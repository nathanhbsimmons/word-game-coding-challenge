import EnteredWordsDisplay from "../components/EnteredWordsDisplay";
import { connect } from "react-redux";

const mapStateToProps = state => ({playersWords: state.playersWords, wordsUsed: state.wordsUsed})

export default connect(mapStateToProps)(EnteredWordsDisplay);
