/*GET 'home' page*/
const homeList = (req, res) =>{
    res.render('locations-list', {title: 'Home'});
};


/*GET 'location info' page */
const locationInfo = (req, res)=> {
    res.render('location-info', { title: 'Location Info'});
};

/*GET 'Add review' page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add Review'});
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};
