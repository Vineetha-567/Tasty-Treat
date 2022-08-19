import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';


import Category from "../components/UI/category/Category.jsx";

import '../styles/home.css';

import featureImg01 from '../assets/images/service-01.jpeg'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products.js'

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";



const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: " Expedited shipping is a delivery option that promises faster shipping speeds compared to standard shipping options ",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "The restaurant serves cuisines like Chinese, Pizza, Burger, North Indian, Indian.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: " We'll let you know when your food is ready so you can pick it up from the restaurant yourself.",
  },
];

const Home = () => {

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);


  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);


  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);


  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at<span> your door</span>
                </h1>
                <p>  Whether it’s a quick lunch or a pizza party, you’ll love the fun atmosphere, local decor and great food. 
                  Both the Fort Branch & Princeton locations are just a short drive from Evansville & Owensville, In!</p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4 ">
                  <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/foods">Order Now</Link>
                    <i class="ri-arrow-right-s-line"></i></button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className="hero__service  d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon"><i class="ri-car-line"></i>
                    </span>{" "} No shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2 ">
                    <span className="shipping__icon"><i class="ri-shield-check-line"></i>
                    </span>{" "} 100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h5 className="feature__subtitle mb-4 ">What we serve </h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Mouth Watering Frozen Take & Bake Pizzas!!!!
              </p>
              <p className="feature__text">
              Crispy Crust! Excellent On A Pellet Grill! {" "}
              </p>
            </Col>

            {
              featureData.map((item, index) => (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5' >
                  <div className="feature__item text-center px-5 py-3 " >
                    <img 
                      src={item.imgUrl} 
                      alt=" feature-img " 
                      className="w-25 mb-3" 
                    />
                    <h5 className=" fw-bold mb-3 ">{item.title} </h5>
                    <p>{item.desc} </p>

                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2> Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className="food__category  d-flex align-items-center justify-content-center gap-4 ">
                <button
                  className={`all__btn  ${category === "ALL" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex align-items-center gap-2 
                  ${category === "BURGER" ? "foodBtnActive" : ""} `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {
              allProducts.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className=" mt-5 ">

                  <ProductCard item={item} />
                </Col>

              ))
            }
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg='6' md='6'>
            <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4 "> 
                  Why <span>Vinny Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Customers use our platform to search and discover restaurants, read and write 
                  customer generated reviews and view and upload photos, order food delivery, 
                  book a table and make payments while dining-out at restaurants.
                </p>

                <ListGroup className=" mt-4 ">
                  <ListGroupItem  className=" border-0 ps-0 ">
                    <p className=" choose__us-title d-flex align-items-center gap-2  ">
                      <i class="ri-checkbox-circle-line"></i>Fresh and 
                      tasty 
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Get Fresh And Tasty Food Delivery to you within 45 mins. 24 Hour food delivery from
                      freshmenu at Vinny Treat.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className=" border-0 ps-0 "> 
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Quality 
                      support
                    </p>
                    <p className="choose__us-desc">
                    Instacart is a food and grocery delivery-on-demand service. 
                    You will be able to get your favorite products
                    </p>
                    
                  </ListGroupItem>

                  <ListGroupItem className=" border-0 ps-0 ">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Order from 
                      any location {" "}
                    </p>
                    <p className="choose__us-desc ">
                      Yes, possible. You can order food for different location. 
                    </p>
                    
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5 ">
              <h2> Hot Pizza </h2>
            </Col>

            { 
             hotPizza.map((item) => (
              <Col lg="3" md="4"  key={item.id}>
                <ProductCard item={item} />
              </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
           
            <Col lg='6' md='6'>
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4 "> Testimonial</h5>
                <h2 className="testimonial__title mb-4 "> 
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                The food was awesome as always!  The staff was great considering how many people 
                showed up unexpectedly due to the basketball tournament. Always a great 
                place to have large parties with a reservation.
                </p>

                <TestimonialSlider/>
              </div>
            </Col>

            <Col lg='6' md='6'>
            <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>

      </section>

    </Helmet>

  );
};

export default Home;
