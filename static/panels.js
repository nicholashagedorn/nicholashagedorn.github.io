// data-aos="zoom-out-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000"

Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div class="card" v-for="panel in panels">
            <a v-if="panel.link" v-bind:href="panel.link" target="_blank">
            <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            <div class="card-body">
                <a>{{ panel.name }}</a>
                <p v-html = "panel.description"></p>
            </div>
            </a>
            <div v-if="!panel.link">
            <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            <div class="card-body">
                <a>{{ panel.name }}</a>
                <p v-html = "panel.description"></p>
            </div>
            </div>
        </div>
    </div>`
});

let app2 = new Vue(
{
    el: '#experience-grid',
    data:
    {
        items: [
            {
                name: 'Absolute Value',
                description: "Vice President of international 501(c)(3) that hosts middle-school math competitions in over 20 chapters across 5 countries and 12 states. Recognized by Art of Problem Solving as one of the 25 national middle school competitions.",
                link: 'https://absval.org/',
                image: "absval.webp"
            },
            {
                name: 'Knot Theory Research',
                description: "In the study of n-crossing knot diagrams, only inequalities for the 2-, 3-, 4-, and 5- crossing number had been known. Discovered and proved the 5th such inequality. Research advised by Colin Adams of Williams College.",
                link: `https://www.jointmathematicsmeetings.org/meetings/national/jmm2023/2270_intro`,
                image: "njmaa.jpg"
            },
            {
                name: 'Princeton Speech & Debate',
                description: "Officer. Competes on Princeton's Varsity Public Forum debate team. Teaches novices and junior varsity members. 3rd place overall in Varsity Public Forum at New Jersey’s 2022 State Championships and #1 sophomore in NJ.",
                link: 'http://phsdbteam.com/',
                image: "njsdl.jpg"
            },
            {
                name: 'Ross Mathematics Program',
                description: "Selected as a Junior Counselor at the Ross Mathematics Program, the oldest summer math program for high-schoolers in the US. Self-explored number theory and ramsey theory, graded participant sets, and lead problem review sessions.",
                link: 'https://rossprogram.org/',
                image: "rossjc.jpg"
            },
            {
                name: 'PHS Competitive Programming Team',
                description: "Co-founder. Teaches competitive programming to members and competes in national tournaments. Won 2nd place at Lockheed Martin's CodeQuest competition.",
                link: 'https://phscpt.github.io/',
                image: `cpt.JPG`
            },
            {
                name: 'NJ Governor\'s STEM Scholars Program',
                description: "Selected as the one of the top 100 STEM students in New Jersey. Currently completing a year-long research project in the program.",
                link: 'https://govstemscholars.com/'
            },
            {
                name: 'Ideas Center',
                description: "Leader on the Ideas Center Board and volunteer tutor at Princeton High School tutoring center. March 2022 \“Tutor of the Month.\”",
                link: 'https://princetonk12.org/princeton-high-school/students/ideas-center'
            },
            {
                name: 'π & AI',
                description: "Co-president of π & AI, which runs weekly math and programming circles at local middle school and library. Earned $600 cash funding from America's Promise Alliance.",
                link: 'https://princetonlibrary.libnet.info/event/7252938',
                // image: 'piailogo.jpg'
            },
            {
                name: 'Princeton HR Insight LLC',
                description: "Head of Marketing for Princeton HR Insight LLC. Create marketing videos viewed by thousands of customers and potential customers.",
                link: 'https://princetonhrinsight.com/'
            }
        ]
    }
});


let footer = new Vue({
    el: '#footer',
    data:
    {
        currentYear: new Date().getUTCFullYear()
    }
});