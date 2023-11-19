const { Router } = require('express');

const router = Router();

const { 
    followUser,
    unfollowUser,
    selectFollowContact,
    selectAllFollows
} = require('../controllers/followController')

router.post('/createFollow', followUser);
router.post('/unfollow', unfollowUser)
router.post('/informations/contact', selectFollowContact)
router.get('/all', selectAllFollows)


module.exports = router;
