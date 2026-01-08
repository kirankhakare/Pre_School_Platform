import { useState, useEffect } from "react";
import { Upload, Trash2 } from "lucide-react";
import axios from "axios";

function GalleryManagement() {

  const [photos, setPhotos] = useState([]);

  const API = "http://localhost:5000/api/gallery";


  // Fetch Photos
  const fetchPhotos = async () => {
    try {

      const res = await axios.get(`${API}/all`);
      setPhotos(res.data.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);



  // Upload Photos
  const handleUpload = async (e) => {

    const files = Array.from(e.target.files);

    try {

      for (let file of files) {

        const imageUrl = URL.createObjectURL(file);

        await axios.post(`${API}/upload`, {
          imageUrl
        });

      }

      fetchPhotos();

    } catch (error) {
      console.error(error);
    }

  };



  // Delete Photo
  const deletePhoto = async (id) => {

    try {

      await axios.delete(`${API}/delete/${id}`);
      fetchPhotos();

    } catch (error) {
      console.error(error);
    }

  };



  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-sky-900 mb-6">
        Gallery Management
      </h1>

      {/* Upload Section */}

      <div className="bg-white shadow rounded-xl p-4 mb-6">

        <label className="flex items-center gap-2 bg-sky-700 text-white px-4 py-2 rounded w-fit cursor-pointer">

          <Upload size={18} />
          Upload Photos

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />

        </label>

      </div>


      {/* Gallery Grid */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {photos.length === 0 && (
          <p className="text-gray-500">
            No photos uploaded yet
          </p>
        )}

        {photos.map((photo) => (

          <div
            key={photo._id}
            className="relative bg-white rounded-lg shadow overflow-hidden"
          >

            <img
              src={photo.imageUrl}
              alt="gallery"
              className="w-full h-40 object-cover"
            />

            <button
              onClick={() => deletePhoto(photo._id)}
              className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded"
            >
              <Trash2 size={16} />
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default GalleryManagement;