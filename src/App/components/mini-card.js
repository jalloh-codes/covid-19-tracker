import React from 'react'

const MiniCard = (props) =>{
    
    return(
        <div className="data-ul">
            
                <li><i>{props.data.key}:</i></li>
                <li><i>{props.data.value}</i></li>
        </div>
    );
}

export default MiniCard;