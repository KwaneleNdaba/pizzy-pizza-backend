const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        uid: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        address: { type: Array, required: false },
        phone: { type: String, required: false },
        userType: { type: String, required: true, enum: ['Admin', 'Driver', 'Vendor', 'Client'] },
        profile: {
            type: String,
            require: true,
            default: "https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/369704066_1974971836197303_4338910228846949498_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VPRBtjvmW-0AX_W5U5r&_nc_ht=scontent-jnb1-1.xx&oh=00_AfDkj3zbi0rsY3TSCUKpG1pXv61yme7jwZ4toz8bpcmSmg&oe=654E6027"
        },

    }, { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema)