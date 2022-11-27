var link = document.getElementById('tutaj');
        link.addEventListener('click', function() {
            var sciezka = prompt('podaj kod od myszki');
            this.href = "pliki/" + sciezka; 
            }
        )