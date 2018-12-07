import React from 'react';

const Snacklist = (props) => {
    return (
      <div>
        {props.data.map(snack => {
            return (
            <div>
                <div>{snack.name}</div>
                <div>{snack.description}</div>
                <div>{snack.is_perishable}</div>
                <img src={snack.img} />
            </div>
            )

        })}
      </div>
    )
  }
  
  export default Snacklist 