const getUrlParam = (key) =>
  new URLSearchParams(window.location.search).get(key);

pfWallet = pfWallet || {};
let apiKey = "";
let cclw = "";

apiKey = "SlLmEttBcJBgyYjIq4CasgIEsOtrFaZm|DIRowBMVESxE7PY47FUzsvoHg"; // AccessTokenApi que encuentras en Mi Empresas-> Llaves
cclw =
  "6650FF9654929C9C4478D5A843A01EB05C891C27E898728AC11635AC2BD9994D6357B70533A06F90D1289F03F0FE9132C155E12D52EF555CF46DACA651BE85C2"; //Código Web
pfWallet.useAsSandbox(true);

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

let sdk;
function startMerchantForm(merchantSetup) {
  let paymentInfo = {
    amount: parseFloat(getUrlParam("monto")),
    discount: 0.0,
    taxAmount: 0.0,
    description: getUrlParam("descripcion"),
  };
  console.log("merchantSetup", merchantSetup);
  let setup = {
    lang: "es",
    embedded: getUrlParam("boton") == "false",
    // type: 'lk',
    // code: 'LK-MAIMLMD1FKSQKCHU',
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
