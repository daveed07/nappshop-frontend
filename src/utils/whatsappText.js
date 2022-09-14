const whatsappText = ({ cart, costs, shipping, contact, order_id }) => {
  const storeAddress = "El Dorado, Plaza La Alhambra, Local 14, planta alta";
  const message = `
Order: ${bold(order_id)}
%0A
----------------
%0A
New order from ${bold(contact.firstName)} ${bold(contact.lastName)}
%0A%0A
${cart.map((product) => `${product.quantity} x ${product.name} - ($${product.price})`).join(" %0A")}
%0A%0A
${bold('Subtotal:')} ${costs.subtotal}
%0A
${bold('Shipping:')} ${costs.shipping}
%0A
${bold('Total:')}  ${costs.totalWithShipping}
%0A
${bold('Payment method:')}  Yappy
%0A%0A
${bold('Shipping method:')}  ${shipping.address1 !== "" ? "Delivery" : "Store Pickup"}
%0A%0A
${bold('Phone:')}  ${contact.phone}
%0A
${bold('Shipping address:')}  ${!shipping.address1 ? `${shipping.address1} ${shipping.address2} ${shipping.city} ${shipping.region}` : storeAddress}
%0A%0A
Thanks!
%0A%0A
%0A
----------------
%0A
(Message to client)
%0A%0A
Remember to pay on Yappy to:
%0A
Yappy: 66731685
%0A
${bold('Total:')} ${costs.totalWithShipping}
`
  return message;
};

export default whatsappText;


const bold = (word) => {
  return encodeURIComponent(`*${word}*`);
}