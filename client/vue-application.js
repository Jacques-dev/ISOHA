
const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Analyse = window.httpVueLoader('./components/Analyse.vue')
const Propos = window.httpVueLoader('./components/Propos.vue')
const Connexion = window.httpVueLoader('./components/Connexion.vue')
const Deconnexion = window.httpVueLoader('./components/Deconnexion.vue')
const Patient = window.httpVueLoader('./components/Patient.vue')
const Medecin = window.httpVueLoader('./components/Medecin.vue')
const ManagementPatient = window.httpVueLoader('./components/ManagementPatient.vue')

const routes = [
  { path: '/', component: Accueil },
  { path: '/analyse', component: Analyse },
  { path: '/propos', component: Propos },
  { path: '/connexion', component: Connexion },
  { path: '/deconnexion', component: Deconnexion },
  { path: '/patient', component: Patient },
  { path: '/medecin', component: Medecin },
  { path: '/managementpatient', component: ManagementPatient }
]


const router = new VueRouter({
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    user: {
      nom: null,
      prenom: null,
      email: null,
      telephone: null,
      dateNaissance: null,
      age: null,
      taille: null,
      poids: null,
      sexe: null,
      profession: null,
      radio: null
    },
    medecin: null,
    patient: null,
    recherches: [],
    radio: null,
    result: {
      color: null,
      text: null
    }
  },
  async mounted () {

    const res = await axios.get('/api/me')
    this.user = res.data.user
    this.medecin = res.data.medecin
    this.patient = res.data.patient
    this.radio = res.data.radio

  },
  methods: {
    async register (user) {
      try {
        var route = 'nom=' + user.nom + '&prenom=' + user.prenom + '&email=' + user.email + '&password=' + user.password + '&telephone=' + user.telephone
        route += '&dateNaissance=' + user.dateNaissance + '&age=' + user.age + '&taille=' + user.taille + '&poids=' + user.poids + '&sexe=' + user.sexe
        route += '&profession=' + user.profession
        await axios.post('/api/register/',route)
        if (user.email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        } else {
          router.push('/connexion')
        }
      } catch (e) {
        asAlertMsg({
          type: "warning",
          title: "Attention",
          message: "Vous vous êtes déjà enregistré",
          timer: 2000,
        })
      }
    },
    async login (user) {
      await axios.post('/api/login/','email=' + user.email + '&password=' + user.password)

      const res = await axios.get('/api/me')
      this.user = res.data.user
      this.medecin = res.data.medecin
      this.patient = res.data.patient
      this.radio = res.data.radio

      router.push('/')

    },
    async logout () {
      const res = await axios.post('/api/logout/')
      this.user = res.data.user
      this.medecin = res.data.medecin
      this.patient = res.data.patient
      this.radio = res.data.radio
      this.patientRecherche = []
      router.push('/connexion')
    },
    async chercherPatient (patient) {
      const res = await axios.post('/api/recherche/', 'nom=' + patient.nom + '&prenom=' + patient.prenom)
      this.recherches.push(res.data)
    },
    async updateProfile (user) {
      try {
        var route = 'nom=' + user.nom + '&prenom=' + user.prenom + '&email=' + user.email + '&password=' + user.password + '&telephone=' + user.telephone
        route += '&dateNaissance=' + user.dateNaissance + '&age=' + user.age + '&taille=' + user.taille + '&poids=' + user.poids + '&sexe=' + user.sexe
        route += '&profession=' + user.profession
        await axios.put('/api/user/', route)
        const res = await axios.get('/api/me')
        this.user = res.data.user
      } catch (e) {
        asAlertMsg({
          type: "warning",
          title: "Attention",
          message: "Email ou date de naissance incorrect",
          timer: 2000,
        })
      }
    }
  }
})

// -----------------------------------------------------------------------------

function animationChargement() {
  document.getElementById('animation1').style.animation = 'none';
  document.getElementById('animation2').style.animation = 'none';
  document.getElementById('animation3').style.animation = 'none';
  document.getElementById('animation4').style.animation = 'none';
  document.getElementById('animation5').style.animation = 'none';
  document.getElementById('animation6').style.animation = 'none';
}

function analyse() {
  app.result.color = "white"
  app.result.text = ""
  document.getElementById('analyse-content').setAttribute("style", "display:block");
  document.getElementById('analyse-en-cours').setAttribute("style", "display:block");
  resulat();
}

function resulat() {
  setTimeout(function() {
    document.getElementById('analyse-en-cours').setAttribute("style", "display:none");
    document.getElementById('analyse-animation').setAttribute("style", "display:none");
    document.getElementById('analyse-resulat').setAttribute("style", "display:block; margin-top: 25px");

    const r = Math.floor(Math.random()*(1-0+1)+0)//(max-min+1)+min
    if (r) {
      app.result.color = "#1abc69"
      app.result.text = "Aucune lésion du tissu nerveux détecté"
    } else {
      app.result.color = "#bc1a1a"
      app.result.text = "Des lésions du tissu nerveux ont été détectées"
    }

  }, 2000);
  document.getElementById('analyse-resulat').setAttribute("style", "display:none");
  document.getElementById('analyse-animation').setAttribute("style", "display:block");
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 4;
var navbarHeight = $('footer').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 10);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
      return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('footer').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('footer').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#bande-accueil').addClass('affix');
    document.getElementById('bande-accueil').setAttribute("style", "visibility: visible");
  } else {
    document.getElementById('bande-accueil').setAttribute("style", "visibility: hidden");
    $('#bande-accueil').removeClass('affix');
  }
});
