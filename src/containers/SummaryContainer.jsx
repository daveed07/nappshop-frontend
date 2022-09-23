import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "@components/CheckoutItem";
import Title from "@micro-components/Title";
import Input from "@micro-components/Input";
import Button from "@micro-components/Button";
import StyledSummary from "@styles/styledSummary";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";
import { discounts } from "@constants/discounts";

const SummaryContainer = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  const cart = useSelector((state) => state.cart);
  const costs = useSelector((state) => state.costs);
  const subtotal = props.subtotal || costs.subtotal;
  const total = props.total || costs.total;
  const totalWithShipping = props.totalWithShipping || costs.totalWithShipping;
  const shipping = props.shipping || costs.shipping;
  const tax = props.tax || costs.tax;
  const discount = props.discount || costs.discount || 0;
  const discountAmount = (tot) => {
    return parseFloat((tot * discount) / 100).toFixed(2);
  };

  return (
    <StyledSummary>
      <Title size="xxxlarge" color={colors.black}>
        Summary
      </Title>
      <div className="checkout-summary-items">
        <div className="checkout-summary">
          {cart.map((product) => (
            <CheckoutItem
              key={product.id}
              product={product}
              loading={loading}
            />
          ))}
        </div>
        {props.codeInput && (
          <div className="discount-code-container">
            <Input
              marginBottom="0"
              type="text"
              id="discountCode"
              placeholder="Discount code"
            />
            <Button
              primary
              icon
              add={colors.main}
              onClick={() => {
                const discountCode =
                  document.getElementById("discountCode").value;
                const discount = discounts.find(
                  (discount) => discount.name === discountCode
                );
                if (discount) {
                  props.setDiscount(discount.discount);
                } else {
                  props.setDiscount(0);
                }
              }}
            >
              Apply
            </Button>
          </div>
        )}
        <div className="checkout-summary-prices">
          <div className="checkout-summary-prices-item">
            <p className="checkout-summary-prices-item-title">
              {loading && <Skeleton width={65} height={18} />}
              {!loading && "Subtotal"}
            </p>
            <p className="checkout-summary-prices-item-price">
              {loading && <Skeleton width={65} height={18} />}
              {!loading && `$${subtotal}`}
            </p>
          </div>
          <div className="checkout-summary-prices-item">
            <p className="checkout-summary-prices-item-title">
              {loading && <Skeleton width={65} height={18} />}
              {!loading && "Tax"}
            </p>
            <p className="checkout-summary-prices-item-price">
              {loading && <Skeleton width={65} height={18} />}
              {!loading && `$${tax}`}
            </p>
          </div>
          {discount > 0 && (
            <div className="checkout-summary-prices-item">
              <p className="checkout-summary-prices-item-title">
                {loading && <Skeleton width={65} height={18} />}
                {!loading && "Discount"}
              </p>
              <p className="checkout-summary-prices-item-price">
                {typeof shipping === "string"
                  ? discountAmount(total)
                  : discountAmount(totalWithShipping)}
              </p>
            </div>
          )}
          <div className="checkout-summary-prices-item">
            <p className="checkout-summary-prices-item-title">
              {loading && <Skeleton width={65} height={18} />}
              {!loading && "Shipping"}
            </p>
            <p className="checkout-summary-prices-item-price">
              {loading && <Skeleton width={65} height={18} />}
              {!loading &&
                `
              ${typeof shipping === "string" ? shipping : `$${shipping}`}`}
            </p>
          </div>
        </div>
        <div className="checkout-summary-total">
          <p className="checkout-summary-total-title">
            {loading && <Skeleton width={80} height={20} />}
            {!loading && "Total"}
          </p>
          <p className="checkout-summary-total-price">
            {loading && <Skeleton width={80} height={20} />}
            {!loading && `$${totalWithShipping}`}
          </p>
        </div>
      </div>
    </StyledSummary>
  );
};

export default SummaryContainer;
