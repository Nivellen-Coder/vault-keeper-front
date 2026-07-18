# Vault Keeper - Architecture

## Objectif

Vault Keeper est une plateforme permettant aux joueurs de gérer leur bibliothèque de jeux vidéo.

L'objectif est de développer une application Angular moderne mettant en avant les bonnes pratiques d'architecture, de conception et d'expérience utilisateur.

---

# Technologies

- Angular 21
- TypeScript
- SCSS
- Tailwind CSS
- Angular CDK
- RxJS
- Signals
- Git

---

# Architecture

Le projet suit une architecture Feature First.

Chaque fonctionnalité possède son propre dossier.

Exemple :

features/
    auth/
    discover/
    library/
    profile/

Les composants réutilisables sont placés dans Shared.

Les services globaux sont placés dans Core.

---

# Design System

Vault Keeper possède son propre Design System.

Il comprend :

- couleurs
- typographie
- ombres
- composants
- icônes SVG
- animations

Toutes les pages utilisent ce Design System.

---

# Objectif final

Créer une application ayant une qualité équivalente à un produit professionnel.

Le projet est pensé pour être facilement maintenable, évolutif et réutilisable.
