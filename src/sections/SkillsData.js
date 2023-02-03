//BAR CHART
const labels = [
    "Javascript",
    "React",
    "CSS / HTML",
    "Python",
    "ExpressJS",
    "No SQL",
    "SQL"
];
export const data = {
labels: labels,
datasets: [{
label: 'My strongest languages',
data: [100, 100, 95, 90, 90, 80, 70],
backgroundColor: [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)'
],
borderColor: [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)'
],
borderWidth: 1
}]
};
export const setting = {
  scales: {
    y: {
      title: "Mastery"
    }
}
};

//AUTOCOMPLETE
export const options=[
    {label: "Javascript", mastery:100
    , description: "Javascript is my favourite language, I have years of experience using it in backends and frontends."
},
    {label: "Css", mastery: 90,
    description: "When it comes to applying a design, I perform extremely well, but in order to make my own, good looking UI's, I usually resort to libraries"
},
    {label: "React", mastery: 100
    ,description: "I love using React with material UI to build projects quickely. I am a react enjoyer and plan to stay one !"
},
    {label: "ExpressJs", mastery: 100,
    description: "I used to use Flask and the syntax is similar. I used expressJS for many side projects."
},
    {label: "No SQL (mongodb)", mastery: 80,
    description: "I have used mongodb to store data for hackathons and used it in a website to store and query quotes."
  },
    {label: "SQL", mastery: 70,
    description: "I have used SQL with Oracle in my McGill intership to keep track of expensive physics lab equipement"
  },
    {label: "C#", mastery: 60,
    description: "I have built a mini game in a hackathon with C# and Unity. I also used C# for personnal use desktop apps such as storyboard for pratice"
  },
    {label: "C++", mastery: 70,
    description: "I used C++ mainly for competitive programming, where its execution speed and community were very usefull."
  },
    {label: "Python", mastery: 90,
    description: "I used python to make a little bit of everything. Mini games with pygames, backends with flask and data visualisation with pandas."
  },
    {label: "Excel / vba", mastery: 70,
    description: "I used Excel in many labs, using macros and complex functions to animate physical effects, such as spread of thermal energy and electrical attraction."
  },
    {label: "GraphQL", mastery: 20,
    description: "I studied graphQL but never used it practically. I'm interested in building something with it in the future"
  }
]