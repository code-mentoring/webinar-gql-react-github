import axios from 'axios';
import { DocumentNode } from 'graphql';
import { loader } from 'graphql.macro';
import { print } from 'graphql/language/printer';

import { TOKEN } from '../token';
import { User } from '../types';

const userQuery = loader('../queries/user.gql');

type WithData<T> = {
  data: { data: T }
}

export abstract class API {
  private static url = 'https://api.github.com/graphql';

  static async getUser(userName: string) {
    const res = await this._send<{user: User}>(userQuery, { userName });
    return res.data.data.user;
  }

  private static _send<ReturnType>(query: DocumentNode, variables: object = {}) {
    return axios.post<any, WithData<ReturnType>>(this.url, {
      query: print(query), // print() returns the DocumentNode back to a string
      variables
    }, {
      headers: {
        "Authorization": `bearer ${TOKEN}`
      }
    });
  }
}
