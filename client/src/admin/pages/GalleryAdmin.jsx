import { useState } from "react";
import { Upload, Trash2 } from "lucide-react";

function GalleryManagement() {

  const [photos, setPhotos] = useState([]);

  const handleUpload = (e) => {

    const files = Array.from(e.target.files);

    const imageURLs = files.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file)
    }));

    setPhotos([...photos, ...imageURLs]);
  };

  const deletePhoto = (id) => {
    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
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
            key={photo.id}
            className="relative bg-white rounded-lg shadow overflow-hidden"
          >

            <img
              src={photo.url}
              alt="gallery"
              className="w-full h-40 object-cover"
            />

            <button
              onClick={() => deletePhoto(photo.id)}
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