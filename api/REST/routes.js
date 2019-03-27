'use strict'
import postEndpoint from './post.endpoint'
<<<<<<< HEAD
import subscriptionEndpoint from './subscription.endpoint'
import userEndpoint from "./user.endpoint";
const routes = (router, config) => {
  postEndpoint(router);
  subscriptionEndpoint(router);
=======
import userEndpoint from "./user.endpoint";
const routes = (router, config) => {
  postEndpoint(router);
>>>>>>> b1ad12f78ab5720334cfabd095ac153c6e1cf49d
  userEndpoint(router);
};
export default routes;
