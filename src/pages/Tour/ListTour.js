import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTours, getTours } from "../../services/tourService";
export default function ListTour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tours = useSelector((state) => {
    return state.tours.tours;
  });

  useEffect(() => {
    dispatch(getTours());
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <table border={1}>
          <tr>
            <td>STT</td>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>

            <td>Action</td>
          </tr>
          {tours !== undefined &&
            tours.map((item, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>

                <button
                  onClick={() => {
                    dispatch(deleteTours(item.id)).then(() => {
                      dispatch(getTours()).then(() => {
                        navigate("/home");
                      });
                    });
                  }}
                >
                  Delete
                </button>
                <Link to={`edit-tour/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
