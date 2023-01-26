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
                description: "I first became interested in mathematical research at the 2022 Ross Program. As a Junior Counselor, I self-explored number theory and took advanced courses in Ergodic Ramsey theory and set theory. When the program ended, I wanted to continue exploring math deeply, and research gave me that opportunity.",
                image: "rossjc.jpg"
            },

            {
                name: 'Knot Theory Research: Multi-crossing knot projection',
                description: "After reading Colin Adams' The Knot Book, I became interested in researching knot theory. I reached out to Professor Adams, and he introduced me to the study of multi-crossing knot projections. Only inequalities for the 2-, 3-, 4-, and 5- crossing number were previously known. I discovered and proved the 5th such inequality. On the left is my talk at the 2022 MAA NJ Section conference.",
                image: "njmaa.jpg"
            },

            {
                name: 'Knot Theory Research: Games on rational knots',
                description: "I'm also interested in the intersection between game theory and knot theory. I have been working with Neel Kolhe, Chengze Li, and Eric Tang under the guidance of Professor Allison Henrich and Professor Eric Rawdon to study games on rational knots. On the right is our poster at the 2023 Joint Mathematics Meetings.",
                image: "jmmposter.jpg"
            },

            {
                name: 'Joint Mathematics Meetings',
                description: "I also gave a contributed talk at the 2023 JMM on my research for multi-crossing knot projections. My paper is available on the arXiv.",
                image: "njmaa.jpg"
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
                description: "I'm also interested in the theory of computation, an intersection between computer science and math. As co-founder of Princeton's Competitive Programming Team, I teach competitive programming to members and compete in national tournaments. Our team placed 2nd place at Lockheed Martin's CodeQuest competition.",
                link: 'https://phscpt.github.io/',
                image: "cpt.JPG"
            },

            {
                name: 'hackPHS',
                description: "I've also explored computer science through hackathons. After winning hackPHS in 2021, I became a finanical officer for hackPHS. In 2022, hackPHS had over 100 contestants from all across New Jersey, New York, and Maryland.",
                link: 'https://hackphs.tech/',
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