// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchReviewsMovie } from 'services/fetch-api';
// import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchReviewsMovie(id).then(setReviews);
//   }, [id]);

//   return <ReviewsInfo reviews={reviews}></ReviewsInfo>;
// };

// export default Reviews;
import { ReviewsList } from 'components/ReviewsInfo/ReviewsInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from 'services/fetch-api';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviews(id).then(setReviews);
  }, [id]);

  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
