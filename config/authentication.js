// Middleware limiting routes when users try to visit without logging in.
// Only allow users to the limited route when logged in.
// Shift user to the login page if they haven't logged in yet.


module.exports = (req, res, followedBy) => {
  if (req.user) {
    return followedBy();
  }
  return res.shift('/');
};
