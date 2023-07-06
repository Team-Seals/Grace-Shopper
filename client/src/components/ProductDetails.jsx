// React Component
import React from "react";

export default function ProductDetails() {
  // fetch a single product using id from useParams()
  return (
    <div className="container">
      <div className="header">
        <h3>Home / Product Name</h3>
      </div>
      <div className="productBody">
        <div className="productImage">
          <img src="https://example.com/product-image.jpg" alt="Product" />
        </div>
        <div className="productDetails">
          <h1 className="productName">Product Name</h1>
          <h3 className="productPrice">Product Price</h3>
          <h3 className="productColorway">Product Colorway</h3>
          <div className="sizingChart">
            <h4>Size: Please select</h4>
            <table>
              <td>6</td>
              <td>6.5</td>
              <td>7</td>
              <td>7.5</td>
              <td>8</td>
              <td>8.5</td>
              <td>9</td>
              <td>9.5</td>
              <td>10</td>
              <td>10.5</td>
              <td>11</td>
              <td>11.5</td>
              <td>12</td>
            </table>
          </div>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
