// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchCastMovie } from 'services/fetch-api';
// import { CastInfo } from 'components/CastInfo/CastInfo';

// const Cast = () => {
//   const [cast, setCast] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchCastMovie(id).then(setCast);
//   }, [id]);

//   return <CastInfo casts={cast}></CastInfo>;
// };

// export default Cast;
import { CastList } from 'components/CastInfo/CastInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetch-api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieCast(id).then(setCast);
  }, [id]);

  return <CastList casts={cast} />;
};

export default Cast;
