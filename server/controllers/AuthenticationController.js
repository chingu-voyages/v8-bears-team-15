module.exports.signIn = (req, res) => {
//  console.log("user at signin", user)
  res.json({
    user: res.req.user,
  })
}