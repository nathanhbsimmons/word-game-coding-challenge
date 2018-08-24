import WinnerDisplay from "../components/WinnerDisplay";
import { connect } from "react-redux";

const mapStateToProps = state => ({winner: state.winner})

export default connect(mapStateToProps)(WinnerDisplay);
