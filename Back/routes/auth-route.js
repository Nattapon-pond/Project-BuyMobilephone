const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')



// สร้างเส้นทางสำหรับลงทะเบียนผู้ใช้ใหม่

router.post('/register', authController.register)

// สร้างเส้นทางสำหรับเข้าสู่ระบบ
router.post('/login', authController.login)

// สร้างเส้นทางสำหรับเรียกข้อมูลของผู้ใช้ปัจจุบัน

router.get('/me', authenticate, authController.getme) 

// สร้างเส้นทางสำหรับเข้าสู่ระบบในฐานะผู้ดูแลระบบ
router.post('/admin/login', authController.adminLogin); // Use router.post() and specify the route and controller function


module.exports = router