const quotes = [
    {
        text: `Hope springs eternal in the human breast:\nMan never is, but always to be blest.`,
        author: 'Alexander Pope',
        tags: ['hope']
    },
    {
        text: 'All for love, and nothing for reward.',
        author: 'Edmund Spencer',
        tags: ['love']
    },
    {
        text: 'Knowledge is power.',
        author: 'Francis Bacon',
        tags: ['wisdom']
    },
    {
        text: 'Beauty provoketh thieves sooner than gold.',
        author: 'William Shakespeare',
        tags: ['love']
    },
    {
        text: 'Art hath an enemy called Ignorance.',
        author: 'Ben Jonson',
        tags: ['art', 'wisdom']
    },
    {
        text: 'For God sake hold your tongue, and let me love.',
        author: 'John Donne',
        tags: ['love']
    },
    {
        text: 'History is indeed little more than the register of the crimes, follies, and misfortunes of mankind.',
        author: 'Edward Gibbon',
        tags: ['history']
    },
    {
        text: 'My country is the world and my religion is to do good.',
        author: 'Thomas Paine',
        tags: ['politics', 'religion']
    },
    {
        text: 'The God who gave us life, gave us liberty at the same time.',
        author: 'Thomas Jefferson',
        tags: ['politics']
    },
    {
        text: 'Wisdom outweighs any wealth.',
        author: 'Sophocles',
        tags: ['wisdom']
    },
    {
        text: 'There is only one good, knowledge, and one evil, ignorance.',
        author: 'Socrates',
        tags: ['wisdom']
    },
    {
        text: 'Word is a shadow of deed.',
        author: 'Democritus',
        tags: ['action']
    },
    {
        text: 'Opposites are cures for opposites.',
        author: 'Hippocrates',
        tags: ['health']
    },
    {
        text: 'You know as well as we do that right, as the world goes, is only in question between equals in power, while the strong do what they can and the weak suffer what they must.',
        author: 'Thucydides',
        tags: ['politics', 'war']
    },
    {
        text: 'The wise learn many things from their enemies.',
        author: 'Aristophanes',
        tags: ['wisdom']
    },
    {
        text: 'The life which is unexamined is not worth living.',
        author: 'Plato',
        tags: ['wisdom']
    },
    {
        text: 'Time crumbles things; everything grows old under the power of Time and is forgotten through the lapse of Time.',
        author: 'Aristotle',
        tags: ['time']
    },
    {
        text: 'The great man does not think beforehand of his words that they may be sincere, nor of his actions that they may be resolute—he simply speaks and does what is right.',
        author: 'Meng-tzu',
        tags: ['morality']
    },
    {
        text: 'Pleasure is the beginning and the end of being happy.',
        author: 'Epicurus',
        tags: ['happiness']
    },
    {
        text: 'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
        author: 'Sun-tzu',
        tags: ['war']
    },
    {
        text: 'Be cautious of what is within you; block off what is outside you, for much knowledge will do you harm.',
        author: 'Chuang-tzu',
        tags: ['wisdom', 'morality']
    },
    {
        text: 'Riches cover a multitude of woes.',
        author: 'Menander',
        tags: ['money', 'happiness']
    },
    {
        text: 'Moderation in all things.',
        author: 'Terence',
        tags: ['morality']
    },
    {
        text: 'Better late than never.',
        author: 'Livy',
        tags: ['time']
    },
    {
        text: 'Medicine, to produce health, has to examine disease; and music, to create harmony, must investigate discord.',
        author: 'Plutarch',
        tags: ['health', 'art']
    },
    {
        text: `Riches and power are but gifts of blind fate, whereas goodness is the result of one's own merits.`,
        author: 'Heloise',
        tags: ['money', 'morality', 'politics']
    },
    {
        text: 'Without hope we live in desire.',
        author: 'Dante Alighieri',
        tags: ['happiness']
    },
    {
        text: 'To be great is to be misunderstood.',
        author: 'Ralph Waldo Emerson',
        tags: ['wisdom']
    },
    {
        text: 'It is vain to say human beings ought to be satisfied with tranquility: they must have action; and they will make it if they cannot find it.',
        author: 'Charlotte Brontë',
        tags: ['happiness']
    },
    {
        text: 'The frontiers are not east or west, north or south, but wherever a man fronts a fact.',
        author: 'Henry David Thoreau',
        tags: ['wisdom', 'geography']
    },
    {
        text: 'There is no hopelessness so sad as that of early youth, when the soul is made up of wants, and has no long memories, no superadded life in the life of others.',
        author: 'George Eliot',
        tags: ['time', 'happiness', 'wisdom']
    },
    {
        text: 'All wars are boyish, and are fought by boys.',
        author: 'Herman Melville',
        tags: ['war', 'politics']
    },
    {
        text: 'All great art is the work of the whole living creature, body and soul, and chiefly of the soul.',
        author: 'John Ruskin',
        tags: ['art', 'soul']
    },
    {
        text: 'I believe a leaf of grass is no less than the journey-work of the stars.',
        author: 'Walt Whitman',
        tags: ['spirituality']
    },
    {
        text: 'Dandyism is the last spark of heroism amid decadence.',
        author: 'Charles Baudelaire',
        tags: ['art', 'personality']
    },
    {
        text: 'If you were to destroy in mankind the belief in immortality, not only love but every living force maintaining the life of the world would at once be dried up.',
        author: 'Fyodor Dostoyevsky',
        tags: ['time', 'love']
    },
    {
        text: 'Knowledge comes, but wisdom lingers.',
        author: 'Tennyson',
        tags: ['wisdom']
    },
    {
        text: 'The boundaries which divide Life from Death are at best shadowy and vague. Who shall say where the one ends, and where the other begins?',
        author: 'Edgar Allan Poe',
        tags: ['health', 'time', 'life']
    },
    {
        text: 'Accidents will occur in the best-regulated families.',
        author: 'Charles Dickens',
        tags: ['family']
    },
    {
        text: 'In historical events great men—so called—are but the labels that serve to give a name to an event, and like labels, they have the least possible connection with the event itself. Every action of theirs, that seems to them an act of their own free will, is in an historical sense not free at all, but in bondage to the whole course of previous history, and predestined from all eternity.',
        author: 'Leo Tolstoy',
        tags: ['history', 'time']
    },
    {
        text: `There's two tings I've got a right to: death or liberty.`,
        author: 'Harriet Tubman',
        tags: ['morality', 'freedom']
    },
    {
        text: `For each ecstatic instant\nWe must an anguish pay\nIn keen and quivering ratio\nTo the ecstasy.`,
        author: 'Emily Dickinson',
        tags: ['happiness', 'time']
    },
    {
        text: `Women have been called queens a long time, but the kingdom given them isn't worth ruling.`,
        author: 'Louisa May Alcott',
        tags: ['politics', 'gender']
    },
    {
        text: 'Life is the art of drawing sufficient conclusions from insufficient premises.',
        author: 'Samuel Butler',
        tags: ['art', 'life', 'logic']
    },
    {
        text: 'Training is everything. The peach was once a bitter almond; cauliflower is nothing but cabbage with a college education.',
        author: 'Mark Twain',
        tags: ['wisdom', 'practice']
    },
    {
        text: 'The idea does not belong to the soul; it is the soul that belongs to the idea.',
        author: 'Charles Sanders Peirce',
        tags: ['spirituality', 'wisdom']
    },
    {
        text: 'A work of art is a corner of creation seen through a temperament.',
        author: 'Émile Zola',
        tags: ['art', 'personality']
    },
    {
        text: 'We are spinning our own fates, good or evil, and never to be undone. Every smallest stroke of virture or of vice leaves its never so little scar. Nothing we ever do is, in strict scientific literalness, wiped out.',
        author: 'William James',
        tags: ['time', 'personality', 'morality']
    },
    {
        text: 'It is not the strength but the duration of great sentiments that makes great men.',
        author: 'Friedrich Nietzsche',
        tags: ['time', 'personality']
    },
    {
        text: 'To doubt everything and to believe everything are two equally convenient solutions; each saves us from thinking.',
        author: 'Jules Henri Poincaré',
        tags: ['logic']
    },
    {
        text: 'Men have gained control over the forces of nature to such an extent that with their help they could have no difficulty in exterminating one another to the last man. They know this, and hence comes a large part of their current unrest, their unhappiness and their mood of anxiety.',
        author: 'Sigmund Freud',
        tags: ['anxiety', 'fear']
    },
    {
        text: 'As long as war is regarded as wicked, it will always have its fascination. When it is looked upon as vulgar, it will cease to be popular.',
        author: 'Oscar Wilde',
        tags: ['war']
    },
    {
        text: `Perhaps it is better to wake up after all, even to suffer, rather than to remain a dupe to illusion all one's life.`,
        author: 'Kate Chopin',
        tags: ['personality', 'wisdom', 'life']
    },
]

export default quotes
