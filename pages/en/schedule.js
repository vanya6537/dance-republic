import React, {useState} from "react";
import {isMobile} from "react-device-detect";
import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function SchedulePage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title="Schedule" description="Schedule" formState={{showModal, toggleModal}}>
            <Container padding minHeight={`calc(100vh - ${isMobile ? "58" : "81"}px)`}>
                <h1>Schedule</h1>
                <p>{ORG_NAME}</p>
                <div className="entry">

                    <h1 className="page-title">Opening Hours</h1>


                    <p>You can book private dance lessons during these hours, or join one of our classes.</p>
                    <br/><strong>Monday</strong>: Studio closed – enquiries only<br/>
                    <strong>Tuesday</strong>: 13:00 – 22:15<br/>
                    <strong>Wednesday</strong>: 13:00 – 22:15<br/>
                    <strong>Thursday</strong>: 13:00 – 22:15<br/>
                    <strong>Friday</strong>: 13:00 – 22:15<br/>
                    <strong>Saturday</strong>: 11:00 – 20:00<br/>
                    <strong>Sunday</strong>: 11:00 – 20:00<br/>
                    <br/>
                    <br/>
                    <h3>Technical group dancing lessons</h3>
                    <br/><strong>Monday</strong>: Studio closed – enquiries only<br/>
                    <strong>Tuesday</strong>: 19:15 to 20:00 (Advanced Ballroom) / 20:00 to 20:45 (Advanced
                    Latin)<br/>
                    <strong>Wednesday</strong>: 20:00 to 20:45 (Standard Level)<br/>
                    <strong>Thursday</strong>: 19:15 to 20:00 (Standard Level)<br/>
                    <strong>Friday</strong>: No scheduled classes<br/>
                    <strong>Saturday</strong>: 11:00 to 12:00 (Advanced Ballroom) / 12:00 to 13:00 (Advanced Latin)
                    / 17:00 to 18:00 (Standard Level)<br/>
                    <strong>Sunday</strong>: No scheduled classes<br/>

                </div>
            </Container>
            <Footer/>

        </Page>


    )
}