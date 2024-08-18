import { userModelNameEmailPhonePassword,userModelEmailPassword, userModeNamePassword } from "../models/user.register.models.js";
import connectDB from "../config/db.js";

const signupUsingNameEmailPhonePassword = async (req, res) => {
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModelNameEmailPhonePassword;
  const { name, email, phone, password } = req.body.data;
  try {
    const user = new User({ name, email, phone, password });
    await user.save();
    console.log("user succesfully saved")
    res.status(200).json({
      msg:"siginup successfull",
    });
    console.log("signup sucess")
  } catch (err) {
    console.error("error while signing up", err);
    res.status(500).send("error while signing up");
  }
};

const signupusingEmailPassword = async(req,res)=>{
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModelEmailPassword;
  const {email,password} = req.body.data;
  try {
    const user = new User({email,password});
    await user.save();
    console.log("user succesfully saved")
    res.status(200).json({
      msg:"siginup successfull",
    });
    console.log("sigup success using email and password");
  }catch(err) {
    console.error("error occured while siginingup using email and password",err);
    res.status(500).send("error ocurred while siginingup")
  }

};

const signupusingNamePassword = async(req,res)=>{
  const BACKEND_URL = req.body.connection_url;
  connectDB(BACKEND_URL);
  const User = userModeNamePassword;
  const {username,password} = req.body.data;
  try {
    const user = new User({username,password});
    await user.save();
    console.log("user succesfully saved")
    res.status(200).json({
      msg:"siginup successfull",
    });
    console.log("signup success using name and password");
  }catch(err) {
    console.error("error occured while siginingup using name and password",err);
    res.status(500).send("error ocurred while siginingup")
  }

};

const loginusingEmailPassword = async(req,res)=>{
  try {
    const BACKEND_URL = req.body.connection_url;
    connectDB(BACKEND_URL);
  }catch(err) {
    res.json({
      msg:"error while connecting your db,connection string invalid"
    })
  }
  const {email,password} = req.body.data;
  try {
    const response = await userModelNameEmailPhonePassword.findOne({email:email,password:password})
    if(response) {
    res.status(200).json({
      msg:"siginin successfull",
    });
    console.log("signin success using Email and password");
    }
    else {
      res.status(403).json({
        msg:"User Not Found"
      })
    }
  }catch(err) {
    console.error("error occured while siginingin using email and password",err);
    res.status(500).send("error ocurred while siginingin due to network crisis")
  }

}

const loginusingNamePassword = async(req,res)=>{
  try {
    const BACKEND_URL = req.body.connection_url;
    connectDB(BACKEND_URL);
  }catch(err) {
    res.json({
      msg:"error while connecting your db,connection string invalid"
    })
  }
  const {name,password} = req.body.data;
  try {
    const response = await userModelNameEmailPhonePassword.findOne({name:name,password:password})
    if(response) {
    res.status(200).json({
      msg:"siginin successfull",
    });
    console.log("signin success using Name and password");
    }
    else {
      res.status(403).json({
        msg:"User Not Found"
      })
    }
  }catch(err) {
    console.error("error occured while siginingin using name and password",err);
    res.status(500).send("error ocurred while siginingin due to network crisis")
  }

}
export { signupUsingNameEmailPhonePassword,signupusingEmailPassword,signupusingNamePassword,loginusingEmailPassword,loginusingNamePassword};
