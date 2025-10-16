"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

const ProductImages = ({ images, isNew, isDiscount }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="product_img relative flex items-center justify-center w-[900px] h-[500px] border border-[#F2F2F2] py-[18px] rounded-[7px]">
      <Image
        src={selectedImage}
        alt="صورة المنتج"
        width={310}
        height={310}
        quality={100}
        className="w-[310px] h-[310px] rounded-[12px] object-cover cursor-pointer"
        onClick={() => {
          setPhotoIndex(images.indexOf(selectedImage));
          setIsOpen(true);
        }}
      />

      <div className="space-x-16">
        {isNew && (
        <div className="absolute top-3 left-5 bg-[#56B53F] text-white text-sm font-bold w-[61px] h-[32px] flex items-center justify-center rounded-[8px]">
          جديد
        </div>
      )}

      {isDiscount &&
        (Number(isDiscount) ? (
          <div className="absolute top-3 left-5 bg-[#f97316] text-white text-sm font-bold w-[50px] h-[33px] flex items-center justify-center rounded-[8px]">
            {isDiscount}%
          </div>
        ) : (
          ""
        ))}
      </div>

      <div className="flex items-center gap-2 absolute bottom-8">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(img)}
            className={`bg-white w-[78px] h-[78px] flex items-center justify-center border px-4 py-2 rounded-[7px] cursor-pointer transition ${
              selectedImage === img ? "border-[#26B356]" : "border-[#DCDCDC]"
            }`}
          >
            <Image src={img} width={78} height={78} quality={100} alt="thumb" />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.85)" } }}
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((img) => ({ src: img }))}
        />
      )}
    </div>
  );
};

export default ProductImages;
