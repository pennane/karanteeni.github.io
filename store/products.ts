import { Product, ProductType } from './types'
type DataProduct = Omit<Product, 'id'>

const dataProducts: DataProduct[] = [
    {
        name: '5h peliaikaa',
        description: 'Nostaa käyttäjän peliaikaa 5 tunnilla tai Eloton tasoisen suoraan Raihnaaksi.',
        image: 'pa5h.png',
        price: 100,
        type: ProductType.PLAYTIME,
        playtime: 1000 * 60 * 60 * 5
    },
    {
        name: '5d peliaikaa',
        description: 'Nostaa käyttäjän peliaikaa 5 päivällä 5 tai Eloton tasoisen suoraan Parantuvaksi.',
        image: 'pa5d.png',
        price: 600,
        type: ProductType.PLAYTIME,
        playtime: 1000 * 60 * 60 * 5 * 24
    },
    {
        name: '10d peliaikaa',
        description: 'Nostaa käyttäjän peliaikaa 10 päivällä tai Eloton tasoisen suoraan Immuuniksi, ja antaa /fly.',
        image: 'pa10d.png',
        price: 1000,
        type: ProductType.PLAYTIME,
        playtime: 1000 * 60 * 60 * 10 * 24
    },
    {
        name: '100d peliaikaa',
        description: 'Nostaa käyttäjän peliaikaa 100 päivällä tai Kuolematon speedrun',
        image: 'pa100d.png',
        price: 8000,
        type: ProductType.PLAYTIME,
        playtime: 1000 * 60 * 60 * 100 * 24
    },
    {
        name: 'Iita Rintamerkki',
        description: 'Iita:n skinillä varustettu rintamerkki',
        image: 'button_iita.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Jafarin Rintamerkki',
        description: 'Jafarin:n skinillä varustettu rintamerkki',
        image: 'button_jafarin.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Jenniii Rintamerkki',
        description: 'Jenniii:n skinillä varustettu rintamerkki',
        image: 'button_jenniii.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Jokunen Rintamerkki',
        description: 'Jokusen skinillä varustettu rintamerkki',
        image: 'button_jokunen.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Jome Rintamerkki',
        description: 'Jome:n skinillä varustettu rintamerkki',
        image: 'button_jome.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Karanteeni Rintamerkki',
        description: 'Karanteenin logolla varustettu rintamerkki',
        image: 'button_karanteeni.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Lesser rintamerkki',
        description: 'Lesserin skinillä varustettu rintamerkki',
        image: 'button_lesser.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Lewe Rintamerkki',
        description: 'Lewen skinillä varustettu rintamerkki',
        image: 'button_lewe.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Lounii Rintamerkki',
        description: 'Louniin skinillä varustettu rintamerkki',
        image: 'button_lounii.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Manuzki Rintamerkki',
        description: 'Manuzkin skinillä varustettu rintamerkki',
        image: 'button_manuzki.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Nuubles Rintamerkki',
        description: 'Nuublesin skinillä varustettu rintamerkki',
        image: 'button_nuubles.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Oonaa Rintamerkki',
        description: 'Oonan skinillä varustettu rintamerkki',
        image: 'button_oona.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Orianteri Rintamerkki',
        description: 'Orianterin skinillä varustettu rintamerkki',
        image: 'button_orianteri.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Pregauris Rintamerkki',
        description: 'Pren skinillä varustettu rintamerkki',
        image: 'button_pregauris.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Retu Rintamerkki',
        description: 'Retun skinillä varustettu rintamerkki',
        image: 'button_retu.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Susse Rintamerkki',
        description: 'Sussen skinillä varustettu rintamerkki',
        image: 'button_susse.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Viherkukka Rintamerkki',
        description: 'Viherin skinillä varustettu rintamerkki',
        image: 'button_viheri.png',
        price: 1200,
        type: ProductType.BUTTON
    },
    {
        name: 'Tuplachestillinen timanttia',
        description: 'Tuplachesti täynnä timanttia. Kotiinkuljetuksella',
        image: 'diamond.png',
        price: 9000,
        type: ProductType.ITEM
    },
    {
        name: 'Sikaa säkissä',
        description:
            'Tuplachesti täynnä täysin satunnaisia stäkkejä tuotteita. Voit saada täysin mitä tahansa! Kotiinkuljetuksella',
        image: 'random.jpg',
        price: 1900,
        type: ProductType.ITEM
    },
    {
        name: 'Jome esiliina',
        description: 'Jomen skinillä varustettu esiliina. Kelpaa vaikka lahjaksi äidille.',
        image: 'esiliina_jome.PNG',
        price: 1800,
        type: ProductType.OTHER
    },
    {
        name: 'Huppari',
        description: 'Tyylikäs karanteenin logolla varustettu huppari. Koko valitaan maksun yhteydessä',
        image: 'Huppari.PNG',
        price: 2700,
        type: ProductType.OTHER
    },
    {
        name: 'Karanteeni muki',
        description: 'Punainen Karanteeni kahvikuppi.',
        image: 'muki_punainen.PNG',
        price: 2000,
        type: ProductType.OTHER
    },
    {
        name: 'Ylläpito jumppakassi',
        description: 'Jumppakassi, jossa seikkailee koko Karanteenin ylläpito. ',
        image: 'jumppakassi.PNG',
        price: 15000,
        type: ProductType.OTHER
    },
    {
        name: 'Iita Jääkaappimagneetti',
        description: 'Iita:n skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_iita.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Jafarin Jääkaappimagneetti',
        description: 'Jafarin:n skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_jafarin.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Jenniii Jääkaappimagneetti',
        description: 'Jenniii:n skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_jenniii.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Jokunen Jääkaappimagneetti',
        description: 'Jokusen skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_jokunen.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Jome Jääkaappimagneetti',
        description: 'Jome:n skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_jome.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Karanteeni Jääkaappimagneetti',
        description: 'Karanteenin logolla varustettu jääkaappimagneetti',
        image: 'magneetti_karanteeni.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Lesser jääkaappimagneetti',
        description: 'Lesserin skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_lesser.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Lewe Jääkaappimagneetti',
        description: 'Lewen skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_lewe.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Lounii Jääkaappimagneetti',
        description: 'Louniin skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_lounii.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Manuzki Jääkaappimagneetti',
        description: 'Manuzkin skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_manuzki.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Nuubles Jääkaappimagneetti',
        description: 'Nuublesin skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_nuubles.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Oonaa Jääkaappimagneetti',
        description: 'Oonan skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_oona.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Orianteri Jääkaappimagneetti',
        description: 'Orianterin skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_orianteri.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Pregauris Jääkaappimagneetti',
        description: 'Pren skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_pregauris.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Retu Jääkaappimagneetti',
        description: 'Retun skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_retu.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Susse Jääkaappimagneetti',
        description: 'Sussen skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_susse.png',
        price: 1200,
        type: ProductType.MAGNET
    },
    {
        name: 'Viherkukka Jääkaappimagneetti',
        description: 'Viherin skinillä varustettu jääkaappimagneetti',
        image: 'magneetti_viheri.png',
        price: 1200,
        type: ProductType.MAGNET
    }
].sort(() => (Math.random() > 0.5 ? 1 : -1))

const products: Map<string, Product> = new Map()

for (const dataProduct of dataProducts) {
    const id = dataProduct.name.toLowerCase().replace(' ', '-')
    if (!id) throw new Error('Ran out of ids')
    products.set(id, { ...dataProduct, id, price: dataProduct.price - 1 })
}

const readOnlyProducts = products as ReadonlyMap<string, Product>

export { readOnlyProducts as products }
