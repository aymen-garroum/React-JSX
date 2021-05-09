import './Acceuil.css'
import image_m from './image-src.jpg'

function rendu(){
return(

<div className="title">

<h1 className="title_red">Aymen Garroum</h1>

<br/>

<img src="/image-public.png" style={{width:"20%"}} alt="No"/>

<br/>

<img src={image_m} style={{width:"20%"}} alt="No"/>

<br/>

<iframe width="320" height="240" src="https://www.youtube.com/embed/8B6jOUzBKYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

)
}

export default rendu