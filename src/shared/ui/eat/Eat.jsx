import React from "react";
import { eat } from "../../moks/eat";
import { useDispatch, useSelector } from "react-redux";
import { setEatLoading, setEatVisibleCount } from "../../../features/model/eatVisibleReducer";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";

export const Eat = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.eat.visibleCount);
  const loading = useSelector((state) => state.eat.loading);

  const handleMore = () => {
    dispatch(setEatLoading(true));
    setTimeout(() => {
      dispatch(setEatVisibleCount());
      dispatch(setEatLoading(false));
    }, 2000);
  };

  return (
    <div className="">
      Зёрна
      {visibleCount < eat.length && (
        <button onClick={handleMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {eat.slice(0, visibleCount).map((item, id) => (
          <ul key={id} className="card">
            <img src={item.img} alt="" />
            <li>{item.name}</li>
            <li>{item.descriptions}</li>
            <li>{item.price}</li>
            {item.gramms.map((gramm) => (
              <ul key={gramm.id} className="gramms">
                <li>{gramm.gramm1}</li>
                <li>{gramm.gramm2}</li>
                <li>{gramm.gramm3}</li>
                <li>{gramm.gramm4}</li>
              </ul>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
