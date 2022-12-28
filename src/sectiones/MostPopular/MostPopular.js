import './MostPopular.css';


import {Card} from '../../components/index.js'
const MostPopular = () => {
  return (
  <>
    <div className='section-wrapper'>
      <div className='section-header'>
        <h4> Most Popular</h4>

      </div>
      <div className='most-popular-items'>
        <Card image='popular_01' title='Fortnite'   category='Sandbox'    rate='3.8'   download='2.3M'/>
        <Card image='popular_02' title='PubG'       category='Stream-X'   rate='4.8'   download='1.1M'/>
        <Card image='popular_03' title='Dota2'      category='Legendary'  rate='2.7'   download='5.3M'/>
        <Card image='popular_04' title='CS-Go'      category='Battle 5'   rate='3.9'   download='6.1M'/>
        <Card image='popular_01' title='Fortnite'   category='Sandbox'    rate='3.8'   download='2.3M'/>
        <Card image='popular_02' title='PubG'       category='Stream-X'   rate='4.8'   download='1.1M'/>
        <Card image='popular_03' title='Dota2'      category='Legendary'  rate='2.7'   download='5.3M'/>
        <Card image='popular_04' title='CS-Go'      category='Battle 5'   rate='3.9'   download='6.1M'/>
       
      </div>

    </div>
  </>
  )
}

export default MostPopular