import Timer from "../components/Timer";
import { connect } from "react-redux";

const mapStateToProps = state => ({count: state.count})

export default connect(mapStateToProps)(Timer);
