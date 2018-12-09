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
                <button type="button" className="btn btn-outline-light my-2 my-sm-0 text-body" data-toggle="modal" data-target={'#'+snack.id}>
                    View
                </button>
                <div className="modal" id={snack.id} tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{snack.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="media">
                          <img className="mr-3" src={snack.img} alt="img" height="100px" width="100px"/>
                          <div className="media-body">
                            <div>Product Description: <p>{snack.description}</p></div>
                            <div className="price-perish">
                              <div>Price: ${snack.price}</div>
                              <div>Perishability: {snack.is_perishable ? "yes" : "no"}</div>
                            </div>
                          </div>
                        </div>
                        <div className="reviews">
                            {snack.reviews ?
                                    snack.reviews.map(review => {
                                        return(
                                          <div className="card">
                                            <div className="card-header">
                                              <h3>{review.title}</h3>
                                            </div>
                                            <div className="card-body">
                                              <blockquote className="blockquote mb-0">
                                                <p>{review.text}</p>
                                                
                                              </blockquote>
                                              <span className="stars center" data-stars={review.rating}>X</span>
                                            </div>
                                          </div>
                                        )
                                    })
                                    : <div>no reviews</div>
                            }
                            
                        </div>
                        </div>
                        <button type="btn" className="btn text-body my-2 my-sm-0" onClick={(e) => props.submitReview(e)}>
                            Add a review
                        </button>
                    </div>
                </div>
            </div>
              </div>
            )

        })}
      </div>
    )
  }
  
  export default Snacklist 