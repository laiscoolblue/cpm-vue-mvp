/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import config from './config';

const { barts } = config;

export const checkBartsApi = () => new Promise((resolve, reject) => {
  reject();
  // axios.get(`${barts}/campaigns`).then(
  //   (response) => {
  //     resolve(response);
  //   },
  //   (err) => {
  //     reject(err);
  //   },
  // );
});
