import {connect} from 'react-redux'

import EnterNew from '../components/EnterNew'

const mapStateToProps = (state) => {
    return {
        word: state.word
    }
}

export default connect(
    mapStateToProps
)(EnterNew)
