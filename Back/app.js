require("dotenv").config(); // เรียกใช้ dotenv
const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const authRoute = require("./routes/auth-route");
const userRoute = require("./routes/user-route");
const orderRoute = require("./routes/order-route");
const orderDetailRoute = require("./routes/orderDetail-route");
const productRoute = require("./routes/product-route");
const paymentRoute = require("./routes/payment-route");
const shippingAddressRoute = require("./routes/shippingAddress-route");
const shoppingCartRoute = require("./routes/shoppingCart-route");
const shoppingCartItemRoute = require("./routes/shoppingCartItem-route");
const contactRoute  = require("./routes/contact-route")
const app = express();

app.use(cors());
app.use(express.json());

// service
app.use("/auth", authRoute); // เส้นทางของระบบการยืนยันตัวตน
app.use(userRoute); // เส้นทางของของข้อมูลผู้ใช้
app.use(orderRoute);
app.use(orderDetailRoute);
app.use(productRoute);
app.use(paymentRoute);
app.use(shippingAddressRoute);
app.use(shoppingCartRoute);
app.use(shoppingCartItemRoute);
app.use(contactRoute)

// notFound
app.use(notFound);

// error
app.use(errorMiddleware);

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server on Port :", port));
