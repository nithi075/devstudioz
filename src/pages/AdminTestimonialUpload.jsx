import { useState } from "react";
import axios from "axios";
import "./testimonialUpload.css";

export default function AdminTestimonialUpload() {
  const [clientName, setClientName] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) { setImage(file); setPreview(URL.createObjectURL(file)); }
  };

  const submitReview = async () => {
    if (!clientName.trim()) return alert("Enter client name");
    if (!review.trim()) return alert("Enter review");

    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("review", review);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/testimonials/add", formData);
      alert("Testimonial saved");
      setClientName(""); setReview(""); setImage(null); setPreview("");
      document.getElementById("testimonialInput").value = "";
    } catch (err) {
      alert(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="testimonial-upload">

      {/* Header */}
      <div className="testimonial-upload__header">
        <div className="testimonial-upload__icon">✦</div>
        <div>
          <div className="testimonial-upload__title">Add Testimonial</div>
          <div className="testimonial-upload__subtitle">Showcase client reviews</div>
        </div>
      </div>

      {/* Fields */}
      <div className="testimonial-upload__fields">

        <div className="testimonial-upload__field">
          <label className="testimonial-upload__label">Client name</label>
          <input
            className="testimonial-upload__input"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Priya & Arvind"
          />
        </div>

        <div className="testimonial-upload__field">
          <label className="testimonial-upload__label">Review</label>
          <textarea
            className="testimonial-upload__textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share what the client said…"
            rows={4}
          />
        </div>

        <div className="testimonial-upload__field">
          <label className="testimonial-upload__label">
            Client photo&nbsp;
            <span className="testimonial-upload__label-note">(optional)</span>
          </label>
          <label className="testimonial-upload__dropzone">
            <input
              id="testimonialInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <div className="testimonial-upload__dropzone-icon">👤</div>
            <div className="testimonial-upload__dropzone-label">Upload a photo</div>
            <div className="testimonial-upload__dropzone-hint">JPG, PNG — max 5 MB</div>
          </label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="testimonial-upload__preview"
            />
          )}
        </div>

        <button
          className="testimonial-upload__submit"
          onClick={submitReview}
          disabled={loading}
        >
          {loading ? "Saving…" : "Save Testimonial"}
        </button>

      </div>
    </div>
  );
}