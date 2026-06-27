import { useState } from "react";
import axios from "axios";
import "./imageUpload.css";

export default function AdminImageUpload() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) { setImage(file); setPreview(URL.createObjectURL(file)); }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Enter image title");
    if (!category) return alert("Select a category");
    if (!image) return alert("Select a photo");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post("https://devz-backend.onrender.com/gallery/add", formData);
      alert(res.data.message || "Photo uploaded");
      setTitle(""); setCategory(""); setImage(null); setPreview("");
      document.getElementById("galleryInput").value = "";
    } catch (err) {
      alert(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-upload">

      {/* Header */}
      <div className="image-upload__header">
        <div className="image-upload__icon">✦</div>
        <div>
          <div className="image-upload__title">Gallery Upload</div>
          <div className="image-upload__subtitle">Add photos to your portfolio</div>
        </div>
      </div>

      {/* Fields */}
      <form className="image-upload__fields" onSubmit={uploadImage}>

        <div className="image-upload__field">
          <label className="image-upload__label">Title</label>
          <input
            className="image-upload__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Golden hour portraits"
          />
        </div>

        <div className="image-upload__field">
          <label className="image-upload__label">Category</label>
          <div className="image-upload__select-wrap">
            <select
              className="image-upload__select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option>Wedding</option>
              <option>Reception</option>
              <option>Pre Wedding</option>
              <option>Bride</option>
              <option>Baby</option>
              <option>Maternity</option>
            </select>
          </div>
        </div>

        <div className="image-upload__field">
          <label className="image-upload__label">Photo</label>
          <label className="image-upload__dropzone">
            <input
              id="galleryInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <div className="image-upload__dropzone-icon">✦</div>
            <div className="image-upload__dropzone-label">Click to browse</div>
            <div className="image-upload__dropzone-hint">JPG, PNG, WEBP — max 10 MB</div>
          </label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="image-upload__preview"
            />
          )}
        </div>

        <button
          type="submit"
          className="image-upload__submit"
          disabled={loading}
        >
          {loading ? "Uploading…" : "Upload Photo"}
        </button>

      </form>
    </div>
  );
}
