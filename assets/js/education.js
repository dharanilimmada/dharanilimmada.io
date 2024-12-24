AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Linked In Learning",
    cardImage: "assets/images/education-page/linkedin_prog_fonda.jpg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  
  
  
  {
    title: "Advanced Python-Edyst",
    cardImage: "assets/images/education-page/edyst.completion.certificate.jpeg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Introduction to Data science- CISCO",
    cardImage: "assets/images/education-page/dsintrocisco.jpg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Introduction to AI - Infosys",
    cardImage: "assets/images/education-page/infoai.jpg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Machine Learning Foundation - AWS Educate",
    cardImage: "assets/images/education-page/AWSML.png",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Computer Vision 101 - Infosys",
    cardImage: "assets/images/education-page/cv101.jpg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Introduction to Deep Learning",
    cardImage: "assets/images/education-page/deeplearnintro.jpg",
    moocLink:"https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Developing a static Web Page - VI foundation",
    cardImage: "assets/images/education-page/devstaticwebpage.jpg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "FMMML- IIIT HYDERABAD",
    cardImage: "assets/images/education-page/fmmlcertficate.jpg",
    moocLink:"https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "NLP - INFOSYS",
    cardImage: "assets/images/education-page/nlpinfo.jpg",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Python for Software Engineering - Chegg",
    cardImage: "assets/images/education-page/cheggpyse.png",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "Introduction to AI Fundamentals - IBM SkillsBuild",
    cardImage: "assets/images/education-page/foundamentalsai.png",
    moocLink:"https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "AWS solution Architecture - Forage",
    cardImage: "assets/images/education-page/forageaws.jpg",
    moocLink:"https://www.linkedin.com/in/yennimanikanta/",
  },
  { 
    title: "AGILE Methodology - Forage",
    cardImage: "assets/images/education-page/cognigent.jpg",
    moocLink:"https://www.linkedin.com/in/yennimanikanta/",
  },
  {
  title: "CYBER SECURITY ESSENTIALS - CISCO",
  cardImage: "assets/images/education-page/cyber.jpg",
  moocLink: "https://www.linkedin.com/in/yennimanikanta/",
  },
  {
    title: "CYBER SECURITY ESSENTIALS - CISCO",
    cardImage: "assets/images/education-page/introds.png",
    moocLink: "https://www.linkedin.com/in/yennimanikanta/",
    },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
