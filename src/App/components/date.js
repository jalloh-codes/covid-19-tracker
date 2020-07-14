import React from 'react'

const Date = (props) =>{

    
    let object  = `${Object.values(props)}`
    //let key = Object.keys(props)
    return(
        <div className="date-div">
            <div>
               <li>
                <i>{object}  </i>
                <i className="fas fa-bell"></i>
                </li>
            </div>
        </div>
    );
}

export default Date;