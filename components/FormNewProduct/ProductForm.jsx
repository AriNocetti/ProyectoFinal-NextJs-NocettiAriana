"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/configFirebase";

export default function ProductForm({ initialValues, onClose, isEdit }) {
  const formik = useFormik({
    initialValues: {
      category: initialValues?.category || "",
      title: initialValues?.title || "",
      description: initialValues?.description || "",
      fabric: initialValues?.fabric || "",
      price: initialValues?.price || "",
      stock: initialValues?.stock || "",
      imageUrl: initialValues?.imageUrl || "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("La categoría es obligatoria"),
      title: Yup.string().required("El nombre es obligatorio"),
      description: Yup.string().required("La descripción es obligatoria"),
      fabric: Yup.string().required("La tela es obligatoria"),
      price: Yup.number()
        .positive("El precio debe ser positivo")
        .required("El precio es obligatorio"),
      stock: Yup.number()
        .integer("Debe ser un número entero")
        .min(0, "Debe ser mayor o igual a 0")
        .required("El stock es obligatorio"),
      imageUrl: Yup.mixed().required("La imagen es obligatoria"),
    }),
    onSubmit: async (values) => {
      try {
        if (isEdit && initialValues?.id) {
          // Si es edición, actualiza el producto
          const productRef = doc(db, "productosRopa", initialValues.id);
          await updateDoc(productRef, values);
          console.log("Producto actualizado correctamente");
        } else {
          // Si es nuevo, agrega el producto
          await addDoc(collection(db, "productosRopa"), values);
          console.log("Producto agregado correctamente");
        }
        onClose(() => {}); // Cerrar el modal después de enviar
      } catch (error) {
        console.error("Error al enviar los datos a Firebase:", error);
      }
    },
  });

  const handleChange = (field) => (e) => formik.setFieldValue(field, e.target.value);
  const handleBlur = (field) => () => formik.setFieldTouched(field, true);

  return (
    <div className=" rounded-2xl w-full max-w-2xl p-3 mt-4 relative">

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-y-4 gap-x-8">
        {/* Categoría */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <Select
            id="categoria"
            name="categoria"
            value={formik.values.category}
            onChange={handleChange("category")}
            onBlur={handleBlur("category")}
            className="min-w-[212px] h-10"
          >
            <MenuItem value={"Abrigos"}>Abrigos</MenuItem>
            <MenuItem value={"Pantalones"}>Pantalones</MenuItem>
            <MenuItem value={"Remeras"}>Remeras</MenuItem>
            <MenuItem value={"Lencería"}>Lencería</MenuItem>
          </Select>
          {formik.errors.category && formik.touched.category && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.category}</p>
          )}
        </div>

        {/* Nombre del producto */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del producto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formik.values.title}
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            className="w-auto p-2 border rounded-lg text-gray-700 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
          />
          {formik.errors.title && formik.touched.title && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.title}</p>
          )}
        </div>

        {/* Descripción */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={formik.values.description}
            onChange={handleChange("description")}
            onBlur={handleBlur("description")}
            className="w-auto p-2 border rounded-lg text-gray-700 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
          />
          {formik.errors.description && formik.touched.description && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.description}</p>
          )}
        </div>

        {/* Tela */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tela</label>
          <Select
            id="tela"
            name="tela"
            value={formik.values.fabric}
            onChange={handleChange("fabric")}
            onBlur={handleBlur("fabric")}
            className="min-w-[212px] h-10"
          >
            <MenuItem value={"lana"}>Lana</MenuItem>
            <MenuItem value={"jean"}>Jean</MenuItem>
            <MenuItem value={"seda"}>Seda</MenuItem>
            <MenuItem value={"encaje"}>Encaje</MenuItem>
            <MenuItem value={"algodón"}>Algodón</MenuItem>
          </Select>
          {formik.errors.fabric && formik.touched.fabric && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.fabric}</p>
          )}
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formik.values.price}
            onChange={handleChange("price")}
            onBlur={handleBlur("price")}
            className="w-auto p-2 border rounded-lg text-gray-700 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
          />
          {formik.errors.price && formik.touched.price && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.price}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formik.values.stock}
            onChange={handleChange("stock")}
            onBlur={handleBlur("stock")}
            className="w-full p-2 border rounded-lg text-gray-700 focus:ring-[#9b59b6] focus:border-[#9b59b6]"
          />
          {formik.errors.stock && formik.touched.stock && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.stock}</p>
          )}
        </div>

        {/* Imagen */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Imagen</label>
          <input
            type="text"
            id="imagen Url"
            name="imagen Url"
            value={formik.values.imageUrl}
            onChange={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            className="border p-2 w-full rounded-lg"
          />
          {formik.errors.imageUrl && formik.touched.imageUrl && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.imageUrl}</p>
          )}
        </div>

        {/* Botón de enviar */}
        <div className="col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#9b59b6] px-8 py-2 rounded-lg hover:bg-[#c692db] transition-colors text-white font-bold"
          >
            {isEdit ? "Actualizar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
}