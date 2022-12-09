const express = require('express')
const router = express.Router()
const db = require("../model/dataBase")
const Merakidata = require('../controller/control')

router.get('/', Merakidata.get_data)
router.get('/:id', Merakidata.Id_by_data)
router.delete('/delete/:id',Merakidata.delete_data)
router.put('/update/:id', Merakidata.update_data)
module.exports = router