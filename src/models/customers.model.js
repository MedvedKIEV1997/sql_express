const db = require('../config/db');

const getAllCustomersModel = async () => {
    try {
        const [rows] = await db.execute(`SELECT * FROM customers`);
        return rows;
    } catch (error) {
        throw error;
    }
};

const getCustomerByIdModel = async (id) => {
    try {
        const [rows] = await db.execute(`SELECT * FROM customers
        WHERE customer_id=${id}`);
        return rows;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllCustomersModel, getCustomerByIdModel };
