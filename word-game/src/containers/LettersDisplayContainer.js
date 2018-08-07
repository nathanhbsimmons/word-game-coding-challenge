import LettersDisplay from "../components/LettersDisplay";
import { connect } from "react-redux";

const mapStateToProps = state => ({letters: state.letters})

export default connect(mapStateToProps)(LettersDisplay);
