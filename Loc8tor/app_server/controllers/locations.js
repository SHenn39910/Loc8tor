/*GET 'home' page*/
const homeList = (req, res) =>{
    res.render('locations-list', {
        title: 'Loc8tor - find a place to study or work with wifi',
        pageHeader: {
            title: 'Loc8tor',
            strapline: 'Find places to work with wifi near you!'
        },
        locations: [{
            name: 'Queencups',
            address: '1 Main Street, Connecticut, RG6 1PS',
            rating: 5,
            facilities: ['Coffee', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Blackrock',
            address: '38 Top Road, Connecticut RG6 1PS',
            rating: 4,
            facilities: ['Coffee', 'Hot Drinks', 'Wifi'],
            distance: '200m'

        },{
            name: 'Webster Arena',
            address: '331 Atlantic Street, Connecticut RG6 1PS',
            rating: 1,
            facilties: ['Food', 'Drinks', 'Wifi'],
            distance: '10m'
        }
        ]});
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
