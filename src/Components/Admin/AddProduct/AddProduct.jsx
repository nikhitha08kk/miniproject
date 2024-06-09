// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import "./AddProduct.css";
// import { Products } from "../../../Services/Adminapi";

// function AddProduct() {
//   const initialValues = {
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     // image: null,
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     description: Yup.string().required("Description is required"),
//     price: Yup.number().required("Price is required").positive("Price must be positive"),
//     category: Yup.string().required("Category is required"),
//     image: Yup.mixed().required("Image is required"),
//   });

//   const onSubmit = async (values, { resetForm }) => {
//     const formData = new FormData();
//     formData.append("name", values.name);
//     formData.append("description", values.description);
//     formData.append("price", values.price);
//     formData.append("category", values.category);
//     // if (values.image) {
//     //   formData.append("image", values.image);
//     // }

//     console.log("Form data being sent:", formData);

//     try {
//       const response = await Products(formData);
//       console.log("Server response:", response);

//       if (response.data) {
//         toast.success(`${response.data.name || "Product"} has been added`);
//         resetForm();
//       } else {
//         toast.error("Failed to add product");
//       }
//     } catch (error) {
//       console.error("Error adding product:", error.response || error.message || error);
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <div className="addProduct">
//       <h1>Add Product</h1>
//       <div className="addProductSection">
//         <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
//           <div className="addProductInputDiv">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="ENTER NAME HERE..."
//             />
//             {formik.touched.name && formik.errors.name && (
//               <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
//                 {formik.errors.name}
//               </p>
//             )}
//           </div>
//           <br />
//           <div className="addProductInputDiv">
//             <label>Description</label>
//             <textarea
//               name="description"
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="PRODUCT DESCRIPTION..."
//             />
//             {formik.touched.description && formik.errors.description && (
//               <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
//                 {formik.errors.description}
//               </p>
//             )}
//           </div>
//           <br />
//           <div className="addProductInputDiv">
//             <label>Price</label>
//             <input
//               type="number"
//               name="price"
//               value={formik.values.price}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="ENTER PRICE HERE ..."
//             />
//             {formik.touched.price && formik.errors.price && (
//               <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
//                 {formik.errors.price}
//               </p>
//             )}
//           </div>
//           <br />
//           <div className="addProductInputDiv">
//             <label>Category</label>
//             <select
//               name="category"
//               value={formik.values.category}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             >
//               <option value="">Select Category</option>
//               <option value="New Arrivals">New Arrivals</option>
//               <option value="Best seller">Best seller</option>
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="BodyWash">BodyWash</option>
//             </select>
//             {formik.touched.category && formik.errors.category && (
//               <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
//                 {formik.errors.category}
//               </p>
//             )}
//           </div>
//           <br />
//           {/* <div className="addProductInputDiv">
//             <label>Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={(event) => {
//                 formik.setFieldValue("image", event.currentTarget.files[0]);
//               }}
//               onBlur={formik.handleBlur}
//               className="file-image"
//             />
//             {formik.touched.image && formik.errors.image && (
//               <p className="error-message" style={{ marginTop: "5px", color: "red" }}>
//                 {formik.errors.image}
//               </p>
//             )}
//           </div> */}
//           <br />
//           <button type="submit" id="AddProductBtn">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;

import React from 'react';

import './AddProduct.css'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
// import { Products } from '../../../Services/AdminApi'; 
import { Products } from '../../../Services/Adminapi';


function AddProduct() {
  const formik = useFormik({
    initialValues: {
      prod_name: '',
      price: '',
      description: '',
      image: '',
      category: 'New seller',
    },
    validationSchema: Yup.object({
      prod_name: Yup.string().required('Product name is required'),
      price: Yup.number().required('Price is required').positive('Price must be positive'),
      description: Yup.string().required('Description is required'),
      image: Yup.string().required('Image URL is required'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await Products(values)
        console.log(response,"gghh"); 
        toast.success(response.data.message);
        resetForm();
      } catch (error) {
        toast.error(error.response?.data?.error || 'Something went wrong');
      }
    },
  });

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="prod_name">Product Name</label>
          <input
            id="prod_name"
            name="prod_name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prod_name}
          />
          {formik.touched.prod_name && formik.errors.prod_name ? (
            <div className="error">{formik.errors.prod_name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value="" label="Select category" />
            <option value="new arrival" label="new arrival" />
            <option value="Best seller" label="Best sellet" />
            <option value="Mens" label="mens" />
            <option value="Womens" label="Womens" />
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="error">{formik.errors.category}</div>
          ) : null}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;








