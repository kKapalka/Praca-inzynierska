'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
  title: {type: String},
  url: {type: String},
  content: {type: String},
}, {
  collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('post', postSchema);

async function query() {
  const result = await PostModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function get(id) {
  const result = await PostModel.findOne({_id: id});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function createNewOrUpdate(data) {
  return await Promise.resolve().then(() => {
    if (!data.id) {
      return new PostModel(data).save().then(result => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return PostModel.findOneAndUpdate({_id: data.id}, data);
    }
  }).catch(error => {
    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      console.log(error);
    }
    throw error;
  });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,

  model: PostModel
};
