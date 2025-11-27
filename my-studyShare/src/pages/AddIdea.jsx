// import React, { useState } from "react";
// import "../styles/addidea.css";

// const AddIdea = () => {
//   const [idea, setIdea] = useState({
//     title: "",
//     description: "",
//     tags: "",
//     category: "",
//   });

//   const handleChange = (e) => {
//     setIdea({ ...idea, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Idea Submitted:", idea);
//     alert("Idea Added Successfully!");
//   };

//   return (
//     <div className="add-idea-container">
//       <div className="add-idea-card">
//         <h2>Add New Idea 💡</h2>

//         <form onSubmit={handleSubmit}>
//           <label>Idea Title</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="Enter your idea title"
//             onChange={handleChange}
//             required
//           />

//           <label>Description</label>
//           <textarea
//             name="description"
//             placeholder="Describe your idea in detail"
//             rows="4"
//             onChange={handleChange}
//             required
//           ></textarea>

//           <label>Tags</label>
//           <input
//             type="text"
//             name="tags"
//             placeholder="react, study, students"
//             onChange={handleChange}
//           />

//           <label>Category</label>
//           <select name="category" onChange={handleChange} required>
//             <option value="">Select Category</option>
//             <option value="Web Development">Web Development</option>
//             <option value="Study Tips">Study Tips</option>
//             <option value="Productivity">Productivity</option>
//             <option value="Learning Tools">Learning Tools</option>
//           </select>

//           <button type="submit" className="submit-btn">
//             Add Idea
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddIdea;

          

import React, { useState } from "react";
import "../styles/addidea.css";

const AddIdea = ({ onAddIdea }) => {
  const [idea, setIdea] = useState({
    title: "",
    description: "",
    tags: "",
    category: ""
  });

  const handleChange = (e) => {
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIdea = {
      ...idea,
      tags: idea.tags.split(",").map(tag => tag.trim())
    };
    onAddIdea(newIdea);
    setIdea({ title: "", description: "", tags: "", category: "" }); // reset form
  };

  return (
    <div className="add-idea-container">
      <div className="add-idea-card">
        <h2>Add New Idea 💡</h2>
        <form onSubmit={handleSubmit}>
          <label>Idea Title</label>
          <input
            type="text"
            name="title"
            value={idea.title}
            placeholder="Enter your idea title"
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={idea.description}
            placeholder="Describe your idea in detail"
            rows="4"
            onChange={handleChange}
            required
          />

          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={idea.tags}
            placeholder="react, study, students"
            onChange={handleChange}
          />

          <label>Category</label>
          <select
            name="category"
            value={idea.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Study Tips">Study Tips</option>
            <option value="Productivity">Productivity</option>
            <option value="Learning Tools">Learning Tools</option>
          </select>

          <button type="submit" className="submit-btn">
            Add Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIdea;
