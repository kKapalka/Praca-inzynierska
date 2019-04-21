'use strict'
import business from '../business/business.container'
import applicationException from "../service/applicationException";

const subscriptionEndpoint = (router) => {
  router.get('/api/subscriptions', async (request, response, next) => {
    try {
      let result = await business(request).getSubscriptionManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/api/subscriptions/:id', async (request, response, next) => {
    try {
      let result = await business(request).getSubscriptionManager().get(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/api/subscription', async (request, response, next) => {
    try {
      let result = await business(request).getSubscriptionManager().createsubscription(request.body);
      response.status(200).send(result);
    } catch (error) {
    applicationException.errorHandler(error, response);
    }
  });
};

export default subscriptionEndpoint;
