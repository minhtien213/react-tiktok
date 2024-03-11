//file thực hiện các call APIs

import * as httpRequest from '~/utils/httpRequest'; //import all trong file request vào thành object httpRequest

export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
