import { useDispatch, useSelector } from "react-redux";
import { productCart } from "../../moks/productMoks";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import "@/shared/ui/productCard/product.css";
import {
  setProductLoading,
  setProductVisibleCount,
} from "../../../features/model/productVisibleReducer";
import { DetailedButton } from "../../model/DetailedButton";
import { useLocation } from "react-router-dom";

export const ProductCard = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.product.visibleCount);
  const loading = useSelector((state) => state.product.loading);

  const location = useLocation()

  const showAllCard = location.pathname === '/mixes' 

  const handleLoadMore = () => {
    dispatch(setProductLoading(true));
    setTimeout(() => {
      dispatch(setProductVisibleCount());
      dispatch(setProductLoading(false));
    }, 1400);
  };

  return (
    <div className="">
      Готовые миксы
      {!showAllCard && visibleCount < productCart.length && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard? productCart : productCart.slice(0, visibleCount)).map((item, id) => (
          <ul key={id} className="card">
            <img src={item.img} alt="" />
            <li>{item.name}</li>
            <span>{item.description}</span>
            <li>{item.price}</li>
            {item.gramms.map((gramm) => (
              <ul key={gramm.id} className="gramms">
                <li>{gramm.gramm1}</li>
                <li>{gramm.gramm2}</li>
                <li>{gramm.gramm3}</li>
                <li>{gramm.gramm4}</li>
              </ul>
            ))}
            <DetailedButton />
          </ul>
        ))}
      </div>
    </div>
  );
};
