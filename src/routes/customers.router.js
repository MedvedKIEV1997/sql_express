const express = require('express');
const { getAllCustomers, getCustomerById } = require('./customers.controller');

const customersRouter = express.Router();

customersRouter.get('/', getAllCustomers);
customersRouter.get('/:id', getCustomerById);

module.exports = customersRouter;
