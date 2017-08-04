import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// surface and get ALL STATES to pass to Main component
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}

// surface and get ALL FUNCTIONS to pass to Main Component
function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main); // call against Main component and add every state and all actionCreators functions and add it to Main component. so you DONT HAVE TO PASS AS PROPS FROM PROVIDER DOWN UNTIL MAIN COMPONENT.
console.log('try push');

export default App;
