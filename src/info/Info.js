import self from "../img/self.png"
import mock1 from "../img/mealsapp.jpeg"
import mock2 from "../img/teams.jpeg"
import mock3 from "../img/reactinfosite.jpeg"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sekamatte",
    lastName: " Soul Solomon",
    initials: "SSS", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Junior Front End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by curiosity'
        },
        {
            emoji: '🌎',
            text: 'based in Uganda'
        },
        {
            emoji: "💼",
            text: "Student at Uganda Christian University"
        },
        {
            emoji: "📧",
            text: "sekamattesoul@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/SoulSolomon21",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/sekamatte-soul-solomon-900682237/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/SekamatteSoul",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Soul. I'm a junior Frontend developer. I'm a computer science student at Uganda Christian University Mukono, I enjoy reading novels, I like asking questions . You should get in touch",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'java', 'MySQL']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'baking',
            emoji: '👩🏿‍🍳'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Meals App",
            live: "https://thesoulsolomon.tech", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/SoulSolomon21/meals-app", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Team Member Allocation",
            live: "https://lighthearted-fairy-3f0802.netlify.app/",
            source: "https://github.com/SoulSolomon21/Team-member-allocation",
            image: mock2
        },
        {
            title: "React info page",
            live: "https://euphonious-sable-fc937c.netlify.app/",
            source: "https://github.com/SoulSolomon21/React-info-site",
            image: mock3
        }
    ]
}