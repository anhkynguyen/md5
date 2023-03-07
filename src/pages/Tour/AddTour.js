import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { addTours } from "../../services/tourService";
import { useNavigate } from "react-router-dom";

export default function AddTour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (values) => {
    let data = { ...values };
    dispatch(addTours(data));
    navigate("/home");
  };

  return (
    <div className="row">
      <div className="col-12">
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
          }}
          onSubmit={(values) => {
            handleAdd(values);
          }}
        >
          <Form>
            <Field type="text" name={"title"} />
            <Field type="number" name={"price"} />
            <Field type="text" name={"description"} />

            <button type="submit">Add</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
