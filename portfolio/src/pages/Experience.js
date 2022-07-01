import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}

                >
                    <h3 className="vertical-timeline-element-title">
                        V.E.T School , SSLC .
                        Bengaluru
                    </h3>
                    <p> Percentage: 81.51%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017-2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}

                >
                    <h3 className="vertical-timeline-element-title">
                        VCPUC , SENIOR SECONDARY (XII) , Bengaluru



                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Percentage: 90.16%
                    </h4>


                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019-2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}

                >
                    <h3 className="vertical-timeline-element-title">
                        Global Academy of Technology , B.Tech (Computer Science and Engineering) .
                        Bengaluru
                    </h3>
                    <p> Pursuing</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Experience;