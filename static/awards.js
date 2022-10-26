let programming = new Vue({
    
    el: '#all-awards',
    data: {
        items: [
            // programming
            {
                name: "Lockheed Martin\'s National CodeQuest",
                description: "Second Place",
                year: "2022"
                
            },


            {
                name: "University of Philidelphia\'s Philidelphia Classic (Programming Competition)",
                description: "Second Place",
                year: "2022"
            },

            {
                name: "HackPHS",
                description: "First Place",
                year: "2021"
            },

            {
                name: "PantherHack",
                description: "Best in Data Visualization",
                year: "2021"
            },

            // math

            {
                name: "Joint Mathematics Meetings",
                description: "Accepted to give talk on original n-crossing knot theory research",
                year: "2022"
            },

            {
                name: "Mathematical Association of America's New Jersey Section",
                description: "Gave contributed talk on research to undergraduates & professors. Only high school student accepted",
                year: "2022"
                
            },

            // writing

            {
                name: "“Imagination Begins with You…” 12th Annual High School Writing Contest",
                description: "Finalist. Published in the 2022 “One Spark” Short Story Collection",
                year: "2022"
            },

            // debate
            
            {
                name: "New Jersey Speech and Debate League State Championship",
                description: "Third Place",
                year: "2022"
            },
            
            {
                name: "Pennsbury Falcon Debate Invitational",
                description: "First Place",
                year: "2022"
            },
            
            {
                name: "California Sate Fullerton Debate Invitational",
                description: "10th Individual Speaker of 226 Public Forum Debators",
                year: "2022"
            },

            // programs

            {
                name: "NJ Governor\'s STEM Scholars Program",
                description: "Selected as the one of the top 100 STEM students in New Jersey.",
                year: "2022"
            },

            {
                name: "Program in Algorithmic and Combinatorial Thinking",
                description: "Accepted to PACT, a series of courses in theoretical computer science sponsored by the National Science Foundation",
                year: "2021"
            },

            // other work

            {
                name: "America's Promise Alliance",
                description: "Awarded $600 Grant for Community Service Project \"π & AI\"",
                year: "2021"
            },
            
        ]
    },
    computed: {
        sortedArray: function() {
          function compare(a, b) {
            if (a.year < b.year)
              return 1;
            if (a.year > b.year)
              return -1;
            if (a.name < b.name)
              return -1;
            if (a.name > b.name)
              return 1;
            return 0;
          }
      
          return this.items.sort(compare);
        }
      }      
});