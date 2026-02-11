export const personalInfo = {
  name: "Hyunwoo Oh",
  nameKo: "오현우",
  title: "Senior AI Solution Engineer",
  company: "Weights & Biases",
  tagline: "ML Engineer | Reinforcement Learning Researcher",
  email: "tinkerrman@gmail.com",
  location: "Seoul, South Korea",
  links: {
    linkedin: "https://www.linkedin.com/in/hyunwoo-oh-461462153",
    github: "https://github.com/hw-oh",
  },
};

export const education = [
  {
    degree: "M.S.",
    field: "Applied Computer Science",
    school: "The University of Tokyo",
    location: "Tokyo, Japan",
    period: "Apr 2017 - Mar 2019",
    thesis:
      "Reinforcement Learning with Recurrent Neural Networks and Attention",
    lab: "Research Group of Game AI",
  },
  {
    degree: "B.A.",
    field: "College of Engineering Systems",
    school: "University of Tsukuba",
    location: "Tsukuba, Japan",
    period: "Apr 2013 - Mar 2017",
    thesis:
      "A Study on Identifying the Rush Strategies in Real-Time Strategy Game Logs",
    lab: "NLP Laboratory",
  },
];

export const experiences = [
  {
    company: "Weights & Biases",
    location: "San Francisco, CA, United States",
    role: "Senior AI Solution Engineer",
    period: "2024 - Present",
    description:
      "Lead both pre-sales and post-sales engagements at Korea AI market.",
    highlights: [
      "Rebuilt and expanded enterprise relationships generating $000K+ in total revenue across new and renewal deals.",
      "Founded the Horangi Leaderboard, Korea's leading LLM leaderboard adopted by large enterprises.",
      "Led numerous meetups and workshops, enhancing W&B's presence in Korea's enterprise AI ecosystem.",
    ],
  },
  {
    company: "NAVER",
    location: "Seongnam, South Korea",
    role: "Machine Learning Engineer",
    period: "2021 - 2024",
    description:
      "Hyper-Personalized Search Team at Search & Discovery Group. Contributed as a hands-on coder, supported developers using pipeline.",
    highlights: [
      "Built an online machine learning pipeline from scratch.",
      "Solved optimization problems using reinforcement learning.",
      "Applications in the search & recommendation systems of NAVER.",
      "Optimized ranking algorithms of NAVER search.",
    ],
  },
  {
    company: "VUNO Inc.",
    location: "Seoul, South Korea",
    role: "Deep Learning Researcher → Team Leader",
    period: "2019 - 2021",
    description:
      "Brain Team at VUNO Research AI. Contributed as a hands-on coder, managed team and strategy.",
    highlights: [
      "VUNO Med - DeepBrain: Developed brain region segmentation and Alzheimer's disease classification models.",
      "PROMISE-I: Developed prostate segmentation and classification models.",
      "Optimized AI inference speed and supported clinical trials.",
      "Developed product API code for medical AI products.",
    ],
  },
];

export const skills = {
  frameworks: ["PyTorch", "TensorFlow", "PySpark", "Spark"],
  languages: ["Python", "Scala", "SQL"],
  spoken: [
    { lang: "Korean", level: "Native", flag: "🇰🇷" },
    { lang: "Japanese", level: "Advanced", flag: "🇯🇵" },
    { lang: "English", level: "Conversational", flag: "🇺🇸" },
  ],
  interests: [
    "Machine Learning",
    "Reinforcement Learning",
    "Contextual Bandit",
  ],
};

export const projects = [
  {
    title: "Horangi Leaderboard",
    description:
      "Korea's leading LLM leaderboard adopted by large enterprises. Founded and operated at Weights & Biases.",
    tags: ["LLM", "Evaluation", "Leaderboard", "W&B"],
  },
  {
    title: "VUNO Med - DeepBrain",
    description:
      "MRI-based automatic brain region segmentation and Alzheimer's disease diagnosis AI.",
    tags: ["Medical AI", "Segmentation", "Classification", "PyTorch"],
  },
  {
    title: "PROMISE-I",
    description:
      "Prostate MRI automatic analysis AI with segmentation and classification pipeline.",
    tags: ["Medical AI", "Clinical Trial", "Deep Learning"],
  },
  {
    title: "NAVER Search Optimization",
    description:
      "RL/Contextual Bandit based search ranking optimization for NAVER's hyper-personalized search.",
    tags: ["Reinforcement Learning", "Search", "Ranking", "PySpark"],
  },
  {
    title: "Kaggle - COVID-19 Detection",
    description:
      "SIIM-FISABIO-RSNA COVID-19 Detection challenge. Result: Top 6% (Bronze medal).",
    tags: ["Kaggle", "Object Detection", "Medical AI"],
  },
];

