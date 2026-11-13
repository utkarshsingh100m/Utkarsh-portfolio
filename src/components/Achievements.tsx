import { useState } from "react";
import "./styles/Achievements.css";
import { MdArrowOutward } from "react-icons/md";

type Achievement = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image?: string;
};

const initialAchievements: Achievement[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Coursera / Meta",
    date: "2023",
    link: "#",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "Hackathon Winner",
    issuer: "College TechFest",
    date: "2024",
    link: "#",
  },
];

const Achievements = () => {
  const [achievements, setAchievements] =
    useState<Achievement[]>(initialAchievements);
  const [adminOpen, setAdminOpen] = useState(false);

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formIssuer, setFormIssuer] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formLink, setFormLink] = useState("");
  const [formImage, setFormImage] = useState<File | null>(null);

  const handleAdd = () => {
    if (!formTitle.trim()) return;
    const newItem: Achievement = {
      id: Date.now(),
      title: formTitle,
      issuer: formIssuer,
      date: formDate,
      link: formLink || "#",
      image: formImage ? URL.createObjectURL(formImage) : undefined,
    };
    setAchievements((prev) => [...prev, newItem]);
    setFormTitle("");
    setFormIssuer("");
    setFormDate("");
    setFormLink("");
    setFormImage(null);
  };

  const handleRemove = (id: number) => {
    setAchievements((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <section className="achievements-section section-container" id="achievements">
      <h2>
        My <span>Achievements</span>
      </h2>

      <div className="achievement-grid">
        {achievements.map((item) => (
          <div className="achievement-card" key={item.id}>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="achievement-img"
              />
            )}
            <div className="achievement-card-body">
              <h4>{item.title}</h4>
              <h5>{item.issuer}</h5>
              <p>{item.date}</p>
            </div>
            <div className="achievement-card-actions">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
                aria-label="Open link"
              >
                <MdArrowOutward />
              </a>
              {adminOpen && (
                <button
                  className="achievement-remove"
                  onClick={() => handleRemove(item.id)}
                  aria-label="Remove"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Admin toggle button */}
      <button
        className="admin-toggle-btn"
        onClick={() => setAdminOpen((prev) => !prev)}
        title="Toggle Admin Panel"
      >
        ⚙
      </button>

      {/* Admin panel */}
      {adminOpen && (
        <div className="admin-panel achievements-admin-panel">
          <p className="admin-panel-title">Add Achievement</p>
          <input
            type="text"
            placeholder="Title"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="admin-input"
          />
          <input
            type="text"
            placeholder="Issuer"
            value={formIssuer}
            onChange={(e) => setFormIssuer(e.target.value)}
            className="admin-input"
          />
          <input
            type="text"
            placeholder="Date (e.g. 2024)"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
            className="admin-input"
          />
          <input
            type="text"
            placeholder="Link URL"
            value={formLink}
            onChange={(e) => setFormLink(e.target.value)}
            className="admin-input"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormImage(e.target.files ? e.target.files[0] : null)
            }
            className="admin-file-input"
          />
          {formImage && (
            <p className="admin-file-name">Selected: {formImage.name}</p>
          )}
          <button className="admin-save-btn" onClick={handleAdd}>
            Add Achievement
          </button>
        </div>
      )}
    </section>
  );
};

export default Achievements;
