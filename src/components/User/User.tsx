import React, { useEffect, useState } from 'react';

import { API } from '../../lib/API';
import { User as UserType } from '../../types';

export interface UserProps {
  userName: string;
}

export const User: React.FC<UserProps> = ({
  userName
}) => {
  const [user, setUser] = useState<UserType>()

  useEffect(() => {
    API.getUser(userName).then(u => {
      console.log(u);

      setUser(u)
    });
  }, [userName]);

  if (!user) return null;

  return <div>
    <img src={user.avatarUrl} alt=""/>
    <h2>{user.name}</h2>
  </div>
}


