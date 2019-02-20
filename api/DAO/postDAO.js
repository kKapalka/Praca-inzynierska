'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter'
import applicationException from "../service/applicationException";

const postSchema = new mongoose.Schema({
  title: {type: String},
    imageurl: {type: String},
    videourl: {type: String},
    content: {type: String},
    director: {type: String},
    genre: {type: String},
    duration: {type: String},
  }, {
    collection: 'film'
  });
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('film', postSchema);

async function query() {
  // console.log("asd")
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
  get: get,
  createNewOrUpdate: createNewOrUpdate,

  model: PostModel
}
