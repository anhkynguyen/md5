import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { editLaptops } from "../../services/laptopService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditLaptop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();
  const laptops = useSelector((state) => {
    console.log(state.laptops.laptops[0]);
    return state.laptops.laptops[0];
  });
  const handleEdit = (values) => {
    let data = { ...values };
    console.log(3, data);

    dispatch(editLaptops(data)).then(() => {
      navigate("/home");
    });
  };
  return (
    <div className="row">
      <div className="col-12">
        <Formik
          initialValues={{
            idLaptop: id.id,
            name: laptops.name,
            price: laptops.price,
            image: laptops.image,
            brand: laptops.brand,
            quantity: laptops.quantity,
          }}
          onSubmit={(values) => {
            handleEdit(values);
          }}
          enableReinitialize={true}
        >
          <Form>
            <Field type="text" name={"name"} />
            <Field type="number" name={"price"} />
            <Field type="text" name={"brand"} />
            <Field type="number" name={"quantity"} />
            <button type="submit">Edit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
