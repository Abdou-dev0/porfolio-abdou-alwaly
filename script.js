document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    app.innerHTML = `
        <section class="home container" id="home">
            <div class="home__container">
                <div class="home__data">
                    <h1 class="home__title">Salut,<br>je m'appel <span>Abdou Khadre Alwaly Ndiaye</span><br>Developpeur Web</h1>
                    <div class="contact-button-container">
                        <a href="#contact" class="btn-contact"><i class="fa-solid fa-envelope"></i> Contact</a>
                    </div>
                    <div class="home__social">
                        <a href="https://www.linkedin.com/in/abdoukhadrealwalyndiaye/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/doucams.ndiaye.9?locale=fr_FR"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/http.___abdou_khadre/"><i class="fab fa-instagram"></i></a>
                        <a href="https://github.com/Abdou-dev0"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="home__img-box">
                    <img src="images/Profil.jpg" alt="Abdou">
                </div>
            </div>
        </section>

        <section class="about section container" id="about">
            <h2 class="section-title">A propos</h2>
            <div class="about__container">
                <div class="about__img">
                    <img src="images/Profil.jpg" alt="About Image">
                </div>
                <div>
                    <h2 class="about__subtitle">Développeur Web</h2>
                    <p class="about__description">
                        Salut ! Je suis Abdou Khadre Alwaly Ndiaye, un développeur web passionné basé au Sénégal. Mon objectif est simple : créer des expériences numériques innovantes, intuitives et surtout utiles.
                        <br><br>
                        Récemment diplômé en Informatique de Gestion, j'ai forgé mon expertise à travers des projets concrets qui m'ont appris l'autonomie et la capacité d'adaptation face aux nouvelles technologies. Pour moi, le développement ne se résume pas à « pisser du code » : c'est une réflexion stratégique où chaque ligne doit servir l'expérience finale de l'utilisateur.
                        <br><br>
                        Rigoureux et curieux, je m'efforce de produire un code propre et optimisé. Mon objectif est de transformer des idées complexes en solutions web simples, rapides et esthétiques pour répondre aux besoins des utilisateurs.
                    </p>
                    <div class="cta-container">
                        <a href="chemin/vers/ton-cv.pdf" class="btn btn-primary">Télécharger mon CV</a>
                        <a href="https://github.com/Abdou-dev0" target="_blank" class="btn btn-secondary">
                            <i class="fa-brands fa-github"></i> Mon GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="services section" id="skills">
            <h2 class="section-title">Mes Compétences</h2>

            <div class="services__container container grid">
                <div class="services__card">
                    <i class='bx bx-code-alt services__icon'></i>
                    <h3 class="services__title">Software Development</h3>
                    <p class="services__description">
                        Expertise en JAVA, PYTHON, PHP et C pour des solutions logicielles robustes.
                    </p>
                </div>

                <div class="services__card">
                    <i class='bx bx-layout services__icon'></i>
                    <h3 class="services__title">Website Design</h3>
                    <p class="services__description">
                        Création de sites modernes avec HTML5/CSS3, JAVASCRIPT et WordPress.
                    </p>
                </div>

                <div class="services__card">
                    <i class='bx bx-mobile-alt services__icon'></i>
                    <h3 class="services__title">Mobile Development</h3>
                    <p class="services__description">
                        Développement d'applications mobiles natives via Android Studio.
                    </p>
                </div>

                <div class="services__card">
                    <i class='bx bx-data services__icon'></i>
                    <h3 class="services__title">Database Solutions</h3>
                    <p class="services__description">
                        Gestion et optimisation de bases de données MySQL, Oracle et Access.
                    </p>
                </div>

                <div class="services__card">
                    <i class='bx bx-server services__icon'></i>
                    <h3 class="services__title">Systems & Network</h3>
                    <p class="services__description">
                        Administration Windows/Linux et simulation Cisco Packet Tracer.
                    </p>
                </div>

                <div class="services__card">
                    <i class='bx bx-bar-chart-alt services__icon'></i>
                    <h3 class="services__title">Digital Tools</h3>
                    <p class="services__description">
                        Maîtrise de la suite Office (Excel, Word) et gestion de projet.
                    </p>
                </div>
            </div>
        </section>

        <section class="work section container" id="work">
                <h2 class="section-title">Projets</h2>
                <div class="work__container">
                <div class="work__img"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300" alt="Project"></div>
                <div class="work__img"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=300" alt="Project"></div>
                <div class="work__img"><img src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=300" alt="Project"></div>
            </div>
        </section>

        <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>

            <div class="contact__container container grid">
                <p class="contact__description">
                    Vous avez un projet en tête ou une opportunité de recrutement ?
                    N'hésitez pas à m'envoyer un message, je vous répondrai avec plaisir !
                </p>
                <form action="https://formspree.io/f/xwvnjnre" method="POST" class="contact__form" id="contact-form">
                    <div class="contact__inputs">
                        <input type="text" name="name" id="nom" placeholder="Nom" class="contact__input" required>
                        <input type="email" name="email" id="email" placeholder="Email" class="contact__input" required>
                    </div>
                    <textarea name="message" id="message" cols="0" rows="7" placeholder="Message" class="contact__input" required></textarea>
                    
                    <div class="contact__button-container">
                        <button type="submit" class="contact__button button" id="submit-btn">Envoyer</button>
                        <p class="contact__message" id="contact-message"></p>
                    </div>
                </form>
            </div>
        </section>
    `;
});

    const navLinks = document.querySelectorAll('.nav__link'); 

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(l => l.classList.remove('active'));
            
                this.classList.add('active');
            });
        });
    
        /*Pour afficher le menu dans un telephone ou tablette*/
    const navToggle = document.getElementById('nav-toggle'),
      navMenu = document.querySelector('.nav__menu');

        if(navToggle){
            navToggle.addEventListener('click', () =>{
                navMenu.classList.toggle('show-menu');
            })
        }
    
    
    /* On attend que le DOM soit prêt pour éviter l'erreur 'null' */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            contactMessage.textContent = "Envoi en cours... ⏳";
            contactMessage.classList.add('color-blue');

            // Envoi vers Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    contactMessage.textContent = "Message envoyé avec succès ! ✅";
                    contactForm.reset();
                    setTimeout(() => { contactMessage.textContent = ""; }, 5000);
                } else {
                    contactMessage.textContent = "Erreur lors de l'envoi ❌";
                    contactMessage.classList.replace('color-blue', 'color-red');
                }
            })
            .catch(error => {
                contactMessage.textContent = "Erreur de connexion 🌐";
                contactMessage.classList.add('color-red');
            });
        });
    }
});