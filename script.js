let type = '';
            function Pokemon() {
                // Dans votre fonction, retirez la classe .reveal du <body>, effacez le texte à
                // l'intérieur de la balise .name et appelez PokéAPI afin d'obtenir la liste des
                // Pokémons correspondant au type reçu en paramètre. Lorsque le menu déroulant
                // change de valeur, appelez votre fonction et passez-lui en paramètre la valeur
                // du dit menu déroulant. Par exemple: "grass".

                fetch('https://pokeapi.co/api/v2/type/' + type)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        var pokemon = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                        console.log(pokemon);
                        fetch(pokemon.pokemon.url)
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                console.log(data);
                                document
                                    .querySelector('.name')
                                    .innerHTML = data.name;
                                document
                                    .querySelector('.media')
                                    .innerHTML = '<img src="' + data.sprites.front_default + '">';
                                document
                                    .querySelector('body')
                                    .classList
                                    .add('reveal');

                                console.log(data.sprites.front_default);

                            });

                    });
            }
            document
                .querySelector('.sel-type')
                .addEventListener('change', function () {
                    type = this.value;
                    Pokemon();
                });