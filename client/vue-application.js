const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Propos = window.httpVueLoader('./components/Propos.vue')
const Connexion = window.httpVueLoader('./components/Connexion.vue')
const Deconnexion = window.httpVueLoader('./components/Deconnexion.vue')
const Patient = window.httpVueLoader('./components/Patient.vue')
const Medecin = window.httpVueLoader('./components/Medecin.vue')
const Hopitale = window.httpVueLoader('./components/Hopitale.vue')

const routes = [
  { path: '/', component: Accueil },
  { path: '/propos', component: Propos },
  { path: '/connexion', component: Connexion },
  { path: '/deconnexion', component: Deconnexion },
  { path: '/patient', component: Patient },
  { path: '/medecin', component: Medecin },
  { path: '/hopitale', component: Hopitale }
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
      profession: null
    },
    medecin: null,
    patient: null,
    recherches: []
  },
  async mounted () {

    const res = await axios.get('/api/me')
    this.user = res.data.user
    this.medecin = res.data.medecin
    this.patient = res.data.patient

  },
  methods: {
    async register (user) {
      try {
        var route = 'nom=' + user.nom + '&prenom=' + user.prenom + '&email=' + user.email + '&password=' + user.password + '&telephone=' + user.telephone
        route += '&dateNaissance=' + user.dateNaissance + '&age=' + user.age + '&taille=' + user.taille + '&poids=' + user.poids + '&sexe=' + user.sexe
        route += '&profession=' + user.profession
        await axios.post('/api/register/',route)
        router.push('/connexion')
      } catch (e) {
        asAlertMsg({
          type: "warning",
          title: "Attention",
          message: "Vous vous êtes déjà enregistré"
        })
      }
    },
    async login (user) {
      await axios.post('/api/login/','email=' + user.email + '&password=' + user.password)

      const res = await axios.get('/api/me')
      this.user = res.data.user
      this.medecin = res.data.medecin
      this.patient = res.data.patient

      if (this.medecin) {
        router.push('/')
      } else {
        router.push('/patient')
      }

    },
    async logout () {
      const res = await axios.post('/api/logout/')
      this.user = res.data.user
      this.medecin = res.data.medecin
      this.patient = res.data.patient
      this.patientRecherche = []
      router.push('/connexion')
    },
    async chercherPatient (patient) {
      const res = await axios.post('/api/recherche/', 'nom=' + patient.nom + '&prenom=' + patient.prenom)
      this.recherches.push(res.data)
    },
    async updateProfile (newUser) {
      var route = 'nom=' + user.nom + '&prenom=' + user.prenom + '&email=' + user.email + '&password=' + user.password + '&telephone=' + user.telephone
      route += '&dateNaissance=' + user.dateNaissance + '&age=' + user.age + '&taille=' + user.taille + '&poids=' + user.poids + '&sexe=' + user.sexe
      route += '&profession=' + user.profession
      await axios.put('/api/user/', route)
      const res = await axios.get('/api/me')
      this.user = res.data.user
    }
  }
})
