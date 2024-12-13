import React, { useState } from 'react'
import { FaRegImage } from 'react-icons/fa6';
import { HiMiniPaperAirplane, HiXMark } from 'react-icons/hi2';

const FileInput1 = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage.type.startsWith('image/')) {
      setImage(selectedImage);
    } else {
      alert('Please upload an image file');
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };
  return (
    <>
      <form className="border-neutral-300 border-t p-2.5 flex flex-col gap-4 absolute bottom-0 left-0 w-full">
        {image && (
          <div className='bg-base-200 rounded p-1'>
            <div className="flex items-center gap-2">
              <div className='flex flex-1 line-clamp-1'>
                <img src={URL.createObjectURL(image)} alt="Conversation" className="max-h-16 max-w-16 rounded mr-3" />
                <span className="my-auto">{image.name}</span>
              </div>
              <button className="cursor-pointer px-3 py-2 my-auto transition-colors text-xl" onClick={handleRemoveImage}>
                <HiXMark />
              </button>
            </div>
          </div>
        )}

        <div className="rounded-full border-neutral-300 border px-1.5 py-1.5 flex-1">
          <div className="flex gap-4">
            {/* CUSTOM YOUR FILE INPUT INSIDE LABEL TAG */}
            <label>
              <div className="rounded-full bg-purple-500 text-white hover:bg-purple-800 px-3 py-3 cursor-pointer transition-colors">
                <FaRegImage className='text-xl' />
              </div>
              <input type="file" onChange={handleImageChange} hidden />
            </label>
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-transparent focus:outline-none flex-1"
            />
            <div className="cursor-pointer px-3 py-2 my-auto transition-colors">
              <HiMiniPaperAirplane className='text-2xl' />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default FileInput1