import React from 'react'
import Heroslider from './hero-slider'
import Button from '../ui/button'
import Website from '../website'

function Home() {
    return (
        <Website>
            <section className='relative'>
                <h1 className='sr-only'>Fullstoks, Welcome</h1>
                <Heroslider />
                <Button size='lg' type='submit'>Kamran</Button>
            </section>
        </Website>
    )
}

export default Home
