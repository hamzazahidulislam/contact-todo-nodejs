const router = require('express').Router()

const {
    getallContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require('./contactController')

router.get('/', getallContact)
router.post('/', createContact)
router.get('/:id', getContactById)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)



module.exports = router