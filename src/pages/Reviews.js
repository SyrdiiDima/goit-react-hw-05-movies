import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsInfo/ReviewsInfo';

import { fetchReviewsInfo } from 'services/fetch-api';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviewsInfo(id).then(setReviews);
  }, [id]);

  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
