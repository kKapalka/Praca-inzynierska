'use strict'

import subscriptionDAO from '../DAO/subscriptionDAO'
import postDAO from "../DAO/postDAO";

function create(context) {
  async function query() {
    let result = await subscriptionDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await subscriptionDAO.get(id);
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
    get: get
  };
}

export default {
  create: create
};
