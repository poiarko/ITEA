var quotes = [{
        quote: 'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.',
        img: 'https://img3.goodfon.ru/wallpaper/nbig/e/42/nebo-les-doroga-derevya-shosse.jpg'
    },
    {
        quote: 'Adventure is worthwhile.',
        img: 'https://img3.goodfon.ru/original/1366x768/e/42/nebo-les-doroga-derevya-shosse.jpg'
    },
    {
        quote: 'Traveling – it leaves you speechless, then turns you into a storyteller.',
        img: 'https://miro.medium.com/max/2660/1*_6EdJgpcWyeWne36eFH7eA@2x.jpeg'
    },
    {
        quote: 'We travel, some of us forever, to seek other places, other lives, other souls.',
        img: 'https://thewholeworldornothing.com/wp-content/uploads/2017/02/Best-Travel-Games-For-Adults-Banner.jpg'
    },
    {
        quote: 'A journey is best measured in friends, rather than miles.',
        img: 'https://www.nationalgeographic.com/content/dam/travel/2017-digital/sustainable-travel/sustainable-train-travel.ngsversion.1499974383625.adapt.1900.1.jpg'
    },
    {
        quote: 'The gladdest moment in human life, me thinks, is a departure into unknown lands.',
        img: 'https://larissatravel.ee/wp-content/uploads/2016/05/travel_bg.jpg'
    },
    {
        quote: 'No place is ever as bad as they tell you it’s going to be.',
        img: 'https://s26561.pcdn.co/wp-content/uploads/2017/02/How-to-Plan-a-Trip-Travel-Planning-Tips-1200x800.jpg'
    },
    {
        quote: 'I am not the same, having seen the moon shine on the other side of the world.',
        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/09/11/istock-954997846.jpg'
    },
    {
        quote: 'Travel makes one modest. You see what a tiny place you occupy in the world.',
        img: 'https://si.wsj.net/public/resources/images/B3-AI611_MIDSEA_GR_20180508171100.jpg'
    },
    {
        quote: 'We travel not to escape life, but for life not to escape us.',
        img: 'https://www.telegraph.co.uk/content/dam/Travel/2017/December/mil%20cover-xlarge.jpg'
    },
    {
        quote: 'The man who goes alone can start today; but he who travels with another must wait till that other is ready.',
        img: 'https://www.traveldailymedia.com/assets/2019/06/travel.jpg'
    },
    {
        quote: 'To awaken alone in a strange town is one of the pleasantest sensations in the world.',
        img: 'https://s19623.pcdn.co/wp-content/uploads/2013/11/plane-window.jpg'
    },
    {
        quote: 'The life you have led doesn’t need to be the only life you have.',
        img: 'https://itc.gov.my/wp-content/uploads/2019/03/Meaning-of-travelling.jpg'
    },
    {
        quote: 'Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all of one’s lifetime.',
        img: 'https://independenttravelcats.com/wp-content/uploads/2018/03/Destinations.jpg'

    },
    {
        quote: 'Man cannot discover new oceans unless he has the courage to lose sight of the shore.',
        img: 'https://image.cnbcfm.com/api/v1/image/105948985-1559679785609gettyimages-179443699.jpeg?v=1559680449'
    },
    {
        quote: 'The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are.',
        img: 'https://static-news.moneycontrol.com/static-mcnews/2018/12/Travel-3.jpg'
    },
    {
        quote: 'The world is a book, and those who do not travel read only one page.',
        img: 'https://www.traveldailymedia.com/assets/2019/07/us-travel.jpg'
    },
    {
        quote: 'Travel and change of place impart new vigor to the mind.',
        img: 'https://larissatravel.ee/wp-content/uploads/2016/05/travel_bg.jpg'
    },
    {
        quote: 'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.',
        img: 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/09/03/2a259f30-c89b-11e9-b4e3-f796e392de6b_image_hires_113650.jpg?itok=thln8ajP&v=1567481824'
    },
    {
        quote: 'Once a year, go someplace you’ve never been before.',
        img: 'https://static.onecms.io/wp-content/uploads/sites/38/2015/05/12232633/potowizard.jpg'
    },
    {
        quote: 'Travel is the only thing you buy that makes you richer.',
        img: 'https://cdn2.wanderlust.co.uk/media/1031/shutterstock_320014793.jpg?anchor=center&mode=crop&width=1200&height=720&rnd=132006749560000000'
    },
    {
        quote: 'To travel is to discover that everyone is wrong about other countries.',
        img: 'https://europeansting.files.wordpress.com/2019/09/travel.jpeg'
    },
    {
        quote: 'See the world. It’s more fantastic than any dream made or paid for in factories.',
        img: 'https://intrepid-guewuklbkgvxhkhdo.stackpathdns.com/wp-content/uploads/2018/08/Egypt-Travel-Tips-The-Nile.jpg'
    },
    {
        quote: 'Traveling tends to magnify all human emotions.',
        img: 'https://www.budapest.com/w/respsliders/bpcompromo02_1_2_1_2.jpg'
    },
    {
        quote: 'You don’t have to be rich to travel well.',
        img: 'https://madtravel.org/wp-content/uploads/2019/01/mad-travel-tour-tribes-treks-rizal-header.jpg'
    },

];


var button = document.getElementById('button');
button.addEventListener('click', function() {

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    var curentQuote = randomQuote.quote;
    var src = randomQuote.img;
    document.getElementById('quoteResult').innerHTML = curentQuote;

    document.body.style.backgroundImage = 'url(' + src + ')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    // console.log(curentQuote);
    // console.log(src);

});