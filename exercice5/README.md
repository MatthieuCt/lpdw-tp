# Exercice 5 - State et binding

1. Comment puis-je définir le `state` par défaut d'un composant ?
Je peux le définir dans le constructor en utilisant 'this.state'.

2. Quelle est la particularité du `state` dans un composant React ?
La particularité de 'state' est qu'il recharge le render à chaque fois qu'il change.

3. Comment puis-je transférer la référence de mon objet (this) à une méthode lorsque j'utilise les attributs natif d'un élément tel que `onChange` ou `onClick` par exemple ?
En utilisant la méthode bind avec comme paramètre 'this'.

4. Que ce passe t-il lorsqu'une propriété du `state` d'un composant React est modifiée ?
La méthode render est réinvoquée.
