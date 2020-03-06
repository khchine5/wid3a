import React from "react";
import Link from 'next/link';

class SectionContainer extends React.Component {
  render() {
    return (
      <div className="section_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="products_container grid">
                <div className="product grid-item hot">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_1.jpg" alt />
                      <div className="product_tag">hot</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long red shirt</Link>
                      </div>
                      <div className="product_price">$39.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_2.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">hype grey shirt</Link>
                      </div>
                      <div className="product_price">$19.50</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item sale">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_3.jpg" alt />
                      <div className="product_tag">sale</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long sleeve jacket</Link>
                      </div>
                      <div className="product_price">
                        $32.20<span>RRP 64.40</span>
                      </div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_4.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">denim men shirt</Link>
                      </div>
                      <div className="product_price">$59.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_5.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long red shirt</Link>
                      </div>
                      <div className="product_price">$79.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item new">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_6.jpg" alt />
                      <div className="product_tag">new</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">hype grey shirt</Link>
                      </div>
                      <div className="product_price">$59.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_7.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long sleeve jacket</Link>
                      </div>
                      <div className="product_price">$15.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item sale">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_8.jpg" alt />
                      <div className="product_tag">sale</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">denim men shirt</Link>
                      </div>
                      <div className="product_price">
                        $43.99<span>RRP 64.40</span>
                      </div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item hot">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_9.jpg" alt />
                      <div className="product_tag">hot</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long red shirt</Link>
                      </div>
                      <div className="product_price">$39.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_10.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">hype grey shirt</Link>
                      </div>
                      <div className="product_price">$19.50</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item sale">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_11.jpg" alt />
                      <div className="product_tag">sale</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long sleeve jacket</Link>
                      </div>
                      <div className="product_price">
                        $32.20<span>RRP 64.40</span>
                      </div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_12.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">denim men shirt</Link>
                      </div>
                      <div className="product_price">$59.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item hot">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_13.jpg" alt />
                      <div className="product_tag">hot</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long red shirt</Link>
                      </div>
                      <div className="product_price">$39.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item new">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_14.jpg" alt />
                      <div className="product_tag">new</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">hype grey shirt</Link>
                      </div>
                      <div className="product_price">$19.50</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item sale">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_15.jpg" alt />
                      <div className="product_tag">sale</div>
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">long sleeve jacket</Link>
                      </div>
                      <div className="product_price">
                        $32.20<span>RRP 64.40</span>
                      </div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product grid-item">
                  <div className="product_inner">
                    <div className="product_image">
                      <img src="/static/images/product_16.jpg" alt />
                    </div>
                    <div className="product_content text-center">
                      <div className="product_title">
                        <Link href="/product">denim men shirt</Link>
                      </div>
                      <div className="product_price">$59.90</div>
                      <div className="product_button ml-auto mr-auto trans_200">
                        <a href="#">add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionContainer;
