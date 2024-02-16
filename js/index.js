fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5" style="width: 20rem; background-color: #000; color: #fff;">
            <img src="${db.image}" class="card-img-top" alt="${db.title}">
            <div class="card-body">
                <h5 class="card-title">${db.title}</h5>
                <p class="card-text">${db.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" style="background-color: #000; color: #fff;"><strong>category:</strong> ${db.category}</li>
                <li class="list-group-item" style=" background-color: #000; color: #fff;"><strong>price:</strong> ${db.price}</li>
            </ul>
        </div>`
        }
        document.getElementById("Lista").innerHTML = card
    })

    