const ServiceProvider = require("../models/serviceProvidersModel");
const factory = require("./handlerFactory");

exports.getServiceProvider = factory.getOne(ServiceProvider);
exports.getAllServiceProviders = factory.getAll(ServiceProvider);
