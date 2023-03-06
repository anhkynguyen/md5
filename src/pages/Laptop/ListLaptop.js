import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteLaptops,
  getLaptops,
} from "../../services/laptopService";
export default function ListLaptop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const laptops = useSelector((state) => {
    console.log(state.laptops.laptops);
    return state.laptops.laptops;
  });

  useEffect(() => {
    dispatch(getLaptops());
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <table border={1}>
          <tr>
            <td>STT</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Image</td>
            <td>Brand</td>

            <td>Action</td>
          </tr>
          {laptops !== undefined &&
            laptops.map((item, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <img src={item.image} alt="" width={200} height={200} />
                </td>
                <td>{item.nameBrand}</td>
                <button
                  onClick={() => {
                    dispatch(deleteLaptops(item.idLaptop)).then(() => {
                      dispatch(getLaptops()).then(() => {
                        navigate("/home");
                      });
                    });
                  }}
                >
                  Delete
                </button>
                <Link to={`edit-laptop/${item.idLaptop}`}>
                  <button>Edit</button>
                </Link>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
