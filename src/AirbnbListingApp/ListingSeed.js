const listingSeed = [
    {
        id : 1,
        title : "PADDLEBOARDING",
        description: "Sunset/ Night PaddleBoard Miami Beach",
        price: "$45 per person",
        categories: ["Experiences"],
        section: "Just booked in Miami",
        imageUrl : "https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large"
    },
    {
        id : 2,
        title : "ENTIRE HOME/APT · 1 BED",
        description: "Cozy and charming cottage",
        price: "$95 per night",
        categories: ["Homes"],
        section: "Where to stay",
        imageUrl : "https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large"
    },
    {
        id : 3,
        title : "FINE SEAFOOD",
        description: "Seaspice",
        price: "About $70 per person",
        categories: ["Restaurants"],
        section: "Popular reservations",
        imageUrl : "https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large"
    },
    {
        id : 4,
        title : "WATER SPORTS",
        description: "Night SUP and Kayak tour",
        price: "$59 per person",
        categories: ["Experiences"],
        section: "For adventurers",
        imageUrl : "https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large"
    },
    {
        id : 5,
        title : "latin food",
        description: "Little Havana Food & Cultural Tour",
        price: "$59 per person",
        categories: ["Experiences"],
        section: "For adventurers",
        imageUrl : "https://a0.muscache.com/im/pictures/dad3cd3f-4324-4941-b3bb-658072f4caec.jpg?aki_policy=large"
    },
    {
        id : 6,
        title : "WATER SPORTS",
        description: "Night SUP and Kayak tour",
        price: "$59 per person",
        categories: ["Experiences"],
        section: "For adventurers",
        imageUrl : "https://a0.muscache.com/im/pictures/5f3db9ba-d855-44bb-a8d9-22a23e8c92b5.jpg?aki_policy=large"
    },
    {
        id : 7,
        title : "Nature",
        description: "See alligators on an Everglades safari",
        price: "$55 per person",
        categories: ["Experiences"],
        section: "For adventurers",
        imageUrl : "https://a0.muscache.com/im/pictures/7243646e-7f66-4042-a05d-85dc64d0de0d.jpg?aki_policy=large"
    },
    {
        id : 8,
        title : "bike ride",
        description: "South Beach & Venetian Bike & Mimosa",
        price: "$35 per person",
        categories: ["Experiences"],
        section: "For adventurers",
        imageUrl : "https://a0.muscache.com/im/pictures/87d12da8-4e04-4a05-8bbe-04283cc8e183.jpg?aki_policy=large"
    },
    {
        id : 9,
        title : "ENTIRE HOME/APT · 1 BED",
        description: "Entire home/apt in Biscayne Park",
        price: "$95 per night",
        categories: ["Homes"],
        section: "Where to stay",
        imageUrl : "https://a0.muscache.com/im/pictures/55112199/f0a8b227_original.jpg?aki_policy=large"
    },
    {
        id : 10,
        title : "Entire home/apt in Biscayne Park",
        description: "Cozy and charming cottage",
        price: "$95 per night",
        categories: ["Homes"],
        section: "Where to stay",
        imageUrl : "https://a0.muscache.com/im/pictures/807c052f-c4b0-468a-a5bd-491b667dadbb.jpg?aki_policy=large"
    },
    {
        id : 11,
        title : "Entire home/apt in Miami Beach",
        description: "Entire home/apt in Miami Beach",
        price: "$95 per night",
        categories: ["Homes"],
        section: "Where to stay",
        imageUrl : "https://a0.muscache.com/im/pictures/49939893/f83fce6c_original.jpg?aki_policy=large"
    },
    {
        id : 12,
        title : "Entire home/apt in Miami Beach",
        description: "Entire home/apt in Miami Beach",
        price: "$95 per night",
        categories: ["Homes"],
        section: "Where to stay",
        imageUrl : "https://a0.muscache.com/im/pictures/13973712/9b644b54_original.jpg?aki_policy=large"
    },
    {
        id : 13,
        title : "Entire home/apt in Miami Beach",
        description: "Entire home/apt in Miami Beach",
        price: "$95 per night",
        categories: ["Homes"],
        section: "Just booked in Miami",
        imageUrl : "https://a0.muscache.com/im/pictures/13973712/9b644b54_original.jpg?aki_policy=large"
    },
    {
        id : 14,
        title : "Fine American",
        description: "Alter",
        price: "About $125 per person",
        categories: ["Restaurants"],
        section: "Popular reservations",
        imageUrl : "https://a0.muscache.com/ac/pictures/fd4fdbb9-0ff8-4738-84ab-8601f0af0e17.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    },
    {
        id : 15,
        title : "Casual American",
        description: "The Local Craft Food & Drink",
        price: "About $35 per person",
        categories: ["Restaurants"],
        section: "Popular reservations",
        imageUrl : "https://a0.muscache.com/ac/pictures/be00378a-b794-4813-b47c-13c5a0a5e24c.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    },
    {
        id : 16,
        title : "Classic Peruvian",
        description: "GKB",
        price: "About $55 per person",
        categories: ["Restaurants"],
        section: "Popular reservations",
        imageUrl : "https://a0.muscache.com/ac/pictures/8069acf7-aecb-4f0c-97a2-c91ee145a714.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    },
    {
        id : 17,
        title : "Korean BBQ",
        description: "Drunken Dragon",
        price: "About $40 per person",
        categories: ["Restaurants"],
        section: "Popular reservations",
        imageUrl : "https://a0.muscache.com/ac/pictures/9dcd9702-852d-4e43-b189-1accefdf71a9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    },
]

export default listingSeed;