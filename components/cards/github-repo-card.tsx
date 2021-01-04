import React, { FC } from 'react';
// hooks
import { useRequest } from 'lib/hooks';

const GithubRepoCard: FC = props => {
  const { data } = useRequest({ url: props.url });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data && data.name}</h5>
        <p className="card-text">{data && data.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        <a href={data && data.html_url} target="_blank" rel="noreferrer">
          Visit
        </a>
      </div>
    </div>
  );
};

export default GithubRepoCard;
