import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "../constants"
import gsap from "gsap"
import { pauseImg, playImg, replayImg } from "../utils"
import { useGSAP } from "@gsap/react"

const VideoCarousel = () => {
  //@ts-ignore
const handleProcess = (type, i) => {
  switch (type) {
    case 'video-end':
      setVideo((pre) => ({...pre , isEnd: true,
        videoId: i + 1
      }))
      break;

    case 'video-last':
      setVideo((pre) => ({...pre , isLastVideo: true,
      }))
      break;

    case 'video-last':
      setVideo((pre) => ({...pre , isLastVideo: false,
        videoId: 0
      }))
      break;

    case 'play':
      setVideo((pre) => ({...pre , isPlaying: !pre.isPlaying,
      }))
      break;
  
    default:
      return video;
  }
}


  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])

  const [video , setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  })

  const [loadedData, setloadedData] = useState([])

  const {isEnd, startPlay, videoId, isLastVideo, isPlaying} = video

  useGSAP(() => {
    gsap.to("#video" , {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none node none"
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true
        }))
      }
    })
  } , [isEnd, videoId])

  useEffect(() => {
    if(loadedData.length) {
      if(!isPlaying) {
        //@ts-ignore
        videoRef.current[videoId].pause()
      } else{
        //@ts-ignore
        videoRef.current[videoId].play()
      }
    }
  } , [startPlay, videoId, isPlaying, loadedData])
//@ts-ignore
  const handleLoadedMetaData = (i, e) => setloadedData((pre) => [...pre,e])

  useEffect(() => {
    let currentProgress = 0
    const span = videoSpanRef.current

    if(span) {
      const anim = gsap.to(span[videoId] , {
        onUpdate: () => {
          //@ts-ignore
          const progress = Math.ceil(anim.progress * 100)

          if(progress != currentProgress) {
            //@ts-ignore
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId] , {
              width: window.innerWidth < 760
              ? '10vw' 
              : window.innerWidth < 1200
              ? '10vw' 
              : '4vw'
            })

            gsap.to(span[videoId] , {
              width: `${currentProgress}%`,
            })
          }
        },

        onComplete: () => {
          if(isPlaying) {
            gsap.to(videoDivRef.current[videoId] , {
              width: '12px'
            })
            gsap.to(span[videoId] , {
              backgroundColor: '#afafaf'
            })
          }
        }
      })
      if(videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(videoRef.current[videoId] / 
          hightlightsSlides[videoId].videoDuration
        )
      }

      if(isPlaying) {
        gsap.ticker.add(animUpdate)
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }
  } , [startPlay, videoId])

  return (
    <>
      <div className="flex items-center">
      {hightlightsSlides.map((list, i) => (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">
          <div className="video-carousel_container">
            <div className="w-full h-full rounded-3xl overflow-hidden flex-center bg-black">
            <video
            id="video"
            playsInline={true}
            muted
            preload="auto"
            //@ts-ignore
            ref={(el) => (videoRef.current[i] = 
            el)}
            onPlay={() => {
              setVideo((prevVideo) => ({
                ...prevVideo, isPlaying: true
              }))
            }}
            onLoadedMetadata={(e) => {
              handleLoadedMetaData(i,e)
            }}
            >
              <source src={list.video} type="video/mp4"/>
            </video>
            </div>
            <div className="absolute top-12 left-[5%] z-10">
              {list.textLists.map((text) => (
                <p key={text} className="md:text-2xl text-xl font-medium">
                  {text}
                </p>
              ))}
            </div>

          </div>

        </div>
      )
      )}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 background-blur rounded-full">
          {videoRef.current.map((_ , i) => (
            <span 
            key={i}
            className="w-3 h-3 mx-2 bg-gray-200 relative cursor-pointer rounded-full"
            //@ts-ignore
            ref={(el) => (videoDivRef.current[i] = el)}
            >
            <span 
            className="absolute h-full w-full rounded-full"
            //@ts-ignore
             ref={(el) => (videoSpanRef.current[i] = el)}/>
            </span>
          )
          )}

        </div>

        <button className="control-btn">
          <img 
          src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
          alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
          //@ts-ignore
          onClick={isLastVideo ? () => handleProcess("video-reset") : !isPlaying ? () => handleProcess("play") : () =>  handleProcess("pause")}/>
        </button>

      </div>
    </>
    
  )
}

export default VideoCarousel
