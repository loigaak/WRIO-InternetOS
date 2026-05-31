import React from "react";
import { getServiceUrl, getDomain } from "../../servicelocator.js";
import { transactionsHeight, webgoldMessage } from "base/actions/WindowMessage";
var domain = getDomain();

const transFrameUrl = getServiceUrl("webgold") + "/transactions";

// Constants for CRD calculation
const TOTAL_CRD_WRG = 40000;
const WRG_TO_USD_RATE_WRG = 1000;
const WRG_TO_USD_RATE_USD = 40;

class CreateTransactions extends React.Component {
  constructor(props) {
    super(props);
    // Calculate total CRD in USD
    this.totalCrdInUsd = (TOTAL_CRD_WRG / WRG_TO_USD_RATE_WRG) * WRG_TO_USD_RATE_USD;
  }

  createTransactionsWidget() {
    document.getElementById("transactionsiframe").style.height = "240px";
    webgoldMessage.subscribe(ht => {
      document.getElementById("transactionsiframe").style.height = ht + "px";
    });
  }

  componentDidMount() {
    this.createTransactionsWidget();
  }

  render() {
    const editIframeStyles = {
      width: "100%",
      border: "none"
    };
    return (
      <div>
        <div className="crd-total-info">
          <h3>CRD Total</h3>
          <p>Total issued CRD: {TOTAL_CRD_WRG} WRG</p>
          <p>Equivalent to: {this.totalCrdInUsd} <sup><small className="currency">USD</small></sup></p>
          <p><em>(1,000 WRG = {WRG_TO_USD_RATE_USD} USD)</em></p>
        </div>
        <section key="b">
          <iframe
            id="transactionsiframe"
            src={transFrameUrl}
            frameBorder="no"
            scrolling="no"
            style={editIframeStyles}
          />
        </section>
      </div>
    );
  }
}

export default CreateTransactions;
