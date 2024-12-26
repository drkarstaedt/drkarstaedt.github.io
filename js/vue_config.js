var isCurrent = function(string) {
    var current = window.location.href.split("/");
    if(!string) {
        return current[current.length-1].indexOf(".html") === -1 || current[current.length-1].split(".")[0] === "index";
    }
    return current[current.length-1].split(".")[0] === string;
};

new Vue({
    el: '#app',
    data: {
        navigation: '<div class="top-bar light"><div class="container"> <ul class="pull-left"> ' +
        '<li><a href="index.html">Welcome to South Florida Vitality MD!</a></li></ul>' +
        '<ul class="social_icons">' +
        '<li class="facebook"><a href="https://www.facebook.com/mdvitality"><i class="fa fa-facebook"></i> </a></li> ' +
        '<li class="twitter"><a href="https://twitter.com/mdvitality"><i class="fa fa-twitter"></i> </a></li></ul> </div></div> ' +
        '<header> <div class="container">' +
        '<div class="logo"><a href="index.html">' +
        '<img src="images/logo.png" alt="South Florida Vitality MD"> ' +
        '</a></div><nav>' +
        '<ul id="ownmenu" class="ownmenu">' +
        '<li' + (isCurrent() ? ' class="active"' : '') + '><a href="index.html">Home</a></li>' +
        '<!--<li' + (isCurrent('about') ? ' class="active"' : '') + '><a href="about.html">About</a></li>' +
        '<li' + (isCurrent('services') ? ' class="active"' : '') + '><a href="services.html">SERVICES </a></li>' +
        '<li' + (isCurrent('03-department') ? ' class="active"' : '') + '><a href="03-department.html">Department</a></li>' +
        '<li' + (isCurrent('05-doctors') ? ' class="active"' : '') + '><a href="05-doctors.html">Gallery </a></li>' +
        '<li' + (isCurrent('pages') ? ' class="active"' : '') + '><a href="index.html">Pages</a></li>' +
        '<li' + (isCurrent('12-contact') ? ' class="active"' : '') + '><a href="12-contact.html">Contact</a></li>-->' +
        '</ul></nav> </div> </header>',
        contactInfo: '<section class="contact-info">' +
        '<div class="container">' +
        '<ul class="row">' +
        '<li class="col-md-3"><i class="ion-ios-location-outline"></i>' +
        '<h5>Address</h5>' +
        '<p>9900 Stirling Road, Suite 222 <br/>Cooper City, FL 33024</p></li>' +
        '<li class="col-md-3"><i class="ion-iphone"></i>' +
        '<h5>Telephone</h5>' +
        '<p>+1 (954) 704-3344</p>' +
        '</li>' +
        '<li class="col-md-3"><i class="ion-printer"></i> ' +
        '<h5>Fax Machine</h5> ' +
        '<p>+1 (954) 431-3933</p> ' +
        '</li> ' +
        '<li class="col-md-3"><i class="ion-ios-email-outline"></i> ' +
        '<h5>Email</h5> ' +
        '<p><a href="mailto:theteam@mdvitality.com">theteam@mdvitality.com</a></p> ' +
        '</li></ul></div></section>',
        footer: '<footer><div class="container"> <div class="row"> ' +
        '<!--<div class="col-md-3"> <div class="latest-tweet">' +
        '<h5>Latest tweets</h5> <ul>' +
        '<li> <p><span>@medikal</span> Sweets and Bakers WordPress Theme on @EnvatoMarket by themefore' +
        '<a href="#."> http://t.co/we8Kf0</a> </p> <span class="date"> - Thursday April 9, 2015</span></li>' +
        '<li> <p><span>@medikal</span> In hendrerit in molestie consequat in' +
        '<a href="#."> http://t.co/we8Kf0</a></p> <span class="date"> - Thursday April 9, 2015</span></li>' +
        '<li> <p><span>@medikal</span> Duis autem vel eum iriure <span>@medikal</span> dolor in hendrerit in molestie consequat' +
        '<a href="#."> http://t.co/we8Kf0</a></p> <span class="date"> - Thursday April 9, 2015</span></li>' +
        '</ul> </div> </div>-->' +

        '<div class="col-md-6 col-md-offset-3"> <div class="small-info">' +
        '<img src="images/logo-white.png" class="img-responsive" alt="">' +
        '<p>The goal of <strong>South Florida Vitality MD</strong> is to make a positive contribution to the health, beauty, ' +
        'satisfaction, and well being of our patients.</p>' +
        '<ul class="social_icons">' +
        '<li class="facebook"><a href="https://www.facebook.com/mdvitality"><i class="fa fa-facebook"></i> </a></li>' +
        '<li class="twitter"><a href="https://twitter.com/mdvitality"><i class="fa fa-twitter"></i> </a></li>' +
        '</ul><!--<h5>Newsletter coming soon!</h5>-->' +
        '<!--<form> <input type="email" placeholder="Enter your email here" required>' +
        '<button type="submit"> Subscribe</button> </form>--> </div> </div>' +

        '<div class="col-md-3"><div class="links text-right"> <!--<h5>Patient Guide</h5><ul>-->' +
        '<!--<li>Coming Soon!</li>-->' +
        '<!--<li><a href="#."> Health journals</a></li>' +
        '<li><a href="#."> Insurance converage</a></li>' +
        '<li><a href="#."> Talking to your doctor</a></li>' +
        '<li><a href="#."> Medikal error</a></li>-->' +
        '<!--</ul>-->' +
        '<div class="timing"> <h5>Operating Hours</h5>' +
        '<p>Mon to Fri <span> 8:00 am to 2:00pm,<br> by appointment</span></p>' +
        '<p>Saturday <span> by appointment</span></p>' +
        '</div> </div> </div> </div> </div>' +

        '<div class="rights">' +
        '<p> Copyright &copy; 2007&ndash;' + new Date().getFullYear() +
        ' &mdash; South Florida Vitality MD &mdash; All Rights Reserved. </p> </div> </footer>'
    }
});
Vue.partial('my-partial', '<b>Hi</b>');