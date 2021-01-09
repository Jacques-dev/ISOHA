

<template>
	<div id="propos">

    <img src="images/efrei.png" class="logo">

    <div id="first" class="parallax"></div>

    <div id="presentation">
      <h2>Pourquoi ISOHA  ?</h2>
      <br>
      <p>
        Depuis 2006, a été mis en œuvre le DMP ( Dossier médical personnel ) <br>
        totalement dématérialisé, celui-ci permet en effet un échange rapide de l’information. <br>
        <br>
        L’objectif du projet est l’amélioration de l'environnement informatique des hôpitaux, <br>
        en utilisant l’IA afin d’analyser des données et d’effectuer des pré-diagnostics. <br>
        Ce site permet ainsi de faciliter la tâche des personnels de santé et <br>
        un retour sur les données fournies grâce à l’implémentation du machine learning. <br>
      </p>
	  </div>

		<div id="second" class="parallax"></div>

		<div id="team">
			<div class="container-fluid">
        <div class="row justify-content-center">

					<div class="col-lg-12 col-sm-12">
	          <div class="heading-title text-center">
	            <h3 class="text-uppercase">L'equipe Analytics</h3>
							<p class="p-top-30 half-txt">
				        Nous sommes 5 etudiants de L3 news à l'EFREI paris de la promotion 2003.
				        Dans le cadre d'un projet transvese nous avons fondé l'equipe Analytics.
				        L'equipe Analytics a pour but d'elaborer le projer ISOHA (Intelligent Software for Online Health Analytics).
							</p>
	          </div>
					</div>

          <div class="col-lg-2">
            <div class="team-member">
              <div class="team-img">
                <img src="../images/pp-de-groupe/Jacques.jpg" alt="team member" class="img-responsive">
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Chef de projet & Architect</h4>
                  <p>Responsable de la réalisation globale du projet et du suivi des objectifs</p>
                </div>
                <div class="s-link">
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Jacques Tellier</h5>
              <span></span>
            </div>
          </div>

					<div class="col-lg-2">
            <div class="team-member">
              <div class="team-img">
                <img src="../images/pp-de-groupe/Glory.jpg" alt="team member" class="img-responsive">
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Maître d’ouvrage</h4>
                  <p>
										Identifier les différents types d’utilisateurs et rédiger les scénarios fonctionnels
										& fournir les fonctionnalités du projet en fonction du cahier des charges
									</p>
                </div>
                <div class="s-link">
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Glory Chicaté</h5>
              <span></span>
            </div>
          </div>

					<div class="col-lg-2">
            <div class="team-member">
              <div class="team-img">
                <img src="../images/pp-de-groupe/Raphael.jpg" alt="team member" class="img-responsive">
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Responsable Machine Learning</h4>
                  <p>Penser le model machine learning</p>
                </div>
                <div class="s-link">
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Raphaël Jehl</h5>
              <span></span>
            </div>
          </div>

					<div class="col-lg-2">
            <div class="team-member">
              <div class="team-img">
                <img src="../images/pp-de-groupe/Remi.jpg" alt="team member" class="img-responsive">
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Chef Designer</h4>
                  <p>
										Définit la charte graphique, et le rendu visuel final avec des maquettes
										faites en amont
									</p>
                </div>
                <div class="s-link">
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Rémi Groise</h5>
              <span></span>
            </div>
          </div>

					<div class="col-lg-2">
            <div class="team-member">
              <div class="team-img">
                <img src="../images/pp-de-groupe/Paul.jpg" alt="team member" class="img-responsive">
              </div>
              <div class="team-hover">
                <div class="desk">
                  <h4>Responsable temps et avancés</h4>
                  <p>
										Met en place un planning afin d’organiser le
			              travail et gérer le coût en heures des étapes
			              à réaliser en respectant les délais
									</p>
                </div>
                <div class="s-link">
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="team-title">
              <h5>Paul Cabon</h5>
              <span></span>
            </div>
          </div>

      	</div>
    	</div>
	  </div>

		<div id="third" class="parallax"></div>

	  <div id="objectif">
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
    margin: 0;
    padding: 0;
    color: white;
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover !important;
  }

	@media (max-width: 640px) {
		#first {
			top: 107px !important;
		}
		#propos .logo {
			display: none;
		}
	}
	@media (min-width: 768px) and (max-width: 1024px) {
		#propos .logo {
			display: none;
		}
	}

  #first {
		position: absolute;
		top: 53.5px;
		left: 0;
    background-image: url("../images/banner.png");
		background-size: contain;
    height: 100vh;
  }

	#second {
		background-image: url("../images/banner.png");
		background-size: contain;
    height: 25vh;
		left: 0;
	}

	#third {
		background-image: url("../images/banner.png");
		background-size: contain;
    height: 25vh;
		left: 0;
	}

	#propos {
		margin-top: 100vh;
	}

  #propos .logo {
    position: fixed;
    top: 75px;
    left: 25px;
    height: 40px;
		z-index: 1;
  }

  #propos #presentation {
		border: 1px solid var(--c2);
		color: var(--c1);
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

	#propos #team {
		border: 1px solid var(--c2);
		color: var(--c1);
	}

	#propos #objectif {
		border: 1px solid var(--c2);
		color: var(--c1);
		text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 150px 0 !important;
	}

	@media (max-width: 640px) {
		#presentation, #team, #objectif {
			border: 1px solid transparent !important;
		}
	}

	#propos .heading-title {
    margin-bottom: 100px;
	}

	#propos .text-center {
    text-align: center;
	}

	#propos .heading-title h3 {
    margin-bottom: 0;
    letter-spacing: 2px;
    font-weight: normal;
	}

	#propos .p-top-30 {
    padding-top: 30px;
	}

	#propos .half-txt {
    width: 60%;
    margin: 0 auto;
    display: inline-block;
    line-height: 25px;
    color: var(--c1);
	}

	#propos .text-uppercase {
    text-transform: uppercase;
	}

	#propos .team-member, #propos .team-member .team-img {
    position: relative;
		width: 300px;
		height: 350px;
	}

	#propos .team-member .team-img img {
		width: 300px;
		height: 350px;
	}

	#propos .team-member {
    overflow: hidden;
	}

	#propos .team-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    border: 20px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.90);
    opacity: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
	}

	#propos .team-member:hover .team-hover .desk {
    top: 35%;
		color: var(--c5)
	}

	#propos .team-member:hover .team-hover,
	#propos .team-member:hover .team-hover .desk,
	#propos .team-member:hover .team-hover .s-link {
    opacity: 1;
	}

	#propos .team-hover .desk {
    position: absolute;
    top: 0%;
    width: 100%;
    opacity: 0;
    -webkit-transform: translateY(-55%);
    -ms-transform: translateY(-55%);
    transform: translateY(-55%);
    -webkit-transition: all 0.3s 0.2s;
    transition: all 0.3s 0.2s;
    padding: 0 20px;
	}

	#propos .desk, #propos .desk h4, #propos .team-hover .s-link a {
    text-align: center;
    color: #222;
	}

	#propos .team-member:hover .team-hover .s-link {
    bottom: 10%;
	}

	#propos .team-member:hover .team-hover,
	#propos .team-member:hover .team-hover .desk,
	#propos .team-member:hover .team-hover .s-link {
    opacity: 1;
	}

	#propos .team-hover .s-link {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0;
    text-align: center;
    -webkit-transform: translateY(45%);
    -ms-transform: translateY(45%);
    transform: translateY(45%);
    -webkit-transition: all 0.3s 0.2s;
    transition: all 0.3s 0.2s;
    font-size: 35px;
	}

	#propos .desk, #propos .desk h4, #propos .team-hover .s-link a {
    text-align: center;
    color: #222;
	}

	#propos .team-member .s-link a {
    margin: 0 10px;
    color: #333;
    font-size: 16px;
	}

	#propos .team-title {
    position: static;
    padding: 20px 0;
    display: inline-block;
    letter-spacing: 2px;
    width: 100%;
	}

	#propos .team-title h5 {
    margin-bottom: 0px;
    display: block;
    text-transform: uppercase;
	}

	#propos .team-title span {
    font-size: 12px;
    text-transform: uppercase;
    color: var(--b1);
    letter-spacing: 1px;
	}

</style>
