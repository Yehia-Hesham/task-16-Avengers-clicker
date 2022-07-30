var data = {
    current_selected: null,
    admin_view: false,
    avengers: [{
            clicks: 0,
            name: 'Capitan America',
            image_link: 'https://www.tomshw.it/images/images/2021/04/capitan-america-156007.jpg',
            icon_link: 'https://i.pinimg.com/736x/7b/4d/f3/7b4df32152d02aeaea70b1d83773bf0e.jpg'
        },
        {
            clicks: 0,
            name: 'The Hulk',
            image_link: 'https://free4kwallpapers.com/uploads/originals/2015/11/24/hulk-in-the-avengers-wallpaper.jpg',
            icon_link: 'https://i.pinimg.com/736x/c5/58/c9/c558c94ff7cb1178883cdd6c7f57676e.jpg'
        },
        {
            clicks: 0,
            name: 'Luke Cage',
            image_link: 'https://rare-gallery.com/thumbnail/45688-Mike-ColterLuke-Cage-HD-Wallpaper.jpg',
            icon_link: 'https://64.media.tumblr.com/de8a2d1c75485e1fdb982a253a55554f/6cbc3ab4108c20ad-03/s500x750/6433ed9b6e9340d7464c420a3bdf78cbe1f2fca5.pnj'
        },
        {
            clicks: 0,
            name: 'Ant Man',
            image_link: 'https://www.wallpaperup.com/uploads/wallpapers/2015/06/19/728369/196598529fbd1aa5cb8415d48b460c7d-1000.jpg',
            icon_link: 'https://i.pinimg.com/originals/80/16/18/80161881e6ea94f00869383bca22e617.jpg'
        },
        {
            clicks: 0,
            name: 'Vision',
            image_link: 'https://cdn.wallpapersafari.com/90/75/EgOBe6.jpg',
            icon_link: 'https://i.pinimg.com/736x/0c/a2/cf/0ca2cfc4cfa4abca81cabd20509aeb18.jpg'
        },
        {
            clicks: 0,
            name: 'Iron Man',
            image_link: 'https://images.alphacoders.com/824/82401.jpg',
            icon_link: 'https://i.pinimg.com/originals/2a/84/38/2a84381cd5633175f5ddde516d60abb2.jpg'
        },
        {
            clicks: 0,
            name: 'Doctor Strange',
            image_link: 'https://allears.net/wp-content/uploads/2021/02/The-Avengers-Dr.-Strange.jpg',
            icon_link: 'https://64.media.tumblr.com/85aab5893143aefc37ad6563170f7822/883324019ad3ba50-17/s500x750/48f311d643496ddb557252560cd94da4a2629e93.png'
        }
        
    ]
};

var avg_view = {
    init: function () {
        this.display_img = document.getElementById("display_img");
        this.display_name = document.getElementById("display_name");
        this.display_count = document.getElementById("display_count");

        this.display_img.addEventListener('click', function () {
            controller.incrementCounter();
        });
        this.render();
    },

    render: function () {
        var current = controller.getCurrent();
        this.display_count.textContent = "Clicks: " + current.clicks;
        this.display_name.textContent = current.name;
        this.display_img.src = current.image_link;
    }
}

var selection = {
    init: function () {
        this.avg_list = document.getElementById("avg_list");
        this.render();
    },
    render: function () {
        var avgers = controller.get_avgs();

        this.avg_list.innerHTML = '';

        var i, avg, avgElement;
        for (i = 0; i < avgers.length; i++) {
            avg = avgers[i];
            avgElement = document.createElement('li');
            avgElement.innerHTML = "<img class = 'icon' src = " + avg.icon_link + " alt = 'icon'>"
            // avgElement.textContent = avg.name;  
            
            avgElement.addEventListener("click", (function (avgCopy) {
                return function () {
                    controller.setCurrentAvg(avgCopy);
                    avg_view.render();
                    controller.incrementCounter();
                };
            })(avg));

            this.avg_list.appendChild(avgElement);
        }
    }
}

var controller = {
    init: function () {
        data.current_selected = data.avengers[0];

        selection.init();
        avg_view.init();

    },
    getCurrent: function() {
        return data.current_selected;
    },
    get_avgs: function () {
        return data.avengers;
    },
    setCurrentAvg: function(avenger) {
        data.current_selected = avenger;
    },
    incrementCounter: function() {
        data.current_selected.clicks++;
        avg_view.render();
    }
}


controller.init();