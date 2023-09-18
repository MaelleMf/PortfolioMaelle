document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-hamburger");
  const navDroite = document.querySelector(".nav-droite");
  const closeButton = document.querySelector(".close-button");

  menuButton.addEventListener("click", function () {
      navDroite.classList.toggle("show");
      closeButton.classList.toggle("show");
      
      // Ajoutez ou supprimez la classe "hidden" en fonction de l'état de la barre de navigation
      if (navDroite.classList.contains("show")) {
          menuButton.classList.add("hidden");
      } else {
          menuButton.classList.remove("hidden");
      }
  });
  closeButton.addEventListener("click", function () {
    navDroite.classList.remove("show");
    closeButton.classList.remove("show");
    menuButton.classList.remove("hidden");
});
});

 const popupContents = [

    `<h3>Préparation Bac+4 Développeur Full Stack en alternance - Cloud Campus 2023/2025 </h3>
      <ul>
       <li> Apprendre à réaliser un site statique en HTML/CSS avec Javascript.</li>
       <li>Apprendre à réaliser une application web avec React.</li>
       <li> Apprendre à réaliser un site dynamique avec PHP et MySQL.</li>
       <li> Apprendre à réaliser des architectures en micro-service avec Node.js et MongoDB.</li>
      </ul>`
        ,
  
    `<h3>Formation ARTIS Simplon.co novembre - décembre 2021</h3>
    <ul>
      <li>Découverte du monde et du métier du numérique et initiation à la programmation.</li>
      <li>Apprentissage de l'UI et de l'UX design</li>
      <li>Maquettage de site web</li>
    </ul>` , 
  
    `<h3> Formation développeur web/web mobile Philiance Formation Mai 2020-janvier 2021 </h3>
  
    <ul>
        <li>Apprentissage de la méthode Agile</li>
        <li>Apprentissage des langages de programmation front-end (HTML, CSS, JAVASCRIPT).</li>
        <li>Apprentissage du langage PHP et de son framework Symfony 5.</li>
        <li>Réaliser une interface utilisateur web statique et adaptable.</li>
    </ul>` ,
    
    `<h3>Baccalauréat STMG option SIG 2018</h3>
    <p>Lycée du parc des loges 2017-2018</p>
    <ul>
      <li>Introduction aux principes de base de l'informatique.</li>
      <li>Acquérir des compétences pour collecter, analyser et traiter des données afin de prendre des décisions éclairées en gestion.</li>
      <li>Comprendre les principes de base de la gestion de projets informatiques.</li>
      <li>Apprendre à concevoir des systèmes d'information adaptés aux besoins d'une entreprise.</li>
    </ul>`
  
  ];
  
  function openPopup(popupNumber) {
    const popupContainer = document.getElementById('popupContainer');
    const overlay = document.getElementById('overlay');

    // Créer et configurer le contenu de la pop-up
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup');
    popupContent.innerHTML = popupContents[popupNumber - 1];

    // Créer et configurer le bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.addEventListener('click', closePopup);
     // Ajouter le bouton de fermeture au contenu de la pop-up
     popupContent.appendChild(closeButton);

     // Ajouter le contenu de la pop-up à la pop-up container
     popupContainer.appendChild(popupContent);
 
     // Afficher l'overlay et la pop-up
     overlay.style.display = 'block';
     popupContainer.style.display = 'block';
 }
 
 function closePopup() {
     const popupContainer = document.getElementById('popupContainer');
     const overlay = document.getElementById('overlay');
 
     // Effacer le contenu de la pop-up
     popupContainer.innerHTML = '';
 
     // Cacher la pop-up et l'overlay
     popupContainer.style.display = 'none';
     overlay.style.display = 'none';
 }