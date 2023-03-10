const express = require("express");
const router = express.Router();
const sql = require("../db.js");

router.post("/createdept", async function (req, res) {
  try {
    let query = "INSERT INTO dept_table VALUES ( 1, 0, 'HR')";
    let data = await sql(query);
    res.send({ data: data, status: true });
  } 
  catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
});

router.get("/getdept", async function (req, res) {
  try {
    let query = "SELECT * FROM dept_table";
    let data = await sql(query);
    res.send({ Dept_Data: data });
  } 
  catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
});

//=========================================================================================

router.post("/createemp", async function (req, res) {
  try {
    let query = "INSERT INTO emp_table VALUES ( 102, 'SoumyaDeep',  '2002-01-01' ,1)";
    let data = await sql(query);
    return res
      .status(200)
      .send({ status: true, message: `Employee added successfully`, data });

  } 
  catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
});

router.get("/getemp", async function (req, res) {
  try {
    let query = "SELECT * FROM emp_table";
    let data = await sql(query);
    res.send({ Dept_Data: data });
  } 
  catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
});



module.exports = router;
