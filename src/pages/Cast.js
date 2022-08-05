import { CastInfo } from 'components/CastInfo/CastInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'services/fetch-api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchCastMovie(id).then(setCast);
  }, [id]);

  return <CastInfo casts={cast} />;
};

export default Cast;
