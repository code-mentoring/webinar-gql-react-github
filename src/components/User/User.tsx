import './User.css';

import React, { useEffect, useState } from 'react';

import { API } from '../../lib/API';
import { User as UserType } from '../../types';

export interface UserProps {
  userName: string;
}

export const User: React.FC<UserProps> = ({
  userName
}) => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    API.getUser(userName).then(setUser);
  }, [userName]);

  if (!user) return <span>Loading...</span>;

  return <div>
    <img src={user.avatarUrl} className="profile" />
    <h2>{user.name}</h2>
  </div>;
}


