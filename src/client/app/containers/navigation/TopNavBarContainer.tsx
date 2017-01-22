import { connect } from 'react-redux'
import TopNavBar from '../../components/navigation/TopNavBar';

const mapStateToProps = (state:any, ownProps:any) => {
    console.log("Ownprops: ", ownProps);
    return {
        lang: state.appState.lang
    }
}

export default connect(mapStateToProps)(TopNavBar)