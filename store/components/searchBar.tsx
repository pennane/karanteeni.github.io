import { GetStaticProps } from 'next'
import { useState } from 'react'
import { products } from '../products'
import style from '../store.module.css'
import { Product } from '../types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const productsArray = [...products.values()]

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState<Product[]>([])
    const [focus, setFocus] = useState(false)
    const router = useRouter()

    function performSearch() {
        setResults(
            productsArray.filter(
                (p) => p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)
            )
        )
    }

    return (
        <div
            className={style['search-bar']}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 200)}
        >
            <input
                onClick={() => setFocus(true)}
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                    performSearch()
                }}
            ></input>
            <button onClick={performSearch}>hae</button>
            {focus && search.length > 2 && results.length > 0 && (
                <div className={style['search-results']}>
                    {results.map((p) => (
                        <a
                            key={p.id}
                            onClick={(e) => {
                                e.preventDefault()
                                setSearch('')
                                router.push('/kauppa/tuotteet/' + p.type + '/' + p.id)
                            }}
                        >
                            {p.name}
                        </a>
                    ))}
                </div>
            )}
            {focus && search.length > 2 && results.length === 0 && (
                <div className={style['search-results']}>
                    <span>ei löytöjä</span>
                </div>
            )}
        </div>
    )
}
export default SearchBar
