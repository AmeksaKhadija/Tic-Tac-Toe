# 🎮 Tic-Tac-Toe Dynamique

## 📌 Contexte du projet
L'entreprise **PlayInnovate**, une start-up spécialisée dans le gaming en ligne, souhaite enrichir l'expérience de ses utilisateurs en leur proposant un jeu de **Tic Tac Toe dynamique et évolutif**.  
Contrairement à la version classique, ce jeu permettra de **personnaliser la taille de la grille (n x n)** et le **nombre d'alignements requis pour gagner (k)**.  

👉 L'objectif est d'offrir une expérience de jeu **flexible, adaptative et engageante**, tout en garantissant une interface **responsive** et **intuitive**.

---

## 🎯 Objectifs
- Implémenter un jeu de Tic Tac Toe dynamique pour **deux joueurs** en JavaScript.  
- **Le joueur 1 commence**, et les joueurs alternent leurs tours.  
- La taille de la grille **(n x n)** et le nombre d'alignements requis **(k)** sont configurables.  
- Le jeu détecte automatiquement un gagnant dès qu'un joueur aligne **k symboles (X ou O)** :
  - Horizontalement  
  - Verticalement  
  - Diagonalement  
- En cas de grille remplie sans vainqueur → le jeu annonce un **match nul**.  
- Les **scores et préférences** sont sauvegardés dans le **localStorage**.  

---

## 🕹️ Interface de jeu
- Afficher une **grille dynamique** de n x n cases.  
- Les joueurs cliquent sur une **case vide** pour y placer leur symbole (X ou O).  
- Indiquer clairement le **joueur actif** et le **nombre d'alignements requis (k)**.  
- Afficher un **score persistant** des victoires par joueur.  
- Bouton **Recommencer une partie** (sans recharger la page).  
- Bouton **Réinitialisation des scores**.  
- Permettre aux joueurs de **choisir leurs symboles** et de configurer **n** et **k** via un menu de paramètres.  

---

## 🎨 Design et réactivité
- Interface **moderne et attrayante**.  
- Compatible **desktop, tablette et mobile**.  
- Utilisation de **CSS flexibles** (Grid/Flexbox) pour s’adapter à toutes les tailles de grilles.  
- Expérience utilisateur **fluide et intuitive**.  

---

## ⚙️ Développement
- Structurer le code en **modules/fonctions distinctes** :
  - Logique de jeu  
  - Gestion de l’interface  
  - Persistance des données  
- Utiliser le **DOM** pour les interactions et les mises à jour dynamiques.  
- **Commenter le code** pour faciliter la maintenance.  
- Tester rigoureusement toutes les fonctionnalités, y compris les **cas limites**.  

---

## 🛠️ Outils et technologies
- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**  

