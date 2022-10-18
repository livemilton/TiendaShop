import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos">Ultimos Productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*producto1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/producto_1.png' alt="Urinary Care"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Urinary Care</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$50.000</p><a href='#http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Producto_2.jfif' alt="Comfort cat"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Comfort cat</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 2 reviews</span>
                            </div>
                            <p className='card-text'>$35.000</p><a href='#http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>

                 {/*producto 3*/}
                 <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Producto_3.png' alt="Digestive Care"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Digestive Care</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 4 reviews</span>
                            </div>
                            <p className='card-text'>$100.000</p><a href='#http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*producto 4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Producto_4.jfif' alt="Carne"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Carne</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 10 reviews</span>
                            </div>
                            <p className='card-text'>$125.000</p><a href='#http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </Fragment>
  )
}

export default Home