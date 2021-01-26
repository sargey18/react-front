import React from 'react';



const Rank = ({name, entries}) => {
    return (
        <div>
           <div className='red f3'>
               { `${name}, your photo count is...`}
           </div>
           <div className='red f1'>
               {entries}
           </div>
        </div>
    );
}

export default Rank;