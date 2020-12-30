

<template>
	<div id="propos">

    <img src="images/efrei.png" class="logo">

    <div id="first" class="parallax"></div>

    <div class="presentation">
    <div >
      <h2>Pourquoi ISOHA  ?</h2>
      <br />
      <p>
        Depuis 2006, a été mis en œuvre le DMP ( Dossier médical personnel ) <br>
        totalement dématérialisé, celui-ci permet en effet un échange rapide de l’information. <br>
        <br />
        L’objectif du projet est l’amélioration de l'environnement informatique des hôpitaux, <br>
        en utilisant l’IA afin d’analyser des données et d’effectuer des pré-diagnostics. <br>
        Ce site permet ainsi de faciliter la tâche des personnels de santé et <br>
        un retour sur les données fournies grâce à l’implémentation du machine learning. <br>
      </p>
      <br />
    </div>
    <div>
      <h2>L'equipe Analytics</h2>
      <br/>
      <p>
        Nous sommes 5 etudiants de L3 news à l'EFREI paris de la promotion 2003. <br>
        Dans le cadre d'un projet transvese nous avons fondé l'equipe Analytics. <br>
        L'equipe Analytics a pour but d'elaborer le projer ISOHA (Intelligent Software for Online Health Analytics). <br>
        <br />
      </p>
    </div>
  </div>
      <div class="wrapper">
        <ul class="team">
          <li class="team-item">
            <div class="profile">
              <img
                class="photoMembre"
                src="images/default.jpg"
              />
              <div class="profile-contents">
                <h2>Jacques Tellier <span>Maître d’oeuvre et Architect</span></h2>
                <p>
                  Responsable de la réalisation globale du projet et des suivi des objectifs
                </p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile">
              <img
              class="photoMembre"
              src="images/default.jpg"
              />
              <div class="profile-contents">
                <h2>Rémi Groise<span>Chef Designer</span></h2>
                <p>
                  Analyser le cahier des charges pour en déduire les fonctionnalités du projet
                  Identifier les différents types d’utilisateurs, rédiger les scénarios fonctionnels <br/>
                  Dessiner et proposer des maquettes IHM
                </p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile">
              <img
              class="photoMembre"
              src="images/default.jpg"
              />
              <div class="profile-contents">
                <h2>Paul Cabon<span>Responsable temps et avancés</span></h2>
                <p>
                  Mettre en place un planning afin d’organiser le <br/>
                  travail et gérer le coût en heures des étapes <br/>
                  à réaliser en respectant les délais
                </p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile">
              <img
              class="photoMembre"
              src="images/default.jpg"
              />
              <div class="profile-contents">
                <h2>Raphaël Jehl <span>Responsable Machine Learning</span></h2>
                <p>
                  Mettre en place et diriger un système type <br/> machine learning
                </p>
              </div>
            </div>
          </li>
          <li class="team-item">
            <div class="profile">
              <img
              class="photoMembre"
              src="images/default.jpg"
              />
              <div class="profile-contents">
                <h2>Glory Chicaté <span>Maître d’ouvrage</span></h2>
                <p>
                  Identifier les différents types d’utilisateurs <br/> et rédiger les scénarios fonctionnels
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="presentation">
        <h2>Ce que nous voulons apporter au DMP</h2>
        <br/>
        <p>
          Il existe déjà quelques systèmes de DMP dans le monde. <br/>
          Alors il est normal de ce demmander ce que ISHOA peut apporter: <br/> <br/>
          Le projet ISOHA a pour ambition d’ajouter du machine-Learning dans le traitement de l’information médicale. <br/>
          En effet, ISHOA utilise l’intelligence artificielle pour émettre un premier diagnostic pour la maladie <br/>
          d’Alzheimer. Ce processus est possible grâce à une IRM du cerveau du patient.
        </p>
      </div>

	</div>
</template>

<script>
	module.exports = {
		data () {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>

  .parallax {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    color: white;
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #first {
    background-image: url("../images/banner.png");
    height: 50vh;
  }

  #propos .logo {
    position: absolute;
    top: 75px;
    left: 25px;
    height: 40px;
  }

  .presentation {
    text-align: center;
    color: rgb(255, 233, 255);
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    padding: 1cm;
  }

  .photoMembre {
    max-height: 15%;
    width: auto;
  }

  .wrapper {
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .team-item {
    flex-basis: 15%;
    flex-shrink: 0;
    margin: 0 1rem;
    transition: all 0.4s;
  }

  .team-item:hover {
    flex-basis: 20%;
  }

  .profile-contents p {
    color: var(--c2) !important;
    font-size: 0.75rem;
    width: 300px;
    line-height: 1.5;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s;
    transition-delay: 0.1s;
  }

  .team-item:hover .profile-contents p {
    max-height: 80px;
    opacity: 1;
    margin-top: 0.5rem;
  }

  .team-item img {
    width: 100%;
  }

  .profile {
    background-color: #222;
    position: relative;
    overflow: hidden;
		color: rgb(22, 53, 136);
  }

  .profile:before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
  }

  .profile-contents {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 1rem;
  }

  .profile-contents h2 {
    font-size: 2rem;
    font-weight: 200;
    font-family: Times, "Times New Roman", serif;
  }

  .profile-contents h2 span {
    display: block;
    font-size: 1rem;
  }

  /* .profile-contents p {
    display: none;
  } */

  .profile_white {
    color: white;
  }
  .profile_yellow {
    color: rgb(243, 225, 146);
  }
  .profile_green {
    color: rgb(188, 248, 160);
  }
  .profile_blue {
    color: rgb(22, 53, 136);
  }
  .profile_purple {
    color: rgb(255, 193, 239);
  }


</style>
