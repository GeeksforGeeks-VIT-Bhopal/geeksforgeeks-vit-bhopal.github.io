interface Member {
  name: string;
  image: string;
  position: string;
  links: {
    instagram: string | null;
    linkedin: string | null;
  };
}

const team: Member[] = [
  {
    name: "Nishant",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/nishant.jpeg",
    position: "Chairperson",
    links: {
      instagram: "https://www.instagram.com/nishdrummer/",
      linkedin: "https://www.linkedin.com/in/amnishant/",
    },
  },
  {
    name: "Hardik",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/hardik.jpeg",
    position: "Vice-Chairperson",
    links: {
      instagram: "https://www.instagram.com/_ye.bhi.thik.hai_/",
      linkedin: "https://www.linkedin.com/in/hardikkr/",
    },
  },
  {
    name: "Ankit",
    image: "",
    position: "Secretary",
    links: {
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Kritika Shah",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/kritika.jpeg",
    position: "Technical Head",
    links: {
      instagram: "https://www.instagram.com/_kritika.shah/",
      linkedin: "https://www.linkedin.com/in/kritika-shah-631006181/",
    },
  },
  {
    name: "Smit Barmase",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/smit.jpg",
    position: "Technical Co-head",
    links: {
      instagram: "https://www.instagram.com/smitbarmase",
      linkedin: " https://www.linkedin.com/in/smitbarmase/",
    },
  },
  {
    name: "Aishwar Govil",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/aishwar.jpg",
    position: "Events Head",
    links: {
      instagram: "https://www.instagram.com/aishwargovil/",
      linkedin: "https://www.linkedin.com/in/aishwar-govil-144b621a6/",
    },
  },
  {
    name: "Mohajit Paul",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/mohajit.jpeg",
    position: "Events Co-head",
    links: {
      instagram: "https://instagram.com/mohahajit?igshid=1h0yswildi10r",
      linkedin: "http://linkedin.com/in/mohajit-paul-89434a201",
    },
  },
  {
    name: "Khushi Guptaa",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/khushi.jpg",
    position: "Marketing Head",
    links: {
      instagram: "https://www.instagram.com/_khushii21/",
      linkedin: "https://www.linkedin.com/in/khushii-guptaa-a13853192/",
    },
  },
  {
    name: "Ansh Raizada",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/ansh.jpg",
    position: "Marketing Co-head",
    links: {
      instagram: "https://www.instagram.com/ansh_82881/",
      linkedin: "https://www.linkedin.com/in/ansh-raizada-41046113a/",
    },
  },
  {
    name: "Manglam Tripathi",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/manglam.jpg",
    position: "PR & Outreach Head",
    links: {
      instagram: "https://www.instagram.com/_manglam_tripathi_/",
      linkedin: "https://www.linkedin.com/in/manglam-tripathi-351a5018b/",
    },
  },
  {
    name: "Mahika Agrawal",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/mahika.jpeg",
    position: "PR & Outreach Co-head",
    links: { instagram: "https://www.instagram.com/mahikkaaa", linkedin: null },
  },
  {
    name: "Ayushmaan Singh Rajput",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/ayushmaan.jpg",
    position: "Social Media Head",
    links: {
      instagram: "https://www.instagram.com/ohh_hmmm/",
      linkedin: "https://www.linkedin.com/in/ayushmaan-singh-rajput-451669141/",
    },
  },
  {
    name: "Tejaswini Johri",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/tejaswini.jpg",
    position: "Social Media Co-head",
    links: {
      instagram: "https://instagram.com/tejaswinijohri?igshid=v29pdphy4c31",
      linkedin: "https://www.linkedin.com/in/tejaswini-johri-4688931ba",
    },
  },
  {
    name: "Laavart",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/laavart.jpg",
    position: "Design & Branding Head",
    links: {
      instagram: "https://www.instagram.com/jaadu_s_ra_s_al_ghul/",
      linkedin: "https://www.linkedin.com/in/laavart-laavart-b54835169/",
    },
  },
  {
    name: "Abhay Singh Rana",
    image:
      "https://raw.githubusercontent.com/GeeksforGeeks-VIT-Bhopal/geeksforgeeks-vit-bhopal.github.io/main/src/images/team/abhay.jpg",
    position: "Design & Branding Co-head",
    links: {
      instagram: "https://www.instagram.com/iiabhayii/",
      linkedin: "https://www.linkedin.com/in/abhay-singh-rana-aa2185202/",
    },
  },
  {
    name: "Aryan",
    image: "",
    position: "Content Head",
    links: {
      instagram: "",
      linkedin: "",
    },
  },
  {
    name: "Sumedha",
    image: "",
    position: "Content Co-head",
    links: {
      instagram: "",
      linkedin: "",
    },
  },
];
export default team;
