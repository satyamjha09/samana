const userModel = require('../../models/userModels');

async function updatedUser(req, res) {
    
  try {

    const sessionUser = req.userId
    const { userId, email, name, role } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        error: true,
        success: false,
      });
    }

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    }

    const user = await userModel.findById(sessionUser)

    console.log("user.role" , user.role)

    const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    res.json({
      data: updatedUser,
      message: "User updated successfully",
      success: true,
      error: false,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message || "An error occurred",
      error: true,
      success: false,
    });
  }
}

module.exports = updatedUser;
