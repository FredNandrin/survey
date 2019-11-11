import React from 'react';
import {onOptionClick} from "./actions";
import {connect} from "react-redux";


class Question extends React.Component {
    componentDidMount() {

    }
    render() {
        if (this.props.data) {
            const question=this.props.data.question;
            const answers = this.props.data.answers.map((answer, id) =>
                <button key={id}
                        onClick={() => this.props.onOptionClick(id)}
                        className={"btn m-2"}>{answer.answer} {answer.id}</button>);
            const customerChoice=this.props.data.customerChoice;
            return (
                <div className={"card mb-4 shadow-sm"}>
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Question</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            {question}{customerChoice}
                        </div>
                        <div className={"clearfix"}>{answers}</div>
                    </div>
                </div>
            )
        } else {
            return <div>
                <p>Loading ...</p>
            </div>
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onOptionClick: (id) => {
            dispatch(onOptionClick(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {}
}


const QuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);

export default QuestionContainer

