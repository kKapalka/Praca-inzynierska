'use strict';

import postManager from './post.manager';
import userManager from './user.manager';
<<<<<<< HEAD
import subscriptionManager from './subscription.manager';
=======

>>>>>>> b1ad12f78ab5720334cfabd095ac153c6e1cf49d

function getContext(request) {
  return { user: request && request.user };
}

function getter(manager, request) {
  return function () {
    return manager.create(getContext(request), this);
  };
}

const createBusinessContainer = (request, config) => {

  return {
    getPostManager: getter(postManager, request),
<<<<<<< HEAD
    getUserManager: getter(userManager),
    getSubscriptionManager: getter(subscriptionManager)
=======
    getUserManager: getter(userManager)
>>>>>>> b1ad12f78ab5720334cfabd095ac153c6e1cf49d
  };
};

export default createBusinessContainer;
