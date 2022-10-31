import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Checkout = () => {
  return (
    <Layout>
      <PageBanner pageName={"Checkout"} />
      <section className="checkout-area pt-130 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="checkout-form"
                name="checkout_form"
                className="checkout-form rmb-35"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25">Order Conformation</h3>
                <hr />
                <div className="row mt-35">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue=""
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="emailAddress"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="company-address"
                        name="company-address"
                        className="form-control"
                        defaultValue=""
                        placeholder="Company Address (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h6>Your Address</h6>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="form-group">
                      <select name="country" id="country">
                        <option value="value1">Select Country</option>
                        <option value="value2">Australia</option>
                        <option value="value3">Canada</option>
                        <option value="value4">China</option>
                        <option value="value5">Morocco</option>
                        <option value="value6">Saudi Arabia</option>
                        <option value="value7">United Kingdom (UK)</option>
                        <option value="value8">United States (US)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        defaultValue=""
                        placeholder="City"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="form-control"
                        defaultValue=""
                        placeholder="State"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="form-control"
                        defaultValue=""
                        placeholder="Zip"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="street-name"
                        name="street-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="House, street name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="apartment-name"
                        name="apartment-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h6>Order Notes (optional)</h6>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="order-note"
                        id="order-note"
                        className="form-control"
                        rows={5}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="payment-method"
                name="payment-method"
                className="checkout-form mb-30"
                action="#"
                method="POST"
              >
                <h3 className="from-title mb-25">Order Summary</h3>
                <div className="package-summary mb-25">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          PSD Book Mockup <strong>× 2</strong>
                        </td>
                        <td>$303.00</td>
                      </tr>
                      <tr>
                        <td>
                          Historical Book <strong>× 2</strong>
                        </td>
                        <td>$70.00</td>
                      </tr>
                      <tr>
                        <td>
                          Medical Equipment <strong>× 1</strong>
                        </td>
                        <td>$50.00</td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td>$10.00</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$5.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>$438.00</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <input
                  className="coupon-code"
                  type="text"
                  placeholder="Coupon Code"
                />
                <h5 className="title mt-20 mb-15">Payment Method</h5>
                <div className="form-group">
                  <select name="payment" id="payment">
                    <option value="default">Choose an Option</option>
                    <option value="payment1">chash on delivey</option>
                    <option value="payment2">Bank Transfer</option>
                    <option value="payment3">Paypal</option>
                  </select>
                </div>
                <button type="submit" className="theme-btn mt-30 w-100">
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Checkout;
