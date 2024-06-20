const express = require("express");
const User = require("../db/userModel");
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.patch('/edit', (req, res)=>{
    
})