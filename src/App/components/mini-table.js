import React from 'react'

const MiniTable = (props) =>{

    
    return(
        <div className="table-div">
            <p className="state-name">{props.data.name}</p>
            <table>
                <thead>
                    <tr>
                        <th>Cases</th>
                        <th>Negative</th>
                        <th>Hospitalized</th>
                        <th>Recovered</th>
                        <th>Death</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.data.positive}</td>
                        <td>{props.data.negative}</td>
                        <td>{props.data.hospitalizedCurrently}</td>
                        <td>{props.data.recovered}</td>
                        <td>{props.data.death}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MiniTable;