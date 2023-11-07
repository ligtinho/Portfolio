  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area'); 
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'home-menu') {
      scrollTo = aboutSection;
    }else if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    }
     else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = bannerSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } 

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

