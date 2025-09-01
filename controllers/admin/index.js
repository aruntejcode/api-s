import express from "express";
const router = express.Router();



router.post("/adduser",(req,res)=>{
    res.send("userdata")
})

router.put("/update",(req,res)=>{
    res.send("update your profile")
})

router.delete("/delete",(req,res)=>{
    res.send("user deleted")
});


export default router

