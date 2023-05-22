// data-aos="zoom-out-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000"

Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div class="card" v-for="panel in panels">
            <a v-if="panel.link && panel.image" v-bind:href="panel.link" target="_blank">
            
            <div class="card-body">
                <a>{{ panel.name }}</a>
                <p v-html = "panel.description"></p>
            </div>
            <div data-aos="fade-up" class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            </a>
            <a v-if="!panel.link">
            <div class="card-body">
                <a>{{ panel.name }}</a>
                <p v-html = "panel.description"></p>
            </div>
            <div data-aos="fade-up" class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
            </a>
        </div>
    </div>`
});

let app2 = new Vue(
{
    el: '#math-grid',
    data:
    {
        items: [

            {
                name: 'Ross Mathematics Program',
                description: "I first became interested in math research at the 2022 Ross Program. As a Junior Counselor, I self-explored number theory and took advanced courses in Ergodic Ramsey theory and set theory. When the program ended, I wanted to continue exploring math deeply, and research gave me that opportunity.",
                image: "rossjc.jpg"
            },

            {
                name: 'Knot Theory Research: Multi-crossing Knot Projections',
                description: "After reading Colin Adams' The Knot Book, I became interested in researching knot theory. I reached out to Professor Adams, and he introduced me to the study of multi-crossing knot projections. Only inequalities for the 3-, 4-, and 5- crossing number were previously known. I discovered and proved the 4th such inequality. On the left is my talk at the 2022 MAA NJ Section conference.",
                image: "njmaa.jpg"
            },

            {
                name: 'Knot Theory Research: Games on Rational Knots',
                description: "In addition, I'm interested in the intersection between game theory and knot theory. I have been working with Neel Kolhe, Chengze Li, and Eric Tang under the guidance of Professor Allison Henrich and Professor Eric Rawdon to study games on rational knots. On the right is our poster at the 2023 Joint Mathematics Meetings.",
                image: "jmmposter.jpg",
            },

            {
                name: 'Joint Mathematics Meetings',
                description: "I also gave a contributed talk at the 2023 JMM on my research for multi-crossing knot projections. My paper \"Strict inequalities for the n-crossing number\" has been published in the Journal of Knot Theory and Its Ramifications.",
                image: "jmmtalk.jpeg"
            },

            {
                name: 'MIT PRIMES-USA',
                description: "Currently, I'm researching the geometry of 2-manifolds in the PRIMES program. I began by studying hyperbolic geometry in the reading phase; I have now transitioned to the active research phase.",
                image: "MIT-PRIMES-logo-new.png"
            },

            {
                name: 'International Science and Engineering Fair',
                description: "After competing in the Mercer Science and Engineering Fair, I became an ISEF finalist. I presented my multi-crossing knot projection research at the 2023 Regeneron ISEF in Dallas, Texas. I won the 2nd place Grand Prize in mathematics.",
                image: "isef_grand2.png"
            },
            
        ]
    }
});

let prog = new Vue(
{
    el: '#prog-grid',
    data:
    {
        items: [

            {
                name: 'Princeton Competitive Programming Team',
                description: "I'm interested in the theory of computation, an intersection between computer science and math. As co-founder of Princeton's Competitive Programming Team, I teach competitive programming to members and compete in national tournaments. Our team placed 1st at Lockheed Martin's CodeQuest competition.",
                image: "code-quest.jpg"
            },

            {
                name: 'hackPHS',
                description: "I've also explored computer science through hackathons. After winning hackPHS in 2021, I became a financial officer for hackPHS. In 2022, hackPHS had over 100 contestants from all across New Jersey, New York, and Maryland.",
                image: "hackphs.jpg"
            },
            
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