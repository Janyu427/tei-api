
const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

const aboutRoutes = require("./routes/about");
const bannerRoutes = require("./routes/banner");
const contactRoutes = require("./routes/contact");
const contactInfoRoutes = require("./routes/contactInfo");
const productRoutes = require("./routes/product");
const productDetailsRoutes = require("./routes/productDetails");
const innerPageTitleRoutes = require("./routes/innerPageTitle");
const menuRoutes = require("./routes/menu");
const socialMediaRoutes = require("./routes/socialMedia");
const videoRoutes = require("./routes/video");

app.use("/about", aboutRoutes);
app.use("/banner", bannerRoutes);
app.use("/contact", contactRoutes);
app.use("/contactInfo", contactInfoRoutes);
app.use("/product", productRoutes);
app.use("/productDetails", productDetailsRoutes);
app.use("/innerPageTitle", innerPageTitleRoutes);
app.use("/menu", menuRoutes);
app.use("/socialMedia", socialMediaRoutes);
app.use("/video", videoRoutes);