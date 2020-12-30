const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Propos = window.httpVueLoader('./components/Propos.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Connexion = window.httpVueLoader('./components/Connexion.vue')
const Deconnexion = window.httpVueLoader('./components/Deconnexion.vue')

const routes = [
  { path: '/', component: Accueil },
  { path: '/propos', component: Propos },
  { path: '/profil', component: Profil },
  { path: '/connexion', component: Connexion },
  { path: '/deconnexion', component: Deconnexion }
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
      medecin: null,
      patient: null
    }
  },
  async mounted () {

    const res3 = await axios.get('/api/me')
    this.user.nom = res3.data.nom
    this.user.email = res3.data.email
    this.user.prenom = res3.data.prenom
    this.user.telephone = res3.data.telephone

  },
  methods: {
    async register (user) {
      try {
        await axios.post('/api/register/','nom=' + user.nom + '&email=' + user.email + '&password=' + user.password +  '&prenom=' + user.prenom + '&telephone=' + user.telephone)
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
      this.user.nom = res.data.nom
      this.user.email = res.data.email
      this.user.prenom = res.data.prenom
      this.user.telephone = res.data.telephone
      this.user.medecin = res.data.medecin
      this.user.patient = res.data.patient

      router.push('/')
    },
    async logout () {
      const res = await axios.post('/api/logout/')
      this.user.nom = res.data.nom
      this.user.email = res.data.email
      this.user.prenom = res.data.prenom
      this.user.telephone = res.data.telephone
      this.user.medecin = res.data.medecin
      this.user.patient = res.data.patient
      router.push('/')
    },
    async updateProfile (newUser) {
      await axios.put('/api/user/', 'nom=' + newUser.nom + '&prenom=' + newUser.prenom + '&email=' + newUser.email + '&telephone=' + newUser.telephone)
      const res = await axios.get('/api/me')
      this.user.nom = res.data.nom
      this.user.email = res.data.email
      this.user.prenom = res.data.prenom
      this.user.telephone = res.data.telephone
      this.user.medecin = res.data.medecin
      this.user.patient = res.data.patient
    }
  }
})
