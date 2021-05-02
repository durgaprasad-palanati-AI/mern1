// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to',
    });
});// Import contact controller
var contactController = require('./2subjectcontroller');
// Contact routes
router.route('/subjects').get(contactController.index)
router.route('/subjectnew/:name&&:id').put(contactController.new);
                //or
//router.route('/subjectnew').put(contactController.new);

router.route('/subjectsfind/:name').get(contactController.view)
router.route('/subjectsupdate/:name&&:id').post(contactController.update)

router.route('/subjectdelete/:name').delete(contactController.delete);
// Export API routes
module.exports = router;