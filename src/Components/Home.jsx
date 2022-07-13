import { HNews } from "./Newsletter"

export const Home=()=>{
    return(
        <>
        <div style={{height:'300px',backgroundColor:"black"}} id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"500px",width:"300px",backgroundColor:"black"}} src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:"400px",width:"300px",backgroundColor:"black"}} src="https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:"400px",width:"300px",backgroundColor:"black"}} src="https://www.lenovo.com/medias/lenovo-laptop-ideapad-3i-15in-hero.png?context=bWFzdGVyfHJvb3R8Nzg5MTR8aW1hZ2UvcG5nfGgwZC9oN2MvMTE4MTQ4OTkxODc3NDIucG5nfDMyYzZlOTFjNjYzMmFlNWEzYzkzOTVlNGYxMmUzNDczOGFhNTY3OWY3MDgwNmMxODgyMjAzOGJhYjgyMzkxY2M" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  
</div>
<HNews/>
        </>
    )
}