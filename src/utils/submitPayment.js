const submitPayment = ({
  pfWallet,
  PAGUELOFACIL_API_KEY,
  CCLW,
  amount,
  description,
  boton,
}) => {
  const getUrlParam = (key) => new URLSearchParams(window.location.search).get(key);

  pfWallet = pfWallet || {};
  let apiKey = "";
  let cclw = "";

  apiKey = PAGUELOFACIL_API_KEY; // AccessTokenApi que encuentras en Mi Empresas-> Llaves
  cclw = CCLW; //Código Web
  pfWallet.useAsSandbox(false);

  pfWallet
    .openService({
      apiKey: apiKey,
      cclw: cclw,
    })
    .then(
      function (merchantSetup) {
        startMerchantForm(merchantSetup);
      },
      function (error) {
        console.log(error);
      }
    );
  console.log(pfWallet);

  let sdk;
  function startMerchantForm(merchantSetup) {
    let paymentInfo = {
      amount: parseFloat(getUrlParam("monto")),
      discount: 1.0,
      taxAmount: 1.0,
      description: getUrlParam("descripcion"),
    };
    console.log(paymentInfo);
    console.log("merchantSetup", merchantSetup);
    let setup = {
      lang: "es",
      embedded: boton == "false",
      type: "lk",
      code: "LK-MAIMLMD1FKSQKCHU",
      container: "container-form",
      onError: function (data) {
        console.error("errors", data);
      },
      onTxSuccess: function (data) {
        console.log("onTxSuccess", data);
        window.location.href =
          pfWallet.pfHostViews + `/pf/default-receipt/${data?.Oper}`;
      },
      onTxError: function (data) {
        console.error("when the onTxError, in other process", data);
      },
      onClose: function () {
        console.log("onClose called");
      },
    };
    sdk = merchantSetup.init(merchantSetup.dataMerchant, paymentInfo, setup);
  }
};

export default submitPayment;
