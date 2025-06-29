import React from 'react'
import MyCards from '../../components/Cards/MyCards'
import MyCarousel from '../../components/Carousel/MyCarousel'
import MyCopyright from '../../components/Copyright/MyCopyright'
import MyFooter from '../../components/Footer/MyFooter'

const Home = () => {
    return (
        <div>
            <MyCarousel title="SKIN FLOW" subtitle="Be Your Kind Of Beauty"/>
            <MyCards/>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default Home
