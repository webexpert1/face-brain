import React from 'react';


const Rank = ({ name, entries}) => {
    return (
        <React.Fragment>
        <div className="white f3">
            {`${name} , your current rank is`}
            </div>
            <div className="white f3">
                {entries}
            </div>
        </React.Fragment>
    ) 
}

export default Rank;