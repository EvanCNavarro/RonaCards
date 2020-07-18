const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username: {
                type: String,
                unique: true,
		required: true
        },
        email: {
                type: String,
                unique: true,
        	required: true
	},
        verified: {
                type: Boolean,
                default: false
        },
        password: {
		type: String,
		required: true,
		minlength: 3
	},
        card1: {
                type: Boolean,
                default: false
        },
        card2: {
                type: Boolean,
                default: false
        },
        card3: {
                type: Boolean,
                default: false
        },
        card4: {
                type: Boolean,
                default: false
        },
        card5: {
                type: Boolean,
                default: false
        },
        card6: {
                type: Boolean,
                default: false
        },
        card7: {
                type: Boolean,
                default: false
        },
        card8: {
                type: Boolean,
                default: false
        },
        card9: {
                type: Boolean,
                default: false
        },
        card10: {
                type: Boolean,
                default: false
        }
});

module.exports = User = mongoose.model("user", userSchema);
