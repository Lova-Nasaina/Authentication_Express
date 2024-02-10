const express = require('express');
const loggedIn = require('../controllers/loggedln');
const logout = require("../controllers/logout");
const routes = express.Router();

routes.get("/", loggedIn, (req, res)=>{
    if (req.user) {
        res.render("index", { status : "loggedIn", user : req.user })
    }else{
        res.render("index", { status : "no", user : "nothing" });
    }
    res.render("index");
})

routes.get("/register", (req, res)=>{
    res.sendFile("register.html", {root : "./public"});
})

routes.get("/login", (req, res)=>{
    res.sendFile("login.html", {root : "./public/"});
})


routes.get("/logout", logout);

module.exports = routes;