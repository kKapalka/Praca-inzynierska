'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter'
import applicationException from "../service/applicationException";

const subscriptionSchema = new mongoose.Schema({
  accountnumber: { type: String, required: true },
  endDate: { type: Date, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
  startDate: {type: Date, required: true}
}, {
  collection: 'subscription'
});
subscriptionSchema.plugin(uniqueValidator);

const SubscriptionModel = mongoose.model('subscription', subscriptionSchema);

async function query() {
  const result = await SubscriptionModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function get(id) {
  const result = await SubscriptionModel.findOne({userId: id, endDate: {
    $gte: Date.now()
    }});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function createsubscription(data) {
  return await Promise.resolve().then(() => {
    if (!data.id) {
      var now = new Date();
      var later = new Date();
      later.setMonth(later.getMonth() + data.validityMonths);
      var newData = {
        accountnumber: data.accountnumber,
        userId: data.userId,
        startDate: now,
        endDate: later
      };
      return new SubscriptionModel(newData).save().then(result => {
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
  get: get,
  model: SubscriptionModel
}
