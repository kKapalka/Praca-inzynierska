'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter'
import applicationException from "../service/applicationException";

const subscriptionSchema = new mongoose.Schema({
  accountnumber: { type: String, required: true },
  validity: { type: String, required: false }
}, {
  collection: 'subscription'
});
subscriptionSchema.plugin(uniqueValidator);

const SubscriptionModel = mongoose.model('subscription', subscriptionSchema);

async function query() {
  // console.log("asd")
  const result = await SubscriptionModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function createsubscription(data) {
  return await Promise.resolve().then(() => {
    if (!data.id) {
      return new SubscriptionModel(data).save().then(result => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return SubscriptionModel.findOneAndUpdate({_id: data.id}, data);
    }
  }).catch(error => {
    if ('ValidationError' === error.login) {
      error = error.errors[Object.keys(error.errors)[0]];
      console.log(error);
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

export default {
  query: query,
  createsubscription: createsubscription,

  model: SubscriptionModel
}
