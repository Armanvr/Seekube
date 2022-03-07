# Réponses aux questions

5. Comment tu ferais pour tester cette application simplement ?

	Pour tester unitairement les fonctions de l'App, j'utiliserai Jest. Je pense que des tests fonctionnels ne sont pas forcément nécessaires sauf si les données affichées et récupérées sont critiques et doivent être testés.
    
	
6. Et si le calcul du fizzbuzz était fait côté api ? Comment ferais-tu ?

	Je ferai une requête POST avec un body qui contient la valeur numérique passée à l'input, puis l'API me renverrait une réponse avec le tableau contenant la suite fizzbuzz à afficher.

	Exemple : 
	
	```javascript
		fetch('getFizzBuzzResult', {
			method: 'POST',
			body: 42 // La valeur de l'input
		}).then(data => {
			return data.json() // le tableau qui contient la suite fizzbuzz
		})
	```	