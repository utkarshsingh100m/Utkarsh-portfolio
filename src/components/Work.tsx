import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: "01",
    name: "AI Chat Assistant",
    category: "Fullstack + AI",
    tools: "React, Node.js, OpenAI API, MongoDB",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    id: "02",
    name: "Smart Resume Builder",
    category: "AI Web App",
    tools: "Next.js, Python, FastAPI, LangChain",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    id: "03",
    name: "E-Commerce Platform",
    category: "Fullstack",
    tools: "React, Express.js, MySQL, Stripe",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    id: "04",
    name: "Image Recognition App",
    category: "Computer Vision",
    tools: "Python, TensorFlow, OpenCV, React",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    id: "05",
    name: "RAG Document Q&A",
    category: "AI / LLM",
    tools: "LangChain, Pinecone, OpenAI, FastAPI",
    image: "/images/placeholder.webp",
    link: "#",
  },
  {
    id: "06",
    name: "Portfolio Website",
    category: "Creative Dev",
    tools: "React, Three.js, GSAP, TypeScript",
    image: "/images/placeholder.webp",
    link: "#",
  },
];

const Work = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [projectLink, setProjectLink] = useState("");

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; Features</h4>
                <p>{project.tools}</p>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <WorkImage image={project.image} alt={project.name} />
              </a>
            </div>
          ))}
        </div>

        {/* Admin Upload Panel */}
        <button
          className="admin-upload-btn"
          onClick={() => setShowUpload((prev) => !prev)}
          title="Admin: Upload Project"
        >
          ⚙ Admin
        </button>

        {showUpload && (
          <div className="admin-panel">
            <p style={{ margin: "0 0 10px", fontWeight: 500 }}>
              Upload Project Image
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setUploadedFile(e.target.files ? e.target.files[0] : null)
              }
            />
            {uploadedFile && (
              <p style={{ fontSize: "12px", color: "#aaa", margin: "6px 0 0" }}>
                Selected: {uploadedFile.name}
              </p>
            )}
            <input
              type="text"
              placeholder="Project link / URL"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "6px 10px",
                background: "#1a1a1a",
                border: "1px solid #444",
                color: "#fff",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
            <button
              style={{
                marginTop: "10px",
                padding: "6px 16px",
                background: "var(--accentColor, #7f40ff)",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() =>
                alert("Saved! Update projects array with this link: " + projectLink)
              }
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
