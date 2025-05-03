// Voyez le prix total ajusté en fonction de la quantité et des suppressions.
function mettreAJourTotal() {
    let montantTotal = 0;
    const cardsProduits = document.querySelectorAll('.card');
    for (let i = 0; i < cardsProduits.length; i++) {
        const Quantite = parseInt(cardsProduits[i].querySelector('.quantity').textContent);
        const Prix = parseInt(cardsProduits[i].querySelector('.unit-price').textContent);
        montantTotal += Quantite * Prix;
    }
    document.querySelector('.total').textContent = montantTotal + ' $';
}

// Ajustez la quantité de chaque article grâce aux boutons "+" et "-".
const btnPlus = document.querySelectorAll('.fa-plus-circle');
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click', function () {
        const afficheQuantite = this.parentElement.querySelector('.quantity');
        afficheQuantite.textContent = parseInt(afficheQuantite.textContent) + 1;
        mettreAJourTotal();
    });
}

const btnMoins = document.querySelectorAll('.fa-minus-circle');
for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].addEventListener('click', function () {
        const afficheQuantite = this.parentElement.querySelector('.quantity');
        let quantiteActuel = parseInt(afficheQuantite.textContent);
        if (quantiteActuel > 0) {
            afficheQuantite.textContent = quantiteActuel - 1;
            mettreAJourTotal();
        }
    });
}

// Supprimez des articles du panier.
const btnSup = document.querySelectorAll('.fa-trash-alt');
for (let i = 0; i < btnSup.length; i++) {
    btnSup[i].addEventListener('click', function () {
        const conteurProduit = this.closest('.card-body');
        conteurProduit.remove();
        mettreAJourTotal();
    });
}

// Aimez des articles grâce à un bouton cliquable en forme de cœur.
const btnAimer = document.querySelectorAll('.fa-heart');
for (let i = 0; i < btnAimer.length; i++) {
    btnAimer[i].addEventListener('click', function () {
        if (this.style.color === 'red') {
            this.style.color = 'black';
        } else {
            this.style.color = 'red';
        }
    });
}
