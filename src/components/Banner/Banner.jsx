import BannerCSS from "../Banner/Banner.module.css"

function Banner({src, title, alt}) {
  return (
    <section className={BannerCSS.banner}>
      <div className={BannerCSS.hero}>
          <img
            src={src}
            alt={alt}
            className={BannerCSS.img}
          />
          <h1 className={BannerCSS.title}>{title}</h1>
        
      </div>
    </section>
  )
}

export default Banner
