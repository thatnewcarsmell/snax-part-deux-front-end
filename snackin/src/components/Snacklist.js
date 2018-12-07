import React from 'react';

const Snacklist = (props) => {
    return (
      <div  className="snackcard">
        {props.data.map(snack => {
            return (
              <div className="card" style={{width: 15+'rem'}}>
                <img className="card-img-top" src={snack.img} alt="img" height="200px"/>
                <div className="card-body">
                  <h5 className="card-title">{snack.name}</h5>
                </div>
              </div>
            )

        })}
      </div>
    )
  }
  
  export default Snacklist 