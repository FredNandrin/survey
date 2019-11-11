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
                <button key={id} data-question={this.props.questionid} data-answer={id}
                        onClick={() => this.props.onOptionClick(this.props.questionid,id)}
                        className={"btn m-2"+(id===this.props.answers[this.props.questionid]?" btn-primary":"")}>{answer.answer}</button>);
            return (
                <div className={"card mb-4 shadow-sm"}>
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Question</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            {question}
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
        onOptionClick: (questionid,id) => {
            dispatch(onOptionClick(questionid,id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        answers: state.data.answers,
        datas: state.data
    }
}


const QuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);

export default QuestionContainer

