const inventory = [
    {
        id: 1,
        title: "A Game of Thrones",
        subTitle: "A Song of Ice and Fire",
        authorFirstname: "George RR",
        authorLastname: "Martin",
        year: "1996",
        pages: "819"
    },
    {
        id: 2,
        title: "The Colour of Magic",
        subTitle: "The Discworld Series",
        authorFirstname: "Terry",
        authorLastname: "Pratchett",
        year: "1983",
        pages: "293"
    },
    {
        id: 3,
        title: "The Lord of the Rings",
        subTitle: "",
        authorFirstname: "JRR",
        authorLastname: "Tolkien",
        year: "1954",
        pages: "1209"
    },
    {
        id: 4,
        title: "The Hobbit",
        subTitle: "",
        authorFirstname: "JRR",
        authorLastname: "Tolkien",
        year: "1937",
        pages: "310"
    },
    {
        id: 5,
        title: "Jonathan Strange and Mr. Norwell",
        subTitle: "",
        authorFirstname: "Susanna",
        authorLastname: "Clarke",
        year: "2004",
        pages: "865"
    },
    {
        id: 6,
        title: "The Name of the Wind",
        subTitle: "The Kingkiller Chronicle",
        authorFirstname: "Patrick",
        authorLastname: "Rothfuss",
        year: "2007",
        pages: "676"
    },
    {
        id: 7,
        title: "Jonathan Strange and Mr. Norwell",
        subTitle: "",
        authorFirstname: "Susanna",
        authorLastname: "Clarke",
        year: "2004",
        pages: "865"
    },
    {
        id: 8,
        title: "American Gods",
        subTitle: "",
        authorFirstname: "Neil",
        authorLastname: "Gaiman",
        year: "2001",
        pages: "674"
    },
    {
        id: 9,
        title: "Mythical Creatures and Magical Beasts",
        subTitle: "An Illustrated Book of Monsters from Timeless Folktales, Folklore and Mythology",
        authorFirstname: "Zayden",
        authorLastname: "Stone",
        year: "2022",
        pages: "348"
    },
    {
        id: 10,
        title: "Encyclopedia of Beasts and Monsters in Myth, Legend and Folklore",
        subTitle: "",
        authorFirstname: "Theresa",
        authorLastname: "Bane",
        year: "2016",
        pages: "428"
    },
    {
        id: 11,
        title: "The Frugal Wizard's Handbook for Surviving Medieval England",
        subTitle: "",
        authorFirstname: "Brandon",
        authorLastname: "Sanderson",
        year: "2023",
        pages: "384"
    },
    {
        id: 12,
        title: "The Book of Hidden Things",
        subTitle: "",
        authorFirstname: "Francesco",
        authorLastname: "Dimitri",
        year: "2018",
        pages: "400"
    },
    {
        id: 13,
        title: "Wild Magic",
        subTitle: "Celtic Folk Traditions for the Solitary Practitioner",
        authorFirstname: "Danu",
        authorLastname: "Forest",
        year: "2020",
        pages: "240"
    },
    {
        id: 14,
        title: "The Book of Azrael",
        subTitle: "Gods and Monsters",
        authorFirstname: "Amber",
        authorLastname: "Nicole",
        year: "2022",
        pages: "498"
    },
    {
        id: 15,
        title: "Botanical Curses and Poisons",
        subTitle: "The Shadow-Lives of Plants",
        authorFirstname: "Fez",
        authorLastname: "Inkwright",
        year: "2021",
        pages: "224"
    },
    {
        id: 16,
        title: "Fantasy Encyclopedia",
        subTitle: "",
        authorFirstname: "Judy",
        authorLastname: "Allen",
        year: "2005",
        pages: "144"
    },
    {
        id: 17,
        title: "Mythopedia",
        subTitle: "An Encyclopedia of Mythical Beasts and Their Magical Tales",
        authorFirstname: "Judy",
        authorLastname: "Allen",
        year: "2020",
        pages: "128"
    },
    {
        id: 18,
        title: "The Book of Dragons",
        subTitle: "An Anthology",
        authorFirstname: "Jonathan",
        authorLastname: "Strahan",
        year: "2020",
        pages: "576"
    },
    {
        id: 19,
        title: "Breverton's Phantasmagoria",
        subTitle: "A Compendium Of Monsters, Myths And Legends",
        authorFirstname: "Terry",
        authorLastname: "Breverton",
        year: "2011",
        pages: "384"
    },
    {
        id: 20,
        title: "Among the Beasts & Briars",
        subTitle: "",
        authorFirstname: "Ashley",
        authorLastname: "Poston",
        year: "2020",
        pages: "352"
    },
    {
        id: 21,
        title: "Emily Wilde's Encyclopaedia of Faeries",
        subTitle: "",
        authorFirstname: "Heather",
        authorLastname: "Fawcett",
        year: "2023",
        pages: "336"
    },
    {
        id: 22,
        title: "Cooking for Wizards, Warriors and Dragons",
        subTitle: "125 Unofficial Recipes Inspired by The Witcher, Game of Thrones, The Broken Earth and Other Fantasy Favorites",
        authorFirstname: "Thea",
        authorLastname: "James",
        year: "2021",
        pages: "176"
    },
    {
        id: 23,
        title: "Akata Witch",
        subTitle: "",
        authorFirstname: "Nnedi",
        authorLastname: "Okorafor",
        year: "2017",
        pages: "384"
    },
    {
        id: 24,
        title: "Assassin's Apprentice",
        subTitle: "",
        authorFirstname: "Robin",
        authorLastname: "Hobb",
        year: "2023",
        pages: "464"
    },
    {
        id: 25,
        title: "The Bear and the Nightingale",
        subTitle: "",
        authorFirstname: "Katherine",
        authorLastname: "Arden",
        year: "2017",
        pages: "368"
    },
    {
        id: 26,
        title: "The Blue Sword",
        subTitle: "",
        authorFirstname: "Robin",
        authorLastname: "McKinley",
        year: "2007",
        pages: "320"
    },
    {
        id: 27,
        title: "The Broken Crown",
        subTitle: "",
        authorFirstname: "Michelle",
        authorLastname: "West",
        year: "2018",
        pages: "768"
    },
    {
        id: 28,
        title: "The Changeling",
        subTitle: "",
        authorFirstname: "Victor",
        authorLastname: "LaValle",
        year: "2018",
        pages: "464"
    },
    {
        id: 29,
        title: "City of Stairs",
        subTitle: "",
        authorFirstname: "Robert Jackson",
        authorLastname: "Bennett",
        year: "2014",
        pages: "464"
    },
    {
        id: 30,
        title: "Crown Duel",
        subTitle: "",
        authorFirstname: "Sherwood",
        authorLastname: "Smith",
        year: "2002",
        pages: "480"
    },
    {
        id: 31,
        title: "The Alchemist",
        subTitle: "",
        authorFirstname: "Paulo",
        authorLastname: "Coelho",
        year: "2014",
        pages: "208"
    },
    {
        id: 32,
        title: "The Dragonbone Chair",
        subTitle: "",
        authorFirstname: "Tad",
        authorLastname: "Williams",
        year: "2016",
        pages: "801"
    },
    {
        id: 33,
        title: "The Lion, the Witch and the Wardrobe",
        subTitle: "",
        authorFirstname: "C.S.",
        authorLastname: "Lewis",
        year: "1950",
        pages: "208"
    },
    {
        id: 34,
        title: "A Hero Born",
        subTitle: "",
        authorFirstname: "Jin",
        authorLastname: "Yong",
        year: "2017",
        pages: "432"
    },
    {
        id: 35,
        title: "The Tombs of Atuan",
        subTitle: "",
        authorFirstname: "Ursula K.",
        authorLastname: "Le Guin",
        year: "2012",
        pages: "208"
    },
    {
        id: 36,
        title: "A Wizard of Earthsea",
        subTitle: "",
        authorFirstname: "Ursula K.",
        authorLastname: "Le Guin",
        year: "2012",
        pages: "264"
    },
    {
        id: 37,
        title: "A Wrinkle in Time",
        subTitle: "",
        authorFirstname: "Madeleine",
        authorLastname: "L'Engle",
        year: "2007",
        pages: "256"
    }
]

export default inventory;