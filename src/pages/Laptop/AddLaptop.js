import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { addLaptops } from "../../services/laptopService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
export default function AddLaptop() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (values) => {
    let data = { ...values };
    dispatch(addLaptops(data));
    navigate("/home");
  };
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    const promises = [];
    if (images.length > 0) {
      images.map((image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        promises.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURLs) => {
                setUrls((prevState) => [...prevState, downloadURLs]);
                console.log("File available at", downloadURLs);
              }
            );
          }
        );
      });
    }
    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <div className="col-12">
        <Formik
          initialValues={{
            name: "",
            price: "",
            brand: "",
            image: "",
            quantity: "",
          }}
          onSubmit={(values) => {
            values.image = [urls];
            handleAdd(values);
          }}
        >
          <Form>
            <Field type="text" name={"name"} />
            <Field type="number" name={"price"} />
            <Field type="text" name={"brand"} />
            <Field
              type="file"
              multiple
              onChange={handleChange}
              name={"image"}
            ></Field>
            <button type="button" onClick={handleUpload}>
              Upload
            </button>

            {urls !== undefined &&
              urls.map((url, i) => (
                <img
                  key={i}
                  style={{ width: "500px" }}
                  src={url || "http://via.placeholder.com/300"}
                  alt="firebase-image"
                />
              ))}
            <Field type="number" name={"quantity"} />
            <button type="submit">Add</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
