'use strict'
import postEndpoint from './post.endpoint'
import subscriptionEndpoint from './subscription.endpoint'
import userEndpoint from "./user.endpoint";
const routes = (router, config) => {
  postEndpoint(router);
  subscriptionEndpoint(router);
  userEndpoint(router);
};
export default routes;
