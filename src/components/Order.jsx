import React, { useState, useEffect } from "react";
import Title from "@micro-components/Title";
import SubTitle from "@micro-components/SubTitle";
import Down from "@svg-components/Down";
import Up from "@svg-components/Up";
import OrderItem from "@components/OrderItem";
import StyledOrder from "@styles/styledOrder";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "@constants/colors";

const Order = ({ order, loading }) => {
  const [toggle, setToggle] = useState(false);

  const date = new Date(order.created_date).toLocaleDateString();
  const total = order.total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // payment method on title case
  const paymentMethod = order.payment_method
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const orderStatus = order.order_status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [loadOrder, setLoadOrder] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoadOrder((loadOrder) => !loadOrder);
    };
    loadData();
  }, [toggle]);

  return (
    <StyledOrder toggle={toggle}>
      <div className="order-header">
        <Title size="medium" color={colors.black}>
          {loading && <Skeleton width={80} height={18} />}
          {!loading && `Order #${order.order_id}`}
        </Title>
        <div className="order-header-info">
          <SubTitle size="medium" color={colors.black}>
            {loading && <Skeleton width={150} height={18} />}
            {!loading && `Placed on ${date}`}
          </SubTitle>
          <SubTitle size="medium" color={colors.black}>
            {loading && <Skeleton width={60} height={18} />}
            {!loading && `Total ${total}`}
          </SubTitle>
          {toggle ? (
            <Up onClick={() => setToggle(!toggle)} />
          ) : (
            <Down onClick={() => setToggle(!toggle)} />
          )}
        </div>
      </div>
      {toggle && (
        <div className="order-body">
          <div className="order-body-info">
            <div className="shipping-address">
              {order.shipping_address.address1 ? (
                <>
                  <p>
                    {loadOrder && (
                      <div className="skeleton-container">
                        <Skeleton width={200} height={18} />
                        <Skeleton width={200} height={18} />
                      </div>
                    )}
                    {!loadOrder && order.shipping_address.address1}{", "}
                    {!loadOrder && order.shipping_address.address2}
                  </p>
                  <p>
                    {loadOrder && <Skeleton className="skeleton-address" width={160} height={18} />}
                    {!loadOrder && order.shipping_address.city}
                  </p>
                  <p>
                    {loadOrder && <Skeleton className="skeleton-address" width={160} height={18} />}
                    {!loadOrder && order.shipping_address.province.toUpperCase()}
                  </p>
                </>
              ) : (
                <p>
                  {loadOrder && <Skeleton width={160} height={18} />}
                  {!loadOrder && "store pickup"}
                </p>
              )}
            </div>
            <div className="payment-method">
              <p>
                {loadOrder && <Skeleton width={80} height={18} />}
                {!loadOrder && `Payment Method: ${paymentMethod}`}
              </p>
              <p>
                {loadOrder && <Skeleton width={80} height={18} />}
                {!loadOrder && `Order Status: ${orderStatus}`}
              </p>
            </div>
          </div>
          <div className="order-items">
            {order.order_items.map((item) => (
              <OrderItem key={item.product_id} item={item} loading={loadOrder} />
            ))}
          </div>
        </div>
      )}
    </StyledOrder>
  );
};

export default Order;
