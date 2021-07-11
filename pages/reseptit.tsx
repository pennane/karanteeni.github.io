import React from 'react'
import recipes from '../data/recipes.json'
import Layout from '../components/layout/layout'
import Heading from '../components/layout/heading'

const Recipe = ({ caption, image, tag }: { caption: string; image: string; tag?: string }) => {
    let id = tag || 'customrecipe'

    return (
        <figure id={id} className="recipe">
            <img src={image} alt="" height="250" width="400" />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

const Reseptit = () => {
    return (
        <Layout title="Custom Reseptit" description="Karanteenin survivalissa käytettävät custom reseptit">
            <Heading heading="Custom reseptit" lead="Karanteenissa on omia reseptejä, wohoo." />
            {recipes &&
                recipes.map((recipe, i) => (
                    <Recipe
                        key={recipe.image + '-' + i}
                        image={'/images/recipes/' + recipe.image}
                        caption={recipe.caption}
                        tag={recipe.image.split('.')[0]}
                    />
                ))}
        </Layout>
    )
}

export default Reseptit
