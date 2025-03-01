import { eat } from "../../moks/eat";
import { useDispatch, useSelector } from "react-redux";
import {
  setEatLoading,
  setEatVisibleCount,
} from "../../../features/model/eatVisibleReducer";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import { DetailedButton } from "../../model/DetailedButton";
import { useLocation } from "react-router-dom";
import { CartFooter } from "../../model/CartFooter";
import { BackOnMAin } from "../../model/BackOnMAin";
export const Eat = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.eat.visibleCount);
  const loading = useSelector((state) => state.eat.loading);

  const location = useLocation();

  const showAllCard = location.pathname === "/food";

  const handleMore = () => {
    dispatch(setEatLoading(true));
    setTimeout(() => {
      dispatch(setEatVisibleCount());
      dispatch(setEatLoading(false));
    }, 1400);
  };

  return (
    <div className="">
      <div className="headCard">
        Готовые миксы {showAllCard && <BackOnMAin />}
      </div>
      {!showAllCard && visibleCount < eat.length && (
        <button onClick={handleMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard ? eat : eat.slice(0, visibleCount)).map((item, id) => (
          <ul key={id} className="card">
            <img src={item.img} alt="" />
            <li>{item.name}</li>
            <li className="descriptions" style={{ fontSize: ".9rem" }}>
              {item.descriptions}
            </li>
            <li>{item.price}</li>
            {item.gramms.map((gramm) => (
              <ul key={gramm.id} className="gramms">
                <li>{gramm.gramm1}</li>
                <li>{gramm.gramm2}</li>
                <li>{gramm.gramm3}</li>
                <li>{gramm.gramm4}</li>
              </ul>
            ))}
            <CartFooter item={item} />
          </ul>
        ))}
      </div>
    </div>
  );
};
