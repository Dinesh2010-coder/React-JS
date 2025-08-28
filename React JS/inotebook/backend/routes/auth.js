const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_secret = 'Harryisagoodb$oy';
const fetchUser = require('../middleware/fetchUser');



// ROUTE 1:  Create a user using POST "api/auth". Doesn't require authentication.
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters long').isLength({ min: 5 }),
], async (req, res) => {
  // handling the errors
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  // Check whether the user exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "A user with same email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_secret);

    // res.json(user);
    success = true;
    res.json({ success, authToken });

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Some error occurred")
  }

  // .then(user => res.json(user)).catch(err => {console.log(err) 
  //   res.json({error: 'Pls enter a unique value', message: err.message})});
})




// ROUTE 2: Authenticating a user using POST "api/auth/login". 
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  // handling the errors
  const errors = validationResult(req);
  let success = false;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success=false;
      return res.status(400).json({ success, error: "Either email or password is incorrect." });
    }
    
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success=false;
      return res.status(400).json({ success, error: "Either email or password is incorrect." });
    }
    
    const data = {
      user: {
        id: user.id
      }
    }
    
    const authToken = jwt.sign(data, JWT_secret);
    success=true;
    res.json({ success, authToken });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }

})


// ROUTE 3: Get logged in user details using POST "api/auth/getuser".
router.post('/getuser', fetchUser, async(req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }
})
module.exports = router;