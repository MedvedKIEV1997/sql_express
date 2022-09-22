const {
    getAllCustomersModel,
    getCustomerByIdModel
} = require('../models/customers.model');

const getAllCustomers = async (req, res) => {
    return res.status(200).json(await getAllCustomersModel());
};
const getCustomerById = async (req, res) => {
    const id = req.params['id'];
    return res.status(200).json(await getCustomerByIdModel(id));
};

module.exports = { getAllCustomers, getCustomerById };
