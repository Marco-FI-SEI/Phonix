// import React, { Component } from 'react';

// import ReviewList from "../reviews/ReviewList";

// class HeadphonePage extends Component {



//   render() {
//     const { headphone, reviews } = this.props;

//     return (
//       <div>
//         <h1>{headphone.model}</h1>
//         <h2>{headphone.manufacturer}</h2>
//         <div>
//           <ReviewList reviews={reviews} />
//         </div>
//       </div>
//     );
//   }
// };

const mapStateToProps = (state, ownProps) => {
  let headphone = {
    id: null,
    model: "",
    manufacturer: ""
  };

  const headphoneId = ownProps.match.params.headphone_id;
  const headphones = state.headphones.headphonesCollection;

  if (headphones.length > 0) {
    headphone = {...headphones.find(headphone => headphone.id === headphoneId)}
  }

  return {
    headphone,
    reviews: state.reviews.headphoneReviewsCollection
  };
};

export default connect(mapStateToProps, { loadReviews })(HeadphonePage);
