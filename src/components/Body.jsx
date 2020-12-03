import React from "react";
import cabecera from '../img/cabecera.jpg';
import assimov from '../img/assiimov.png';

const Body = (props) => {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={cabecera}
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light">STAR STORE</h1>
          <p>Compramos y vendemos skins</p>
          <a className="btn btn-primary" href="#">
            Contactarnos
          </a>
        </div>
      </div>
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <p className="text-white m-0">
            This call to action card is a great place to showcase some important
            information or display a clever tagline!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">AK-47 - ASSIIMOV</h4>
              <img src={assimov} alt=""/>
              <p className="card-text">$13000</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary btn-sm">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
