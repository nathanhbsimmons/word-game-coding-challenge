import Counter from "../components/Counter";
import { connect } from "react-redux";

const mapStateToProps = state => ({count: state.count})

export default connect(mapStateToProps)(Counter);
