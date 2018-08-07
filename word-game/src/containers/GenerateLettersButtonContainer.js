import GenerateLettersButton from "../components/GenerateLettersButton";
import { connect } from "react-redux";
import { generateLetters } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
      generateLetters:function(){
      let action = generateLetters();
      dispatch(action);
      },
  };
}

export default connect(null,mapDispatchToProps)(GenerateLettersButton);
