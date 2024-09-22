import React, { useState } from 'react';
import data from '../data.json';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import './Product.css';

function ProductPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState(data.Subcategory || []);
    const [products, setProducts] = useState(data.Product || []);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryImage, setNewCategoryImage] = useState('');
    const [newCategoryStatus, setNewCategoryStatus] = useState('active');
    const [newSubcategory, setNewSubcategory] = useState('');
    const [newProduct, setNewProduct] = useState('');

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Combine products with subcategories
    const combinedData = filteredCategories.map(category => {
        const product = products.find(p => p.Subcategory === category.Subcategory);
        return { ...category, product: product ? product.Product : '' };
    });

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
            subcategory: newSubcategory,
            product: newProduct
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
        setNewSubcategory(category.subcategory);
        setNewProduct(category.product);
        setShowEditPopup(true);
    };

    const confirmEdit = () => {
        const updatedCategory = {
            ...categoryToEdit,
            name: newCategoryName,
            image: newCategoryImage,
            status: newCategoryStatus,
            subcategory: newSubcategory,
            product: newProduct
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
        setNewSubcategory('');
        setNewProduct('');
    };

    return (
        <div className="category-page">
            <div className="header-section">
                <h2>Product</h2>
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
                            <th>Product</th>
                            <th>Subcategory</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {combinedData.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.product}</td> {/* Correctly reference the product */}
                                <td>{category.Subcategory}</td>
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

            {/* Popup for delete, add, and edit would remain the same */}
        </div>
    );
}

export default ProductPage;
