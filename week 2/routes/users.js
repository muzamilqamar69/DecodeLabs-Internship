const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { userValidationRules, idParamValidationRules, validateRequest } = require('../middleware/validation');

router.get('/', userController.getAllUsers);
router.get('/:id', idParamValidationRules, validateRequest, userController.getUserById);
router.post('/', userValidationRules, validateRequest, userController.createUser);
router.put('/:id', idParamValidationRules.concat(userValidationRules), validateRequest, userController.updateUser);
router.delete('/:id', idParamValidationRules, validateRequest, userController.deleteUser);

module.exports = router;
