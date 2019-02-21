var app = new Framework7({
    root: "#app", //this is the app element

    toolbar: {
        hideOnPageScroll: true,
    },
    view: {
        animate: false,
    },

    routes: [
        {
            path: '/',
            id: 'tab-1',
            url: './index.html'
        },
        {
            path: '/page2/',
            id: 'tab-2',
            url: 'pages/page2.html'
        },
        {
            path: '/page3/',
            url: 'pages/page3.html'
        }

    ]
})

var mainView = app.views.create('.view-main');