import { useState } from "react";
import interestsData from "../data/interestsData";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    experience: "",
    interests: [],
    projects: [{ title: "", link: "" }]
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox selections for interests
  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  // Handle project changes
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  // Add new project input field
  const addProject = () => {
    setFormData({ ...formData, projects: [...formData.projects, { title: "", link: "" }] });
  };

  // Handle form submission (You can later integrate with backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="w-full p-2 mb-2 bg-gray-700 rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 bg-gray-700 rounded" onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact" className="w-full p-2 mb-2 bg-gray-700 rounded" onChange={handleChange} required />
          
          {/* Experience Dropdown */}
          <select name="experience" className="w-full p-2 mb-2 bg-gray-700 rounded" onChange={handleChange}>
            <option value="">Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Interests Selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Interests:</label>
            <div className="grid grid-cols-2 gap-2">
              {interestsData.map((interest, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Projects Input */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Projects:</label>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-2">
                <input type="text" placeholder="Project Title" className="w-full p-2 mb-1 bg-gray-700 rounded" value={project.title} onChange={(e) => handleProjectChange(index, "title", e.target.value)} />
                <input type="url" placeholder="Project Link" className="w-full p-2 mb-1 bg-gray-700 rounded" value={project.link} onChange={(e) => handleProjectChange(index, "link", e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={addProject} className="text-blue-400 underline">+ Add Another Project</button>
          </div>

          <button type="submit" className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
