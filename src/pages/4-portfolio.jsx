import './../pages-styles/4-portfolio.css'
import Card from '../components/3-portfolio-card'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

function Portfolio(){
    const cardData =[
        {
            IS:'src/images/clinic.png',
            IN:'clinic website',
            T:'clinic website',
            ST:'website for files dilevring',
            key:'unique'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique1'
        },
        {
            IS:'src/images/chess brand.jpg',
            IN:'club brand',
            T:'club branding',
            ST:'designing a club brand',
            key:'unique2'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique3'
        }
    ]
    const cardData1 =[
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique1'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique2'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique3'
        }
    ]
    const cardData2 =[
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique1'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique2'
        },
        {
            IS:'src/images/coming soon.jpg',
            IN:'test',
            T:'creative agency',
            ST:'full branding website/app',
            key:'unique3'
        }
    ]
    const [tab,setTab] =useState(cardData);
    function changeTabs(id){
        if(id == 'all'){
            setTab(cardData);
        }else{
            if(id == 'dev'){
                setTab(cardData1);
            }else{
                setTab(cardData2)
            }
        }
    }
    const {ref: title, inView: isTitleVisible} = useInView();
    const {ref: header, inView: isHeaderVisible} = useInView()
    return(
        <>
            <section className="portfolio" id='portfolio'>
                <p ref={title} className={`portfolio-title ${isTitleVisible ? "portfolio-title1" :""}`}>portfolio</p>
                <header ref={header} className={`portfolio-header ${isHeaderVisible ? "portfolio-header1" :""}`}>
                    <p className="portfolio-sub-title1">our project</p>
                    <p className="portfolio-sub-title2">some of our finest work</p>
                    <div className="portfoio-tabs-buttons-container">
                        <button className="portfoio-tabs-buttons" id='all' 
                        onClick={()=>{changeTabs('all')}}>all works</button>
                        <button className="portfoio-tabs-buttons" id='dev' 
                        onClick={()=>{changeTabs('dev')}}>app/web</button>
                        <button className="portfoio-tabs-buttons" id='design' 
                        onClick={()=>{changeTabs('design')}}>design</button>
                    </div>
                </header>
                <div className="portfolio-work-container">
                    {
                        tab.map((e)=>(
                            <Card imageSource={e.IS} imageName={e.IN}
                            title={e.T} subTitle={e.ST} key={e.key}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Portfolio