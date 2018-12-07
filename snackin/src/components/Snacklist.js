import React from 'react';

const Snacklist = (props) => {
    return (
      <div  className="snackcard">
        {props.data.map(snack => {
            return (
              <div class="card" style={{width: 15+'rem'}}>
                <img class="card-img-top" src={snack.img} alt="img" height="200px"/>
                <div class="card-body">
                  <h5 class="card-title">{snack.name}</h5>
                </div>
              </div>
            )

        })}
      </div>
    )
  }
  
  export default Snacklist 