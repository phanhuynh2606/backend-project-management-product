const systemConfig = require("../../config/system");

const dashboardRouters = require("./dashboard.route");
const productRouters = require("./product.route");
const productCategory = require("./products-category.route");
const roleRouters = require("./role.router");
const accountRouters = require("./accounts.route");
const authRouters= require("../../routes/admin/auth.route");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRouters);

  app.use(PATH_ADMIN + "/products", productRouters);

  app.use(PATH_ADMIN + "/products-category", productCategory);

  app.use(PATH_ADMIN + "/roles", roleRouters);
  
  app.use(PATH_ADMIN + "/accounts", accountRouters);

  app.use(PATH_ADMIN + "/auth", authRouters);

};