export const publications = {
  journal: [
    {
      authors:
        'Kim, D. Y., <strong>Oh, H. W.</strong>, & Suh, C. H.',
      title:
        "Reporting Quality of Research Studies on AI Applications in Medical Images According to the CLAIM Guidelines in a Radiology Journal With a Strong Prominence in Asia.",
      venue: "Korean Journal of Radiology, 24(12), 1179.",
      year: 2023,
      note: "Co-first author",
      link: "https://kjronline.org/DOIx.php?id=10.3348/kjr.2023.1027",
    },
    {
      authors:
        'Park, H. Y., Shim, W. H., Suh, C. H., Heo, H., <strong>Oh, H. W.</strong>, Kim, J., ... & Kim, S. J.',
      title:
        "Development and validation of an automatic classification algorithm for the diagnosis of Alzheimer's disease using a high-performance interpretable deep learning network.",
      venue: "European Radiology, 33(11), 7992-8001.",
      year: 2023,
      link: "https://link.springer.com/article/10.1007/s00330-023-09708-8",
    },
    {
      authors:
        'Bae, J. B., Lee, S., Jung, W., Park, S., Kim, W., <strong>Oh, H.</strong>, ... & Kim, K. W.',
      title:
        "Identification of Alzheimer's disease using a convolutional neural network model based on T1-weighted magnetic resonance imaging.",
      venue: "Scientific Reports, 10(1), 22252.",
      year: 2020,
      link: "https://www.nature.com/articles/s41598-020-79243-9",
    },
  ],
  workshop: [
    {
      authors:
        '<strong>Oh, H. W.</strong>, Lee, D. S., Sung, J. K., Hong, E. K.',
      title:
        "Introduction Of MRI-based AI Model In Prediction Of MCI Conversion To Dementia: Could It Be A Key To Early Diagnosis Of Alzheimer's Disease?",
      venue: "Radiological Society of North America (RSNA), Chicago, USA.",
      year: 2021,
      note: "Co-first author",
      link: "https://dailybulletin.rsna.org/db21/index.cfm?pg=21mon06",
    },
    {
      authors: '<strong>Oh, H. W.</strong> et al.',
      title:
        "An Artificial Intelligence Framework for Analysis of Cognitive Impairment without Prior Knowledge.",
      venue: "Radiological Society of North America (RSNA), Chicago, USA.",
      year: 2020,
      link: "https://archive.rsna.org/2020/20014598.html",
    },
    {
      authors: '<strong>Oh, H. W.</strong>, & Kaneko, T.',
      title: "Deep recurrent Q-network with truncated history.",
      venue:
        "2018 Conference on Technologies and Applications of Artificial Intelligence (TAAI), pp. 34-39. IEEE.",
      year: 2018,
      link: "https://ieeexplore.ieee.org/document/8588473",
    },
    {
      authors: '<strong>Oh, H. W.</strong>, & Kaneko, T.',
      title: "Enhancement of DRQN by Training initial state of LSTM.",
      venue: "Game Programming Workshop 2018, Hakone, Japan.",
      year: 2018,
      link: "https://cir.nii.ac.jp/crid/1050574047089145984?lang=en",
    },
    {
      authors: 'Budianto, T., <strong>Oh, H. W.</strong>, & Utsuro, T.',
      title: "Learning to Identify Rush Strategies in StarCraft.",
      venue:
        "Entertainment Computing–ICEC 2018, Poznan, Poland, pp. 90-102. Springer.",
      year: 2018,
      link: "https://inria.hal.science/hal-01771286/file/978-3-319-66715-7_39_Chapter.pdf",
    },
    {
      authors: '<strong>Oh, H. W.</strong>, & Kaneko, T.',
      title: "Enhancements of Monte Carlo Tree Search for GVG-AI.",
      venue: "Game Programming Workshop 2017, Hakone, Japan.",
      year: 2017,
      link: "https://cir.nii.ac.jp/crid/1050292572095071360",
    },
    {
      authors:
        'Budianto, T., <strong>Oh, H. W.</strong>, Ding, Y., Long, Z., & Utsuro, T.',
      title:
        "Identifying Rush Strategies Employed in StarCraft II Using Support Vector Machines.",
      venue:
        "Entertainment Computing–ICEC 2017, Tsukuba, Japan, pp. 357-361. Springer.",
      year: 2017,
      link: "https://link.springer.com/chapter/10.1007/978-3-319-66715-7_39",
    },
    {
      authors:
        '<strong>Oh, H. W.</strong>, Budianto, T., Ding, Y., Long, Z., & Utsuro, T.',
      title:
        "Identifying the rush strategies in the game logs of the real-time strategy game StarCraft-II.",
      venue: "Training, 306.",
      year: 2017,
      link: "https://www.ai-gakkai.or.jp/jsai2017/webprogram/2017/pdf/448.pdf",
    },
  ],
};

export const awards = [
  {
    title: "Research of the Day",
    organization: "RSNA 2021",
    year: "2021",
    link: "https://dailybulletin.rsna.org/db21/index.cfm?pg=21mon06",
  },
  {
    title:
      "Korea Japan Joint Scholarship Program for Science and Engineering Students",
    organization: "13th batch",
    year: "2012 - 2017",
  },
];

export const activities = {
  associations: [
    {
      role: "Representative",
      org: "University of Tokyo Korean Student Association of Komaba Campus",
      period: "2018 - 2019",
    },
    {
      role: "Member",
      org: "University of Tokyo Korean Student Association",
      period: "2017 - 2019",
    },
    {
      role: "Representative",
      org: "University of Tsukuba Korean Student Association",
      period: "2015 - 2016",
    },
    {
      role: "Member",
      org: "University of Tsukuba Korean Student Association",
      period: "2012 - 2017",
    },
    {
      role: "Member",
      org: "Korean Student Association in Japan",
      period: "2014",
    },
  ],
  football: [
    { team: "FC 청춘", period: "2019 - Present" },
    { team: "FC VUNO", period: "2019 - 2021" },
    {
      team: "Korean Student Association Football Club of University of Tokyo",
      period: "2017 - 2019",
    },
    { team: "Tsukuba Korean Football Club", period: "2012 - 2019" },
  ],
};
