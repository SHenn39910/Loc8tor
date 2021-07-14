/*GET 'home' page*/
const homeList = (req, res) =>{
    res.render('locations-list', {
        title: 'Loc8tor - find a place to study or work with wifi',
        pageHeader: {
            title: 'Loc8tor',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a place to chill? Loctor helps you find places to work when out and about. Perhaps with coffee, cake or a pint?",
        locations: [
            {
            name: 'Queencups',
            address: '1 Main Street, Connecticut, RG6 1PS',
            rating: 5,
            facilities: ['Coffee', 'Food', 'Premium wifi'],
            distance: '100m'
        }, 
        {
            name: 'Cafe Blackrock',
            address: '38 Top Road, Connecticut RG6 1PS',
            rating: 4,
            facilities: ['Coffee', 'Hot Drinks', 'Wifi'],
            distance: '200m'

        },
        {
            name: 'Webster Arena',
            address: '331 Atlantic Street, Connecticut RG6 1PS',
            rating: 1,
            facilties: ['Food', 'Drinks', 'Wifi'],
            distance: '10m'
        }
        ]
    }
    );
};


/*GET 'location info' page */
const locationInfo = (req, res)=> {
    res.render('location-info', { 
        title: 'Queencups',
        pageHeader: {title: 'Queencups'},
        sidebar: {
            context: 'is on Loc8tor because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been you like it - or if you don\'t - please leave a review to help other people just like you'
        },
        location: {
            name: 'Queencups',
            address: '1 Main Street, Connecticut, RG6 1PS',
            rating: 5,
            facilities: ['Coffee', 'Food', 'Premium wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                days: 'Monday-Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },
            {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },{
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Barack Obama',
                rating: 5,
                timestamp: '19 July 2021',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Michelle Obama',
                rating: 4,
                timestamp: '19 July 2021',
                reviewText: 'I liked it just not as much as Barack.'
            }]

        
        }
        
})};

/*GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add Review'});
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};
