const userModel = require("../../models/userModels");

async function allUsers(req, res) {
   try {
      console.log("userid all users", req.userId);

      const AllUsers = await userModel.find();

      res.json({
         message: "All User",
         data: AllUsers,
         success: true,
         error: false
      });
   } catch (err) {
      res.status(400).json({
         message: err.message || err,
         error: true,
         success: false
      });
   }
}

module.exports = allUsers;
