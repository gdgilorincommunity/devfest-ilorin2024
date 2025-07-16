import React, { useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import Image from "next/image";
import UploaderIcon from "@public/upload.png";
import { Button } from "@chakra-ui/react";

interface CropImageProps {
  onCroppedImage: (croppedImage: string) => void;
}

const CropImage: React.FC<CropImageProps> = ({ onCroppedImage }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [hideCropper, setHideCropper] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string); // Set new image
        setHideCropper(false); // Ensure cropper shows again
        setImgUrl(null); // Reset previous cropped image
      };
      reader.readAsDataURL(file);
    }
  };

  const onCrop = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current?.cropper;
      if (typeof cropperRef.current?.cropper !== "undefined") {
        const resultImage = cropper.getCroppedCanvas().toDataURL();
        setImgUrl(resultImage as string);
      }
    }
  };

  const useCroppedImage = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current?.cropper;
      if (typeof cropperRef.current?.cropper !== "undefined") {
        const resultImage = cropper.getCroppedCanvas().toDataURL();
        onCroppedImage(resultImage as string);
      }
    }

    setHideCropper(!hideCropper);
  };

  return (
    <div>
      <label htmlFor="photo" className="text-[#111827] font-medium">
        Photo
      </label>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {image && !hideCropper && (
        <>
          <Cropper
            ref={cropperRef}
            src={image}
            className="h-[400px] w-full"
            aspectRatio={1}
            guides={true}
            crop={onCrop}
            responsive={true}
            checkOrientation={false}
            zoomable={false}
          />

          <Button
            onClick={useCroppedImage}
            borderRadius={30}
            py={8}
            my={6}
            className="!bg-primary-body !text-white hover:opacity-80 w-full"
          >
            Save cropped image
          </Button>
        </>
      )}

      <div
        onClick={handleClick}
        className="rounded-lg bg-[#fff] h-[250px] p-1 cursor-pointer"
      >
        <div className="border-2 border-dashed rounded-lg p-1 h-full flex justify-center items-center">
          {!imgUrl ? (
            <div className="flex flex-col gap-2 justify-center items-center">
              <Image src={UploaderIcon} alt="icon" width={35} height={35} />
              <div className="text-center">
                Drag and drop to upload or <br />
                <span className="text-[#34a853]">browse</span>
              </div>
            </div>
          ) : (
            <div>
              <Image
                src={imgUrl as string}
                width={150}
                height={150}
                alt="photo"
              />
              <div className="text-sm text-center mt-2 font-semibold">
                Change
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropImage;
