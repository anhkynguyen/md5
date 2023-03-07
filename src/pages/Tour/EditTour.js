import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { editTours, findById } from "../../services/tourService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditTour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();

  const tours = useSelector((state) => {
    return state.tours.tours;
  });
  useEffect(() => {
    dispatch(findById(id));
  }, []);
  const handleEdit = (values) => {
    let data = { ...values };

    dispatch(editTours(data)).then(() => {
      navigate("/home");
    });
  };
  return (
    <div className="row">
      <div className="col-12">
        <Formik
          initialValues={{
            id: id.id,
            title: tours.title,
            price: tours.price,
            description: tours.description,
          }}
          onSubmit={(values) => {
            handleEdit(values);
          }}
          enableReinitialize={true}
        >
          <Form>
            <Field type="text" name={"title"} />
            <Field type="number" name={"price"} />
            <Field type="text" name={"description"} />

            <button type="submit">Edit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
