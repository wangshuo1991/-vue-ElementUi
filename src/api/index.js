const express = require('express');

const router = express.Router();

let data = require('../../dataJson.json');
let userlist = data.tableData;



router.get('/user', function (req, res) {
	res.json({
        code: 0,
        data: userlist
    });
});

module.exports = router;
