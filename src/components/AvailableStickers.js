import musicDigital from './images/music digital.png';
import eko from './images/eko.png';
import loom from './images/loom.png';
import noCheers from './images/no cheers.png';
import sept from './images/sept.png';

const addIdToObjectsInArray = (ArrayOfObjects) => {
    for (let i = 0; i < ArrayOfObjects.length; i++) {
        ArrayOfObjects[i].id = i;
    }
    return ArrayOfObjects;
}

const stickers = [
    {
        name: 'music digital',
        price: 200,
        currency: 'N',
        image: musicDigital
    },
    {
        name: 'eko',
        price: 300,
        currency: 'N',
        image: eko
    },
    {
        name: 'loom',
        price: 200,
        currency: 'N',
        image: loom
    },
    {
        name: 'no cheers',
        price: 250,
        currency: 'N',
        image: noCheers
    },
    {
        name: 'sept',
        price: 300,
        currency: 'N',
        image: sept
    },
]

const Availablestickers = addIdToObjectsInArray(stickers);

export default Availablestickers;
