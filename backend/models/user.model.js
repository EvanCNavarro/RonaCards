module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        username: {
                type: String,
                unique: true
        },
        email: {
                type: String,
                unique: true
        },
        verified: {
                type: Boolean,
                default: false
        },
        password: String,
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
      },
      { timestamps: true }
    )
  );
  return User;
};
