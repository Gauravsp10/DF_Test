import React, { useState } from 'react';
import data from '../data.json';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import './Subcategory.css';

function SubcategoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState(data.Subcategory || []);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryImage, setNewCategoryImage] = useState('');
  const [newCategoryStatus, setNewCategoryStatus] = useState('active');
  const [newSubcategory, setNewSubcategory] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    setCategories(categories.filter(category => category !== categoryToDelete));
    setShowDeletePopup(false);
    setCategoryToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setCategoryToDelete(null);
  };

  const handleAddClick = () => {
    setShowAddPopup(true);
  };

  const confirmAdd = () => {
    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
      image: newCategoryImage,
      status: newCategoryStatus,
      subcategory: newSubcategory, // Add the subcategory field here
    };
    setCategories([...categories, newCategory]);
    setShowAddPopup(false);
    resetNewCategoryFields();
  };

  const handleEditClick = (category) => {
    setCategoryToEdit(category);
    setNewCategoryName(category.name);
    setNewCategoryImage(category.image);
    setNewCategoryStatus(category.status);
    setNewSubcategory(category.subcategory); // Set the subcategory for editing
    setShowEditPopup(true);
  };

  const confirmEdit = () => {
    const updatedCategory = {
      ...categoryToEdit,
      name: newCategoryName,
      image: newCategoryImage,
      status: newCategoryStatus,
      subcategory: newSubcategory, // Update the subcategory
    };
    setCategories(categories.map(category =>
      category.id === updatedCategory.id ? updatedCategory : category
    ));
    setShowEditPopup(false);
    resetNewCategoryFields();
  };

  const resetNewCategoryFields = () => {
    setNewCategoryName('');
    setNewCategoryImage('');
    setNewCategoryStatus('active');
    setNewSubcategory(''); // Reset the subcategory field
  };

  return (
    <div className="category-page">
      <div className="header-section">
        <h2>SubCategory</h2>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search Categories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button className="add-button" onClick={handleAddClick}>Add New</button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Subcategory</th> {/* New subcategory column */}
              <th>Category</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.Subcategory}</td> {/* Display subcategory here */}
                <td>{category.name}</td>
                <td>
                  <img src={category.image} alt={category.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td style={{ color: category.status === 'active' ? 'green' : 'red' }}>
                  {category.status}
                </td>
                <td>
                  <div className='deleteEdit'>
                    <CiEdit style={{ cursor: 'pointer' }} onClick={() => handleEditClick(category)} />
                    <MdDelete style={{ cursor: 'pointer', marginLeft: '8px' }} onClick={() => handleDeleteClick(category)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeletePopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Delete Category</h3>
            <p>Are you sure you want to delete this category?</p>
            <button onClick={confirmDelete}>Confirm</button>
            <button onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      )}

      {showAddPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add New Category</h3>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category Image URL"
              value={newCategoryImage}
              onChange={(e) => setNewCategoryImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subcategory" // New input for subcategory
              value={newSubcategory}
              onChange={(e) => setNewSubcategory(e.target.value)}
            />
            <select value={newCategoryStatus} onChange={(e) => setNewCategoryStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button onClick={confirmAdd}>Confirm</button>
            <button onClick={() => setShowAddPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showEditPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Category</h3>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category Image URL"
              value={newCategoryImage}
              onChange={(e) => setNewCategoryImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subcategory" // New input for editing subcategory
              value={newSubcategory}
              onChange={(e) => setNewSubcategory(e.target.value)}
            />
            <select value={newCategoryStatus} onChange={(e) => setNewCategoryStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button onClick={confirmEdit}>Confirm</button>
            <button onClick={() => setShowEditPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubcategoryPage;
