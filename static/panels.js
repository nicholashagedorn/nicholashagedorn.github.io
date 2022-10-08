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

let app1 = new Vue(
{
    el: '#projects-grid',
    data:
    {
        projects: [
            {
                name: "USACO",
                description: "Solutions and explanations for competitive programming problems",
                link: "knosmos.github.io/usaco",
                image: "usaco.png"
            },
            {
                name: "Robowordle",
                description: "Using computer vision and a 3D printer to play a phone-based word game",
                link: "github.com/knosmos/robowordle",
                image: "wordle_thumb.png"
            },
            {
                name: "Set-Solve",
                description: "Playing the card game SET with computer vision",
                link: "github.com/knosmos/set-solve",
                image: "setsolve.png"
            },
            {
                name: "SudokuGen",
                description: "Sudoku puzzle PDF generator",
                link: "github.com/knosmos/sudoku-gen",
                image: "sudoku2.png"
            },
            {
                name: "TL;DS",
                description: "Math solver with OCR and handwriting capability",
                link: "github.com/knosmos/tlds",
                image: "tlds.jpg"
            },
            {
                name: "Rhythmvision",
                description: "Rhythm game with pose estimation",
                link: "knosmos.github.io/rhythmvision",
                image: "rhythmvision3.png"
            },
            {
                name: "Scribblebot",
                description: "contour-detecting autodraw bot",
                link: "github.com/knosmos/scribblebot",
                image: "scribblebot.png"
            },
            {
                name: "CMDPXL",
                description: "Terminal-based image editor",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            {
                name: "Tres",
                description: "The classic online multiplayer card game ripoff",
                link: "knosmos.github.io/tres",
                image: "tres.png"
            }
        ]
    }
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
                description: "Teaches competitive programming to members and competes in national tournaments. Won 2nd place at Lockheed Martin's CodeQuest competition.",
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
                description: "Achieved Gold ranking in USA Computing Olympiad<br>Won 2nd place at Lockheed Martin CodeQuest competition",
            },
            {
                name: "Hackathons",
                description: "HackPHS 2021: 1st Overall, Best Hardware Hack",
            },
            {
                name: "Mathematics Competitions",
                description: "PUMaC 2021: 1st (Team), Top 10 (Number Theory)<br><br>Qualified for AIME in 2021",
            },
            {
                name: "Violin",
                description: "Winner of Achievement (2022), Scholarship (2017) and Concerto (2019) competitions at Westminster Conservatory",
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