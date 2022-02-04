import React, { Component } from 'react';
import styles from './gastonLuga.module.scss';

class GastonLuga extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <div className={ styles.title }>
                        <div className={ styles.square }></div>
                        <p>GastonLuga</p>
                    </div>
                    <img src="https://i.ibb.co/sKsYcwz/image.jpg" />
                    <div className={ styles.subtitle }>
                        <h1>The Story</h1>
                        <div className= { styles.line }></div>
                        <img src="https://i.ibb.co/qnt5crn/2021-08-29-07-42-45.png" />
                        <h5>Gaston Luga was created with a vision to carry your life in effortless style: a vision we are continuously striving to achieve. Founded in Stockholm, we are a producer of quality backpacks and accessories inspired by Scandinavian design and living.</h5>
                    </div>
                    <div className={ styles.subtitle }>
                        <h1>UI / UX / Web Design</h1>
                        <div className= { styles.line }></div>
                            <h6>Redesign the website with customers in mind.</h6>
                            <h5>An eye-catching, impressive, concise and powerful introduction are the key elements for a good product landing page. Immersive page design leads consumers to making purchases and increasing the conversion rate of website visitors.</h5>
                            <div className= { styles.buttonwrap}>
                            <a href="https://gastonluga.com/" className= { styles.button }><p>Visit website</p></a>
                        </div>
                    </div>
                    <div className={ styles.subtitle }>
                        <h1>Graphic Design</h1>
                        <div className= { styles.line }></div>
                        <h6>Deliver brand image through visual communication.</h6>
                        {/* <h5>Deliver brand image through visual communication.</h5> */}
                            <section className={ styles.gallery }>
                                <img src="https://i.ibb.co/xqMtRtq/2021-08-29-07-54-41.png" />
                                <img src="https://i.ibb.co/Bsy27N6/2021-08-29-06-08-41.png" />
                            </section>
                    </div>
                    <div className={ styles.subtitle }>
                        <h1>Photography</h1>
                        <div className= { styles.line }></div>
                        <h6>The story teller of the brand.</h6>
                        <h5>When a certain brand image is established, except for keeping consistent with the brand strategy, the product images with strong sales atmosphere will increase the click-through rate and conversion rate. One important aspect of my work is to be able to integrate the product into the campaign as well as the brand image.</h5>
                            <section className={ styles.gallery }>
                                <img src="https://i.ibb.co/B2DrYsF/18bf2a-a64ed381e64d4e1db700efe3cb423de6-mv2.jpg" />
                                <img src="https://i.ibb.co/yn1VBTn/gastonluga-spring.jpg" />
                                <img src="https://i.ibb.co/fDK5dk9/gastonluga-summer.jpg" />
                                <img src="https://i.ibb.co/370WGB3/18bf2a-8a1e25f07c254d2cbd7f17bd5c3940fc-mv2.jpg" />
                            </section>
                    </div>
                    <div className={ styles.subtitle }>
                        <h1>What's more?</h1>
                        <div className= { styles.line }></div>
                        <h6>A key to building a strong brand identity is to have an intimate understanding of the brand.</h6>
                        <h5>To approach my design strategically, I work closely with our marketing team to ensure the images can deliver the brand values and be consistent with the business direction. To achieve this, I have several continuous management-related tasks:
                        <br />- Website management through Magento2;
                        <br />- Campaign implementation for 11 stores - Design of Tmall store, China's largest e-commerce platform;
                        <br />- Working together with and leading the creative team to produce an effective design;
                        <br />- Facebook / Instagram advertisement design;</h5>
                    </div>
                </section>
            </div>
        )
    }
}

export default GastonLuga;
