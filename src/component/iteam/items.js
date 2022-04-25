import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Action from "../iteam/Action";
import { useUserContex } from "../../contex/UserAuthContex";

const mapToProps = (state) => ({
  items: state.iteam.items,
  item:state.iteam.item
});
function Items({ items,item, dispatch }) {
  const { User } = useUserContex();
  const navigate = useNavigate();
  const additem = (val) => {
    if (User) dispatch({ type: "get_item", payload: { it: val, count: 1 } });
    else {
      navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);

  return (
    <div>
      <div className="products">
        {items?.map((val) => {
          return (
            
              <div className="card grid-item">
                <img
                  
                  loading="lazy"
                  src={val.image}
                  alt="Cart Product "
                 width="200rem"
                  height="200rem"
                 
                />
                <div className="card-img-overlay d-flex justify-content-end"></div>
                <div className="card-body">
                  <h4 className="card-title">{val.title}</h4>

                  <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success">
                      <h5 className="mt-4" style={{ position: "absolute", left: 10 ,bottom:25}}>${val.price}</h5>
                    </div>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => {
                        additem(val);
                      }}
                      style={{ position: "absolute", right: 10 ,bottom:25}}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            
          );
        })}
      </div>
    </div>
  );
}
export default connect(mapToProps)(Items);
