import React, { useEffect, useState } from "react"
import axios from "axios"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./index.css"
import ArrowForward from '@mui/icons-material/ArrowForwardIos'
import ArrowBack from '@mui/icons-material/ArrowBackIos'

export const BannerSlider = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    axios.get("https://www.tecmm.edu.mx/apiCms/banners") // Reemplaza con tu endpoint real si cambia
      .then((res) => {
        setBanners(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.error("Error al obtener banners:", err)
      })
  }, [])

const [sliderRef, slider] = useKeenSlider(
  banners.length > 0
    ? {
        loop: true,
      }
    : null,
  banners.length > 0
    ? [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 5000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    : []
)


  return (
    <>
      <button onClick={() => slider.current?.next?.()} className="carouselControlButtons right-btn">
        <ArrowForward fontSize='large' />
      </button>

      <button onClick={() => slider.current?.prev?.()} className="carouselControlButtons left-btn">
        <ArrowBack fontSize='large' />
      </button>

      <div ref={sliderRef} className="keen-slider relative">
        {banners.map((banner) => (
          <div key={banner.idBanners} className="keen-slider__slide number-slide">
            <img
              src={banner.fotografiaPrincipal}
              alt={banner.titulo}
              className="imageBanner"
            />
            <div className="overlay-bottom">
              <p>{banner.titulo?.replace(/\n/g, ' ')}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
