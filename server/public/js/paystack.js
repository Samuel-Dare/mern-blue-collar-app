const https = require("https");
const dotenv = require("dotenv");
dotenv.config();

exports.initializePayment = async (formData) => {
  try {
    const options = {
      hostname: process.env.PAYSTACK_BASE_URL,
      port: 443,
      path: "/charge",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(JSON.parse(data));
        return JSON.parse(data);
      });
    });

    req.on("error", (error) => {
      throw error;
    });

    req.write(JSON.stringify(formData));
    req.end();
  } catch (error) {
    throw error;
  }
};

exports.verifyPayment = async (reference) => {
  try {
    const options = {
      hostname: process.env.PAYSTACK_BASE_URL,
      path: `/transaction/verify/${reference}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        return JSON.parse(data);
      });
    });

    req.on("error", (error) => {
      throw error;
    });

    req.end();
  } catch (error) {
    throw error;
  }
};
