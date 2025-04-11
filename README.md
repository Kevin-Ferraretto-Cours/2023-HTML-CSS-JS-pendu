# Jeu du Pendu

Une implémentation moderne et immersive du célèbre Jeu du Pendu, développée avec les technologies web standards et enrichie d'effets sonores pour une expérience de jeu captivante.

## 📋 Description

Le Jeu du Pendu est un jeu de devinettes de mots où le joueur doit découvrir un mot caché lettre par lettre avant d'épuiser ses tentatives. Cette version web propose une interface élégante, des animations fluides et des effets sonores qui améliorent l'immersion, rendant chaque partie plus intense et divertissante.

## ✨ Fonctionnalités

- **Interface responsive** - Jouez sur n'importe quel appareil, du smartphone à l'ordinateur de bureau
- **Animation du pendu** - Visualisation progressive du dessin du pendu à chaque erreur
- **Effets sonores immersifs** - Sons dynamiques pour les réussites, échecs, et victoires
- **Système de score** - Suivi de vos performances entre les parties
- **Design minimaliste** - Interface épurée et intuitive

## 🚀 Installation

Aucune installation complexe n'est requise !

```bash
# Cloner le dépôt
git clone https://github.com/Kevin-Ferraretto-Cours/2023-HTML-CSS-JS-pendu.git

# Accéder au répertoire
cd 2023-HTML-CSS-JS-pendu
```

## 🎮 Comment jouer

1. **Lancez le jeu** en ouvrant le fichier `index.html`
2. **Devinez le mot caché** en cliquant sur les lettres du clavier virtuel
3. **Chaque lettre correcte** révèle sa position dans le mot secret
4. **Chaque erreur** fait progresser le dessin du pendu
5. **Gagnez** en devinant le mot complet avant que le dessin du pendu ne soit terminé

## 🛠️ Personnalisation

Vous pouvez facilement personnaliser le jeu selon vos préférences :

### Ajouter de nouveaux mots
Modifiez la variable `programming_languages` dans le fichier `game.js` :

```javascript
let programming_languages = [
	"python",
	"javascript",
	"java"
];
```

### Modifier les effets sonores
Remplacez les fichiers audio dans le dossier `sounds/` par vos propres effets sonores (formats MP3 ou WAV recommandés).

## 💻 Technologies utilisées

- **HTML5** - Structure de la page et éléments interactifs
- **CSS3** - Mise en page, animations et design responsive
- **JavaScript** - Logique du jeu et manipulation du DOM

## 📈 Roadmap

- [ ] Ajout de catégories de mots thématiques
- [ ] Implémentation d'un mode multijoueur local
- [ ] Sauvegarde des meilleurs scores
- [ ] Support de plusieurs langues
- [ ] Mode "Contre-la-montre"

## 📜 Licence

Ce projet est distribué sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
