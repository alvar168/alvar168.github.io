// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Soft, human-centered robots that work with people and in the real world.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-others",
          title: "Others",
          description: "Mentoring, service, outreach, and life outside the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/others/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "View or download my curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2025/03/26/plotly.html";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/05/01/tabs.html";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/29/typograms.html";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/28/post-citation.html";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/code-diff.html";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/echarts.html";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/chartjs.html";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/audios.html";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/24/videos.html";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/tables.html";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/07/04/diagrams.html";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/05/22/distill.html";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/10/20/math.html";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/07/15/code.html";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/05/15/images.html";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-am-happy-to-announce-i-am-joining-prof-laura-blumenschein-s-raad-lab-at-purdue-university-to-pursue-my-phd",
          title: 'I am happy to announce I am joining Prof. Laura Blumenschein’s RAAD Lab...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-graduate-research-fellowship-program-grfp-by-the-national-science-foundation",
          title: 'I have been awarded the Graduate Research Fellowship Program (GRFP) by the National...',
          description: "",
          section: "News",},{id: "news-our-paper-wrapping-haptic-displays-around-robot-arms-to-communicate-learning-has-been-awarded-as-the-2024-ieee-transactions-on-haptics-best-application-paper-award",
          title: 'Our paper “Wrapping haptic displays around robot arms to communicate learning” has been...',
          description: "",
          section: "News",},{id: "news-our-flexible-search-and-rescue-robot-was-featured-in-mit-news-a-flexible-robot-can-help-emergency-responders-search-through-rubble",
          title: 'Our flexible search-and-rescue robot was featured in MIT News: “A Flexible Robot Can...',
          description: "",
          section: "News",},{id: "news-i-am-pleased-to-announce-i-will-join-mit-lincoln-laboratory-as-a-research-intern-this-summer",
          title: 'I am pleased to announce I will join MIT Lincoln Laboratory as a...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-announce-i-have-successfully-defended-my-dissertation-design-control-and-usability-analysis-of-ubiquitous-haptic-interfaces-for-human-machine-interaction",
          title: 'I am happy to announce I have successfully defended my dissertation, “Design, Control,...',
          description: "",
          section: "News",},{id: "news-i-officially-graduated-from-purdue-university-with-my-ph-d-in-mechanical-engineering",
          title: 'I officially graduated from Purdue University with my Ph.D. in Mechanical Engineering! 🎓...',
          description: "",
          section: "News",},{id: "news-first-day-back-at-mit-lincoln-laboratory-now-as-a-postdoctoral-researcher-continuing-my-work-on-soft-continuum-robots-for-search-and-rescue",
          title: 'First day back at MIT Lincoln Laboratory, now as a Postdoctoral Researcher, continuing...',
          description: "",
          section: "News",},{id: "news-our-proposal-ice-ears-ice-cap-evertible-acoustic-reconnaissance-system-was-funded-by-ousw-r-amp-amp-e-125k-i-am-serving-as-pi-at-mit-lincoln-laboratory",
          title: 'Our proposal ICE-EARS: Ice Cap Evertible Acoustic Reconnaissance System was funded by OUSW...',
          description: "",
          section: "News",},{id: "news-i-joined-northeastern-university-as-a-postdoctoral-research-associate-working-again-with-prof-laura-blumenschein",
          title: 'I joined Northeastern University as a Postdoctoral Research Associate, working again with Prof....',
          description: "",
          section: "News",},{id: "news-our-paper-gotta-grow-fast-design-and-benchmarking-of-a-tip-mount-for-high-speed-vine-robots-was-published-in-ieee-robotics-and-automation-letters",
          title: 'Our paper “Gotta Grow Fast: Design and Benchmarking of a Tip Mount for...',
          description: "",
          section: "News",},{id: "news-our-search-and-rescue-vine-robot-work-was-featured-by-notre-dame-stories-and-nbc-fighting-for-robotic-search-and-rescue",
          title: 'Our search-and-rescue vine robot work was featured by Notre Dame Stories and NBC...',
          description: "",
          section: "News",},{id: "news-at-iros-2026-in-pittsburgh-presenting-our-paper-on-a-distributed-acoustic-localization-array-deployed-by-a-vine-robot-giving-an-invited-talk-at-the-soft-robot-manufacturing-and-testing-hackathon-and-co-organizing-the-hadr-workshop",
          title: 'At IROS 2026 in Pittsburgh: presenting our paper on a distributed acoustic localization...',
          description: "",
          section: "News",},{id: "news-i-joined-the-talking-robotics-podcast-to-talk-about-designing-soft-robots-for-human-and-environmental-interactions",
          title: 'I joined the Talking Robotics podcast to talk about designing soft robots for...',
          description: "",
          section: "News",},{id: "projects-micro-and-milifluidics",
          title: 'Micro and Milifluidics',
          description: "Early research in microfluidics, colloidal systems, and soft materials",
          section: "Projects",handler: () => {
              window.location.href = "/projects/micro-milifluidics.html";
            },},{id: "projects-modular-soft-haptic-displays-with-fluidic-logic-and-personalization",
          title: 'Modular Soft Haptic Displays with Fluidic Logic and Personalization',
          description: "Reconfigurable soft haptic interfaces with personalized signal design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/modular-haptic-display.html";
            },},{id: "projects-communicating-robot-learning-through-multimodal-feedback",
          title: 'Communicating Robot Learning through Multimodal Feedback',
          description: "Case study on state-of-the-art modalities for robots to convey learned behaviors to human teachers during interaction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multimodal-robot-learning.html";
            },},{id: "projects-inflatable-shape-changing-interfaces",
          title: 'Inflatable Shape-Changing Interfaces',
          description: "Soft growing pin actuator for high-extension shape-changing displays",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shape-changing-interfaces.html";
            },},{id: "projects-signal-complexity-effects-on-the-task-based-utility-of-haptic-information",
          title: 'Signal Complexity Effects on the Task-Based Utility of Haptic Information',
          description: "Human-subject study on perception vs. usability of haptic signals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/signal-complexity-haptics.html";
            },},{id: "projects-soft-sensors",
          title: 'Soft Sensors',
          description: "Flexible capacitive sensors for force feedback in soft robotic systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soft-sensors.html";
            },},{id: "projects-soft-growing-robots-for-search-and-rescue",
          title: 'Soft Growing Robots for Search and Rescue',
          description: "SPROUT, an open-source vine robot for confined-space search and rescue",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sprout-vine-robot.html";
            },},{id: "projects-underwater-vine-robots",
          title: 'Underwater Vine Robots',
          description: "Coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/underwater-vine-robots.html";
            },},{id: "projects-variable-stiffness-wearable-devices",
          title: 'Variable Stiffness Wearable Devices',
          description: "Coming soon!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/variable-stiffness-wearables.html";
            },},{id: "projects-wrapped-haptic-display-to-communicate-robot-learning",
          title: 'Wrapped Haptic Display to Communicate Robot Learning',
          description: "Soft haptic feedback integrated directly on robot arms for intuitive human–robot interaction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wrapped-haptic-display.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%74%6F%6E%69%6F%61%76%39%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=VfCUcEQAAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/antonioav", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alvar168", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
