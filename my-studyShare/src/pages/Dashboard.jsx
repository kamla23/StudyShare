import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import IdeaCard from "../components/IdeaCard";
import "../styles/dashboard.css";

const Dashboard = ({ onNavigate }) => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      user: "Kittu",
      title: "MERN Learning",
      desc: "I am learning React and making a project dashboard.",
      tags: ["React", "MERN"],
      likes: 3
    },
    {
      id: 2,
      user: "Student",
      title: "Study App Idea",
      desc: "An app for students to share ideas and collaborate.",
      tags: ["App", "Students"],
      likes: 1
    }
  ]);

  const handleLike = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };


  const handleDelete = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const handleEdit = (id) => {
    const newTitle = prompt("Enter new title:");
    if (!newTitle) return;

    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, title: newTitle } : idea
      )
    );
  };

 
  const handleComment = (id) => {
    const comment = prompt("Write your comment:");
    if (comment) {
      alert("Comment added: " + comment);
    }
  };

  return (
    <div className="dashboard-container">

      <div className="left-section">
        <Sidebar onNavigate={onNavigate} />
      </div>

      <div className="center-section">
        {ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
            onLike={handleLike}
            onComment={handleComment}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div className="right-section">
        <h3>Trending Ideas</h3>
        <ul>
          <li>MERN Stack Ideas</li>
          <li>Study Collaboration App</li>
          <li>React Projects</li>
        </ul>

        <h3>Top Contributors</h3>
        <ul>
          <li>Kittu</li>
          <li>Rohan</li>
          <li>Aditi</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;


