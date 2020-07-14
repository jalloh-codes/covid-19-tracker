import React, {Component} from 'react';
import Date from '../components/date';
import {connect} from 'react-redux';
import {getUSData, getStatesInformation, getStatesCurrent, getUSDaily} from '../../action/covidAction';
import {setData, stateNames, statesCase, concatenateObject, pushState} from '../functions/functions';
import MiniCards from '../components/mini-card';
import MiniTable from '../components/mini-table';
import HistogramData from './histogram';
import { Container, Row} from 'reactstrap';




class Index extends Component{

    constructor(props){
        super(props);
        this.state={
            visible: false,
            xLabel: [],
            yLabel: [],
            statesData: []
        }
       this.usHistogram = this.usHistogram.bind(this);
    }
     componentWillMount(){
        this.props.getUSData();
        this.props.getStatesInformation();
        this.props.getStatesCurrent();
        this.props.getUSDaily();
    }

    toggleHidden(){
        this.setState({
            visible: !this.state.visible
        })
    }

    usHistogram =()=>{

        return(concatenateObject(stateNames(this.props.statesInfromation, 'state', 'name'),
        statesCase(this.props.stateCurrent, 'state', 'positive',  'negative', 
        'hospitalizedCurrently', 'recovered', 'death')).map(obj => obj
           
        ))
    }


    render(){
       
      pushState(stateNames(this.props.usDaily, 'date', 'death'), this.state.xLabel, 'date')
      pushState(stateNames(this.props.usDaily, 'date', 'death'), this.state.yLabel, 'death')
      concatenateObject(stateNames(this.props.statesInfromation, 'state', 'name'),
      statesCase(this.props.stateCurrent, 'state', 'positive',  'negative', 
                    'hospitalizedCurrently', 'recovered', 'death'), this.state.statesData)
       
        return(
            <Container className="index" fluid="sm">  
              <h3 className="label">COVID-19 TRACKER</h3>
                <header className="date-box">
                    <Date data={setData(this.props.usCurrent, 'date')} /> 
                </header>
                <Container className="data-box" fluid="sm" >
                    <Row className="data">
                        <div className="column-1">
                        <div className="heading">
                            <h3>States Current Data</h3>
                        </div>
                        <div className="table-box" >
                        {
                            this.usHistogram().map((data) =>{
                                return<MiniTable data={data} key={data.state}/>
                                
                            })
                        }
                        </div>
                        </div>
                        <div  className="column-2">
                        <button onClick={this.toggleHidden.bind(this)}>Show past 30 days death rate
                        </button>
                        {( !this.state.visible) && (
                        <div className="wraper">
                            <div className="mini-cards-box">
                                <MiniCards data={{key: 'Death', value: `${setData(this.props.usCurrent, 'death')}`}}/>
                                <MiniCards data={{key: 'In ICU', value: `${setData(this.props.usCurrent, 'inIcuCurrently')}`}}/>
                                <MiniCards data={{key: 'On Ventilator', value: `${setData(this.props.usCurrent, 'onVentilatorCurrently')}`}}/>
                                <MiniCards data={{key: 'Cases', value: `${setData(this.props.usCurrent, 'positive')}`}}/>
                            </div>
                            <div className="mini-cards-box">
                                <MiniCards data={{key: 'Test Results', value: `${setData(this.props.usCurrent, 'totalTestResults')}`}}/>  
                                <MiniCards data={{key: 'Hospitalized', value: `${setData(this.props.usCurrent, 'hospitalizedCurrently')}`}}/>  
                                <MiniCards data={{key: 'Recovered', value: `${setData(this.props.usCurrent, 'recovered')}`}}/>
                                <MiniCards data={{key: 'Negative', value: `${setData(this.props.usCurrent, 'negative')}`}}/>
                            </div>
                        </div>)|| (                
                        <div className="histogram">
                            <HistogramData xLabel={this.state.xLabel.slice(0, 30)} yLabel={this.state.yLabel.slice(0, 30)}/>
                        </div>
                        )}
                        </div>
                    </Row>
                </Container>
            </Container>
        );
    }
}



const mapStateToProps = (state) =>{
    return{
        statesInfromation: state.statesInformation,
        usCurrent: state.usData,
        stateCurrent: state.statesCurrent,
        usDaily: state.usDaily
    }
}

export default connect(mapStateToProps, {getUSData, getStatesInformation, getStatesCurrent, getUSDaily})(Index);