Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div class="card" v-for="panel in panels">
            <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            <div class="card-body" data-aos="zoom-out-down" data-aos-anchor-placement="bottom-bottom">
                <a v-bind:href="'https://'+panel.link" target="_blank" v-if="panel.link">{{ panel.name }}</a>
                <a v-if="!panel.link">{{ panel.name }}</a>
                <p v-html = "panel.description"></p>
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
                description: "Vice President of international 501(c)(3) that hosts middle-school math competitions in over 20 chapters across 5 countries and 12 states.",
                link: 'absval.org/'
            },
            {
                name: 'Knot Theory Research',
                description: "In the study of n-crossing knot diagrams, only inequalities for the 2-, 3-, 4-, and 5- crossing number had been known. Discovered and proved the 5th such inequality. Research advised by Colin Adams of Williams College.",
            },
            {
                name: 'Princeton Speech & Debate',
                description: "Competes on Princeton's Varsity Public Forum debate team. 3rd place at New Jersey’s 2022 State Championships.",
                link: 'phsdbteam.com/'
            },
            {
                name: 'Ross Mathematics Program',
                description: "Selected as a Junior Counselor at the Ross Mathematics Program, the oldest summer math program for high-schoolers in the US. Self-explored number theory and ramsey theory, graded participant sets, and lead problem review sessions.",
                link: 'rossprogram.org/'
            },
            {
                name: 'PHS Competitive Programming Team',
                description: "Co-founder. Teaches competitive programming to members and competes in national tournaments. Won 2nd place at Lockheed Martin's CodeQuest competition.",
                link: 'phscpt.github.io/'
            },
            {
                name: 'NJ Governor\'s STEM Scholars Program',
                description: "Selected as the one of the top 100 STEM students in New Jersey. Currently completing a year-long research project in the program.",
                link: 'govstemscholars.com/'
            },
            {
                name: 'Ideas Center',
                description: "Leader on the Ideas Center Board and volunteer tutor at Princeton High School tutoring center. March 2022 \“Tutor of the Month.\”",
                link: 'princetonk12.org/princeton-high-school/students/ideas-center'
            },
            {
                name: 'π & AI',
                description: "Co-president of π & AI, which runs weekly math and programming circles at local middle school and library. Earned $600 cash funding from America's Promise Alliance.",
                link: 'princetonlibrary.libnet.info/event/7252938'
            },
            {
                name: 'Princeton HR Insight LLC',
                description: "Head of Marketing for Princeton HR Insight LLC. Create marketing videos viewed by thousands of customers and potential customers.",
                link: 'princetonhrinsight.com/'
            }
        ]
    }
});

let achievements = new Vue({
    el: '#achievements-grid',
    data: {
        items: [
            {
                name: "Competitive Programming",
                description: "2nd place at Lockheed Martin\'s CodeQuest. 2nd place at University of Philidelphia\'s Philidelphia Classic",
            },
            {
                name: "Hackathons",
                description: "1st place at hackPHS 2021. Best in Data Visualization at PantherHack 2021",
            },
            {
                name: "Writing",
                description: "Finalist of the “Imagination Begins with You…” 12th Annual High School Writing Contest. Published in the 2022 “One Spark” short story collection. Over 350 competitors from 40 states",
            },
            {
                name: "Mathematics",
                description: "Accepted to present research at the 2023 Joint Mathematics Meetings. Accepted to Program in Algebraic and Combinatorial Thinking.",
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