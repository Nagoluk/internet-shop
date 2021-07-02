import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCatalogFetching,
  getGoods,
} from "../store/selectors/catalog-selector";
import { PageHeader } from "../components/pageHeader";
import styled from "styled-components";
import { fetchCatalog } from "../store/reducers/catalog";
import { Button } from "../components/ui/button";
import { NavLink } from "react-router-dom";
import { addToBasketAC } from "../store/reducers/basket-reducer";
import { FormattedMessage } from "react-intl";

const GoodsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 5px;
`;

const Good = styled.div`
  background: ${(props) => props.theme.backgroundForComponents};
  padding: 10px;
  width: 200px;
  text-align: center;
  margin: 5px;
  border-radius: 5px;
`;

const Price = styled.p`
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

const ToBasket = styled.div`
  & > a {
    color: ${(props) => props.theme.text};
    font-weight: 600;
  }
`;

const GoodItem = React.memo(({ _id, name, logo, price, dispatch }) => {
  return (
    <Good data-qa={_id + "=good"}>
      <img src={logo} alt={name} />
      <div>
        <h3>{name}</h3>
        <Price>{price}$</Price>
        <div>
          <Button
            onClick={() => {
              dispatch(addToBasketAC({ _id, name, logo, price }));
              alert("Added to basket");
            }}
          >
            <FormattedMessage id={"buy"} />
          </Button>
        </div>
      </div>
    </Good>
  );
});

export const Catalog = () => {
  const goods = useSelector(getGoods);
  const isFetch = useSelector(getCatalogFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  return (
    <>
      <PageHeader title={<FormattedMessage id={"catalog"} />}>
        <ToBasket>
          <NavLink to={"basket"}>
            <FormattedMessage id={"basket"} />
          </NavLink>
        </ToBasket>
      </PageHeader>
      {!isFetch && (
        <GoodsWrap>
          {goods.map((good, index) => (
            <GoodItem key={good._id} {...good} dispatch={dispatch} />
          ))}
        </GoodsWrap>
      )}

      {isFetch && <div>Fetching catalog....</div>}
    </>
  );
};
