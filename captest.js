var stripe = require("stripe")(
  "sk_test_qdRNpxdRklupF26cahCRJnws"
);


stripe.charges.retrieve("ch_1AsVa42eZvKYlo2CvNQtT2Xr", {
  expand: ["customer"]
});

stripe.charges.create({
  amount: 2000,
  currency: "usd",
  source: "tok_visa", // obtained with Stripe.js
  description: "Charge for david.wilson@example.com"
}, {
  idempotency_key: "KYNfh1HcQZUdtzWA"
}, function(err, charge) {
  // asynchronously called
});


stripe.charges.create({
  amount: 2000,
  currency: "usd",
  source: "tok_visa", // obtained with Stripe.js
  metadata: {'order_id': '6735'}
});

stripe.customers.list(
  { limit: 3 },
  function(err, customers) {
    // asynchronously called
  }
);

