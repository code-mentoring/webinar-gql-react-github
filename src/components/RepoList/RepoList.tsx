import './RepoList.css';

import React, { useEffect, useState } from 'react';

import { API } from '../../lib/API';

export interface RepoListProps {}

export const RepoList: React.FC<RepoListProps> = () => {
  const [repos, setRepos] = useState<any[]>();

  useEffect(() => {
    API.getRepos().then(setRepos);
  }, []);

  if (!repos) return <span>Loading...</span>;

  return <ul className="repos">
    {repos.map(r => <li>
      <a href={r.url}>{r.name}</a>
      <span>{r.languages.edges.map((l: any) => l.node.name).join(', ')} </span>
    </li>)}
  </ul>;
}


