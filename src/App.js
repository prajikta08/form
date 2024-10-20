import React, { useState } from 'react';
import './App.css'; 
import { useNavigate } from 'react-router-dom';

function App() {
  const [columns, setColumns] = useState(['', '', '']); // 3 initial columns
  const [file, setFile] = useState(null); // To store the file that is uploaded
  const [outputImage, setOutputImage] = useState(null); // To display the output image

  const navigate = useNavigate(); 




  const addColumn = () => {
    setColumns([...columns, '']);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    // Show the uploaded image in the output section (for demo purposes)
    const reader = new FileReader();
    reader.onload = (e) => {
      setOutputImage(e.target.result);
    };
    reader.readAsDataURL(uploadedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Uploaded File:', file);
    console.log('Columns:', columns);

    // Navigate to the output page, passing the outputImage as state
    navigate('/output', { state: { outputImage } });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ border: '2px solid blue', padding: '20px', width: '45%' }}>
        <h3>Upload File</h3>
        <input type="file" onChange={handleFileUpload} />
        
        {/* Column Inputs */}
        {columns.map((column, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Column ${index + 1}`}
              value={column}
              onChange={(e) => handleColumnChange(index, e.target.value)}
              style={{ display: 'block', margin: '10px 0', width: '100%' }}
            />
          </div>
        ))}

        {/* Add more columns */}
        <button type="button" onClick={addColumn} style={{ marginBottom: '10px' }}>
          + Add more
        </button>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
