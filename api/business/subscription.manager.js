'use strict'

import subscriptionDAO from '../DAO/subscriptionDAO'

function create(context) {
  async function query() {
    let result = await subscriptionDAO.query();
    if (result) {
      return result;
    }
  }


  async function createsubscription(data) {
    let result = await subscriptionDAO.createsubscription(data);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    createsubscription: createsubscription,
  };
}

export default {
  create: create
};
