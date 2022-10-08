Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div class="card" v-for="panel in panels">
            <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            <div class="card-body">
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
                link: 'https://absval.org/'
            },
            {
                name: 'Knot Theory Research',
                description: "Abstract: In knot theory, a standard crossing in a knot diagram is where one strand passes over another. In 2012, Adams introduced $n$-crossing projections, which are knot diagrams where each crossing consists of $n$ intersecting strands. The $n$-crossing number of a knot $K$, denoted by $c_n(K)$, is defined as the smallest number of crossings a $n$-crossing projection of $K$ can contain. Inequalities between the $2$-, $3$-, $4$-, and $5$-crossing numbers have been previously established. We prove $c_9(K)\leq c_3(K)-2$ for all knots $K$ that are not the trivial, trefoil, or figure-eight knot. We then generalize this result to prove that $c_{13}(K) < c_{5}(K)$ for a certain set of classes of $5$-crossing knots. Finally, we examine the remaining classes of $5$-crossing knots for possible counter-examples.",
            },
            {
                name: 'Princeton Speech & Debate',
                description: "Competes on Princeton's Varsity Public Forum debate team. 3rd place at New Jersey’s 2022 State Championships.",
                link: 'sites.google.com/view/phsmathteam/home'
            },
            {
                name: 'Ross Mathematics Program',
                description: "Selected as a Junior Counselor at the Ross Mathematics Program, the oldest summer math program for high-schoolers in the US. Self-explored number theory and ramsey theory, graded participant sets, and lead problem review sessions.",
                link: 'https://rossprogram.org/'
            },
            {
                name: 'PHS Competitive Programming Team',
                description: "Co-founder. Teaches competitive programming to members and competes in national tournaments. Won 2nd place at Lockheed Martin's CodeQuest competition.",
                link: 'https://phscpt.github.io/'
            },
            {
                name: 'NJ Governor\'s STEM Scholars Program',
                description: "Selected as the one of the top 100 STEM students in New Jersey. Currently completing a year-long research project in the program.",
                link: 'https://www.govstemscholars.com/'
            },
            {
                name: 'Ideas Center',
                description: "Leader on the Ideas Center Board and volunteer tutor at Princeton High School tutoring center. March 2022 \“Tutor of the Month.\”",
                link: 'https://www.princetonk12.org/princeton-high-school/students/ideas-center'
            },
            {
                name: 'π & AI',
                description: "Co-president of π & AI, which runs weekly math and programming circles at local middle school and library. Earned $600 cash funding from America's Promise Alliance.",
                link: 'https://princetonlibrary.libnet.info/event/7252938'
            },
            {
                name: 'Princeton HR Insight LLC',
                description: "Head of Marketing for Princeton HR Insight LLC. Create marketing videos viewed by thousands of customers and potential customers.",
                link: 'https://www.princetonhrinsight.com/'
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
                description: "2nd place at Lockheed Martin\'s CodeQuest<br>2nd place at University of Philidelphia\'s Philidelphia Classic",
            },
            {
                name: "Hackathons",
                description: "1st place at hackPHS 2021<br>Best in Data Visualization at PantherHack 2021",
            },
            {
                name: "Writing",
                description: "Finalist of the “Imagination Begins with You…” 12th Annual High School Writing Contest. Published in the 2022 “One Spark” short story collection. Over 350 competitors from 40 states",
            },
            {
                name: "Mathematics",
                description: "Accepted to Program in Algebraic and Combinatorial Thinking",
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