import React from 'react';
import {connect} from 'react-redux';
import {fetchDataPending, setSurveyData} from './actions';
import Question from './question'
import axios from "axios/index";


class baseSurvey extends React.Component {
    componentDidMount() {
        loadSurveyData(this.props);
    }

    render() {
        if (!this.props.isPending && this.props.data) {
            var questionsList=this.props.data.survey.map((service, id) =><Question key={id} questionid={id} customerChoice={service.customerChoice} data={service} />)
            return (
                <div>
                    {questionsList}
                </div>
            )
        } else {
            return <div>
                <p>Loading ...</p>
            </div>
        }
    }
}

function loadSurveyData(props){
    props.dataPending(true)
    axios.get('/test.json')
        .then(res => {
            var data=(res.data);
            props.setSurveyData(data)
            props.dataPending(false)
        })
        .catch(errors => {
            props.dataPending(false)
            console.log(errors)
        })
}
const mapStateToProps = (state) => {
    return {
        isPending: state.data.pending,
        isEligible: state.data.eligible,
        data: state.data.data,
        answers: state.answers,

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setSurveyData: (data) => dispatch(setSurveyData(data)),
        dataPending: (bool) => {dispatch(fetchDataPending(bool))}
    }
}

const BaseSurveyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(baseSurvey);

export default BaseSurveyContainer

