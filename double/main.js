const family = [
    {
        name: "Leri",
        lastName: "Bekauri",
        age: 21,
        profession: "Digital Marketer",
        experience: "2 Years"
    },
    {
        name: "Grigol",
        lastName: "Nemsadze",
        age: 36,
        profession: "Doctor",
        experience: "5 Years",
        children: [
            {
                name: "Datuna",
                age: 7,
                profession: "Kargi bavshvi"
            },
            {
                name: "Murto",
                age: 11,
                profession: "Cudi bavshvi"
            }
        ]
    },
    {
        name: "Irakli",
        age: 26,
        profession: "Full Stack Developer",
        experience: "8 Years",
        children: {
            name: "Otiko",
            age: 2,
            profession: "Toto"
        },
    },

];


family.forEach(function (person) {
 $('#family').append(`<div class="card border-secondary mb-3">
     
 <div class="card-header">${person.name}</div>

<div class="card_body">card-body
   <h4 class="card-title">Second card title</h4>
   <p class="card-text">content</p>    
</div>

</div>`)


})