/*GET 'home' page*/
const homeList = (req, res) =>{
    res.render('locations-list', {
        title: 'Loc8tor - find a place to study or work with wifi',
        pageHeader: {
            title: 'Loc8tor',
            strapline: 'Find places to work with wifi near you!'
        }});
};


/*GET 'location info' page */
const locationInfo = (req, res)=> {
    res.render('location-info', { title: 'Location Info'});
};

/*GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add Review'});
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};
