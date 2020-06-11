import React, { useState, useEffect } from "react"
import { Gallery } from "./BookingHistory.styles"
import { Image, CloudinaryContext } from "cloudinary-react"
import { fetchPhotos, openUploadWidget } from "./CloudinaryService"
import firebase from "../../../firebase"

export default ({ gallery }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    gallery && setImages(gallery)
  }, [gallery])

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "hezzie",
      tags: [tag, "anImage"],
      uploadPreset: "upload",
    }
    openUploadWidget(uploadOptions, async (error, photos) => {
      if (!error) {
        console.log(photos)
        if (photos.event === "success") {
          setImages([...images, { url: photos.info.public_id }])
          await firebase
            .firestore()
            .collection("client2db")
            .doc("cleaning")
            .update({
              gallery: [...images, { url: photos.info.public_id }],
            })
        }
      } else {
        console.log(error)
      }
    })
  }

  return (
    <CloudinaryContext cloudName="hezzie">
      <Gallery>
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <section>
          {images.map(i => (
            <div>
              <Image
                key={i.url}
                publicId={i.url}
                fetch-format="auto"
                quality="auto"
              />
            </div>
          ))}
        </section>
      </Gallery>
    </CloudinaryContext>
  )
}
