'use strict';

import PasswordDAO from '../DAO/passwordDAO';
import TokenDAO from '../DAO/tokenDAO';
import UserDAO from '../DAO/userDAO';
import applicationException from '../service/applicationException';
import sha1 from 'sha1';

function create(context) {

  function hashString(password) {
    return sha1(password);
  }

  async function authenticate(login, password) {
    let userData;
    const user = await UserDAO.getByEmailOrLogin(login);
    if (!user) {
      throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
    }
    if (!user.active) {
      throw applicationException.new(applicationException.NOT_FOUND, 'User does not exist or is not active');
    }
    userData = await user;
    await PasswordDAO.authorize(user.id, hashString(password));
    const token = await TokenDAO.create(userData);
    return getToken(token);
  }

  function getToken(token) {
    return {token: token.value};
  }

  async function getUserByToken(receivedToken) {
    const token = await TokenDAO.get(receivedToken);
    return await UserDAO.get(token.userId);
  }

  async function createNewOrUpdate(userData) {
    const user = await UserDAO.createNewOrUpdate(userData);
    if (await userData.password) {
      return await PasswordDAO.createOrUpdate({userId: user.id, password: hashString(userData.password)});
    } else {
      return user;
    }
  }

  async function removeUserById(id) {
    return await UserDAO.removeById(id);
  }

  async function removeHashSession(userId) {
    return await TokenDAO.remove(userId);
  }

  async function getUserById(userId) {
    return await UserDAO.get(userId);
  }
  return {
    authenticate: authenticate,
    getUserById: getUserById,
    getUserByToken: getUserByToken,
    createNewOrUpdate: createNewOrUpdate,
    removeUserById: removeUserById,
    removeHashSession: removeHashSession
  };
}

export default {
  create: create
};
