const whatsappText = ({ cart, costs, shipping, contact }) => {
  const message = `
    Hi, I'm ${contact.firstName} ${
    contact.lastName
  } and I want to order these products:
    ${cart.map((product) => `${product.quantity}x ${product.name}`).join("\n")}
    ${
      shipping.address1 !== ""
        ? `
    Shipping address: ${shipping.address1}, ${shipping.address2}, ${shipping.city}, ${shipping.region}
    Shipping cost: ${costs.shipping}
    `
        : `
    Store pickup
    `
    }
    Total: ${costs.totalWithShipping}
    I will pay with ${contact.paymentMethod} with phone number ${contact.phone}

    Thanks!
  `;
  return message;
};

export default whatsappText;
