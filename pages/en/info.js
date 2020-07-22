import React, {useState} from "react";
import {isMobile} from "react-device-detect";
import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function InfoPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title="Info" description="Info" formState={{showModal, toggleModal}}>
            <Container padding minHeight={`calc(100vh - ${isMobile ? "58" : "81"}px)`}>
                <h1>Info</h1>
                <p>{ORG_NAME}</p>
                <div className="contactinfo">
                    <div className="contactinfo-inner">
                        <p>Karen Hardy Dance Studios</p>
                        <p className="phone">0207 731 7316</p>
                        <p className="email"><span><a
                            href="mailto:vanya6537@gmail.com">vanya6537@gmail.com</a></span>
                        </p>
                        <p className="address">10 The Boulevard, Imperial Wharf, London SW6 2UB</p>
                        <p className="addinfo"><span><a
                            href="#">Click here for our opening hours</a></span>
                        </p>
                    </div>
                </div>
                <div id="content" className="clearfix">


                    <div className="singlepage clearfix post-6251 page type-page status-publish" id="single-page-6251">

                        <div className="entry">

                            <h1 className="page-title">The Studios</h1>


                            <p>Established in 2008, Karen Hardy Dance Studios greets you with luxury and glamour the
                                moment you walk through the doors – from the Swarovski encrusted wallpaper and
                                chandeliers to the bespoke soft furnishings.</p>
                            <p><img className="alignnone size-full wp-image-6416"
                                    src="https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio1.jpg"
                                    alt="studio1"
                                    srcSet="https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio1.jpg 580w, https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio1-300x204.jpg 300w, https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio1-461x313.jpg 461w"
                                    sizes="(max-width: 580px) 100vw, 580px" width="580" height="394"/></p>
                            <p>Most people attending a class in the early days will find themselves really quite nervous
                                when it comes to stepping onto the dance floor – but we wanted to offer you more than
                                just a place to learn to dance. Our&nbsp;fully air-conditioned award winning studios
                                also offer:</p>
                            <ul>
                                <li>Sprung maple dance floor</li>
                                <li>A comfortable seating area</li>
                                <li>Champagne bar, including carefully selected wines and beers from around the world
                                </li>
                                <li>Complimentary Wi-Fi</li>
                                <li>Glorious waterfront location</li>
                                <li>A big screen showcasing everyones favourite ‘Strictly’ moments</li>
                                <li>Toilets and cloakroom facilities</li>
                                <li>State-of-the-art sound system and projection facilities</li>
                                <li>Concierge drop-off point, boat mooring pier and underground parking</li>
                            </ul>
                            <p><img className="alignnone size-full wp-image-6417"
                                    src="/wp-content/uploads/2014/01/studio2.jpg" alt="studio2"
                                    srcSet="https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio2.jpg 580w, https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio2-300x204.jpg 300w, https://www.karenhardystudios.com/wp-content/uploads/2014/01/studio2-461x313.jpg 461w"
                                    sizes="(max-width: 580px) 100vw, 580px" width="580" height="394"/></p>
                            <h3>Parking at Karen Hardy Dance Studios</h3>
                            <p>NCP Car Parking is available at Imperial Wharf, SW6.</p>
                            <p>Between Monday and Saturday, the first two hours of parking costs £4, then £2 for every
                                additional hour. Parking for a 24-hour period costs £26.50. Sundays between 07:00 and
                                19:00, parking costs £4.50 per visit.</p>
                            <p>We can validate car park tickets here at the studio, weekdays between 18:00 and 24:00 and
                                weekends between 09:00 and 00:00.</p>
                            <p>You must arrive and park between these times in order to have your ticket validated. If
                                your car park ticket reads 17:59 on a weekday, it cannot be validated.</p>


                        </div>

                    </div>


                </div>
            </Container>
            <Footer/>


        </Page>


    )
}