const whatsappText = ({ cart, costs, shipping, contact, order_id }) => {
  const storeAddress = "El Dorado, Plaza La Alhambra, Local 14, planta alta";
  const message = `
Order: ${bold(order_id)}
%0A
----------------
%0A
Nueva orden de ${bold(contact.firstName)} ${bold(contact.lastName)}
%0A%0A
${cart.map((product) => `${product.quantity} x ${product.name} - ($${product.price})`).join(" %0A")}
%0A%0A
${bold('Subtotal:')} ${costs.subtotal}
%0A
${bold('Envío:')} ${costs.shipping}
%0A
${bold('Total:')}  ${costs.totalWithShipping}
%0A
${bold('Método de pago:')}  Yappy
%0A%0A
${bold('Método de entrega:')}  ${shipping.address1 !== "" ? "Delivery" : "Retirar en la tienda"}
%0A%0A
${bold('Teléfono:')}  ${contact.phone}
%0A
${bold('Dirección de entrega:')}  ${shipping.address1 !== false ? `${shipping.address1} ${shipping.address2} ${shipping.city} ${shipping.region}` : storeAddress}
%0A%0A
Muchas gracias!
%0A%0A
%0A
----------------
%0A
(Mensaje para el cliente)
%0A%0A
Recuerda pagar tu orden en Yappy para que podamos procesarla.
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