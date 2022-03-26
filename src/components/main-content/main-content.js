import { useSelector } from 'react-redux'

import './main-content.css'

const MainContent = () => {
    const mainData = useSelector(state => state.data.chosen)
    const {status} = useSelector(state => state.data)
    
    const url = `https://robohash.org/${mainData.id}${mainData.id + 1}${mainData.id + 2}.png`

    if (status !== 'resolved') {
        return <h1>Loading...</h1>
    }

    return (
        <div className='main--content'>
            <div className='content--top--bar'>
                <span className='ticket--label'>TICKET NO. <p className='ticket--info'>{mainData.id}</p></span>
                <span className='ticket--label'><p className='ticket--info'>{new Date().toString()}</p></span>
            </div>

            <div className="main--content--block">
                <h2 className='content--title'>Owner</h2>
                <div className="inner--content">
                    <img className='content--img' alt ='' src={url}></img>
                    <label className='name'>
                        {mainData.name}
                        <p className='job'>{mainData.username}</p>
                    </label>
                </div>
            </div>

            <div className="main--content--block">
                <h2 className='content--title'>Details</h2>
                <div className="inner--content flex">
                    <label className='content--label'>
                        Email
                        <p className='info'>{mainData.email}</p>    
                    </label>
                    <label className='content--label'>
                        Adress
                        <p className='info'>City: {mainData.address.city}</p>  
                        <p className='info'>Street: {mainData.address.street}</p>  
                    </label>
                    <label className='content--label'>
                        Phone
                        <p className='info'>{mainData.phone}</p>    
                    </label>
                </div>
            </div>

            <div className="main--content--block">
                <h2 className='content--title'>Asset</h2>
                <div className="inner--content flex">
                    <label className='content--label'>
                        Website
                        <p className='info'>{mainData.website}</p> 
                    </label>
                    <label className='content--label'>
                        Company
                        <p className='info'>{mainData.company.name}</p> 
                    </label>
                    <label className='content--label'>
                        Description
                        <p className='info'>{mainData.company.catchPhrase}</p>   
                    </label>
                </div>
            </div>

        </div>
    );
}
 
export default MainContent;