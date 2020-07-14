import React, {Component} from 'react'
import Histogram from 'react-chart-histogram';
const HistogramData = (props) =>{
    
    
    

    
    console.log(props);
    
    const labels = [];
    const data = [];
    const options = { fillColor: '#ff3b3b', strokeColor: '#00e1fa',  };

    props.yLabel.forEach(err =>{
        let int = parseInt(err)
        data.push(int)
    })
    props.xLabel.forEach(err =>{
        labels.push(err)
    })
    return(
        <div>
        
        <Histogram
        xLabels={labels}
        yValues={data}
        width='550'
        height='400'
        options={options}
        />
        </div>
    );
    
}

export default HistogramData;