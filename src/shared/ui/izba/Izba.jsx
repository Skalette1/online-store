import React from "react";
import { izba } from "../../moks/izba";
import "@/shared/ui/izba/izba.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setIzbaLoading,
  setVisibleCount,
} from "../../../features/model/izbarVisibleReducer";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import { DetailedButton } from "../../model/DetailedButton";
import { useLocation } from "react-router-dom";
import { CartFooter } from "../../model/CartFooter";
import { BackOnMAin } from "../../model/BackOnMAin";
export const Izba = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.izba.visibleCount);
  const loading = useSelector((state) => state.izba.loading);

  const location = useLocation();

  const showAllCard = location.pathname === "/izba";

  const handleMore = () => {
    dispatch(setIzbaLoading(true));
    setTimeout(() => {
      dispatch(setIzbaLoading(false));
      dispatch(setVisibleCount());
    }, 1400);
  };
  return (
    <div className="">
      <div className="headCard">
        Готовые миксы {showAllCard && <BackOnMAin />}
      </div>
      {!showAllCard && visibleCount < izba.length && (
        <button onClick={handleMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard ? izba : izba.slice(0, visibleCount)).map((item, id) => (
          <ul key={id} className="card">
            <img src={item.img} alt="" />
            <li>{item.name}</li>
            <li className="descriptions" style={{ fontSize: ".9rem" }}>
              {item.descriptions}
            </li>
            <li>{item.price}</li>
            <CartFooter item={item} />
          </ul>
        ))}
      </div>
    </div>
  );
};
