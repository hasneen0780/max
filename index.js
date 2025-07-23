// Create a new HTML document
const doc = document.implementation.createHTMLDocument("Sads Help - المنصة التعليمية الحديثة");

// Set document attributes
doc.documentElement.lang = "ar";
doc.documentElement.dir = "rtl";

// Create head section
const head = doc.createElement("head");

// Add meta tags
const metaCharset = doc.createElement("meta");
metaCharset.charset = "UTF-8";
head.appendChild(metaCharset);

const metaViewport = doc.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
head.appendChild(metaViewport);

// Add title
const title = doc.createElement("title");
title.textContent = "Sads Help - المنصة التعليمية الحديثة";
head.appendChild(title);

// Add CSS links
const fontLink = doc.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;600;700;800&display=swap";
fontLink.rel = "stylesheet";
head.appendChild(fontLink);

const plyrCss = doc.createElement("link");
plyrCss.href = "https://cdn.plyr.io/3.7.2/plyr.css";
plyrCss.rel = "stylesheet";
head.appendChild(plyrCss);

const fontAwesome = doc.createElement("link");
fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
fontAwesome.rel = "stylesheet";
head.appendChild(fontAwesome);

// Add script tags for polyfills
const es6Promise = doc.createElement("script");
es6Promise.src = "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.2.8/es6-promise.auto.min.js";
head.appendChild(es6Promise);

const fetchPolyfill = doc.createElement("script");
fetchPolyfill.src = "https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js";
head.appendChild(fetchPolyfill);

const babel = doc.createElement("script");
babel.src = "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js";
head.appendChild(babel);

// Add style element
const style = doc.createElement("style");
style.textContent = `
  :root {
    --primary: #ff6f00;
    --primary-dark: #e65100;
    --primary-light: #ff8f00;
    --secondary: #2196f3;
    --accent: #4caf50;
    --warning: #ff9800;
    --error: #f44336;
    --success: #8bc34a;
    
    --plyr-color-main: #ff6f00;
    --bg-color: #0a0a0a;
    --bg-secondary: #121212;
    --text-color: #ffffff;
    --text-secondary: #b0b0b0;
    --card-color: #1e1e1e;
    --card-hover: #2a2a2a;
    --border-color: #333333;
    --shadow: 0 4px 20px rgba(0,0,0,0.3);
    --shadow-hover: 0 8px 30px rgba(255,111,0,0.2);
    
    --gradient-primary: linear-gradient(135deg, #ff6f00 0%, #ff8f00 100%);
    --gradient-card: linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%);
    --gradient-bg: linear-gradient(180deg, #0a0a0a 0%, #121212 100%);
  }
  
  [data-theme="light"] {
    --primary: #ff6f00;
    --primary-dark: #e65100;
    --primary-light: #ff8f00;
    --bg-color: #f8f9fa;
    --bg-secondary: #ffffff;
    --text-color: #212529;
    --text-secondary: #6c757d;
    --card-color: #ffffff;
    --card-hover: #f8f9fa;
    --border-color: #e9ecef;
    --shadow: 0 4px 20px rgba(0,0,0,0.1);
    --shadow-hover: 0 8px 30px rgba(255,111,0,0.15);
    
    --gradient-card: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
    --gradient-bg: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Almarai', sans-serif;
  }

  body {
    background: var(--gradient-bg);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
  }

  /* Page transitions */
  .page {
    display: none;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .page.active {
    display: block;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
  }

  /* Header styles */
  header {
    background: var(--gradient-card);
    backdrop-filter: blur(20px);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
    border-bottom: 1px solid var(--border-color);
    flex-wrap: wrap;
  }

  .site-title {
    color: var(--primary);
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    text-shadow: 0 2px 4px rgba(255,111,0,0.3);
    position: relative;
  }

  .site-title:hover {
    transform: scale(1.05);
    animation: pulse 2s infinite;
  }

  .site-title::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: var(--gradient-primary);
    border-radius: 8px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s;
  }

  .site-title:hover::before {
    opacity: 0.1;
  }

  .nav-buttons {
    display: flex;
    gap: 1rem;
    margin: 0 1rem;
    background: var(--bg-secondary);
    padding: 0.5rem;
    border-radius: 12px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  }

  .nav-btn {
    background: transparent;
    color: var(--text-secondary);
    border: none;
    border-radius: 8px;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }

  .nav-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    transition: left 0.3s;
    z-index: -1;
  }

  .nav-btn:hover {
    color: white;
    transform: translateY(-2px);
  }

  .nav-btn:hover::before {
    left: 0;
  }

  .nav-btn.active {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-hover);
  }

  .search-container {
    flex-grow: 1;
    max-width: 600px;
    display: flex;
    gap: 1rem;
    position: relative;
  }

  #searchInput {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 2px solid var(--border-color);
    border-radius: 25px;
    background: var(--card-color);
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  }

  #searchInput:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(255,111,0,0.1);
    transform: translateY(-2px);
  }

  #searchButton, #themeToggle {
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
  }

  #searchButton {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  #themeToggle {
    padding: 1rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #searchButton:hover, #themeToggle:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  /* Teachers grid */
  .teachers-section {
    margin-top: 2rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .teachers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    padding: 1rem 0;
  }

  .teacher-card {
    background: var(--gradient-card);
    padding: 2rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
  }

  .teacher-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .teacher-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-hover);
  }

  .teacher-card:hover::before {
    transform: scaleX(1);
  }

  .teacher-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary);
    display: block;
    margin: 0 auto 1.5rem;
    transition: all 0.3s;
    box-shadow: 0 8px 20px rgba(255,111,0,0.3);
  }

  .teacher-card:hover .teacher-img {
    transform: scale(1.1);
    border-color: var(--primary-light);
  }

  .teacher-name {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }

  .teacher-subject {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.1rem;
  }

  /* Classes page */
  .classes-page {
    display: grid;
    gap: 2rem;
  }

  .teacher-info {
    background: var(--gradient-card);
    padding: 2rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 2rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
  }

  .teacher-img-lg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid var(--primary);
    object-fit: cover;
    box-shadow: 0 8px 20px rgba(255,111,0,0.3);
  }

  .teacher-details h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .teacher-details p {
    font-size: 1.2rem;
    color: var(--text-secondary);
  }

  .back-button, .copy-button {
    background: var(--gradient-primary);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    margin-bottom: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: var(--shadow);
  }

  .back-button:hover, .copy-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  .classes-list {
    display: grid;
    gap: 2rem;
  }

  .class-card {
    background: var(--gradient-card);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
    transition: all 0.3s;
  }

  .class-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .class-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    border-right: 4px solid var(--primary);
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  .class-header:hover {
    background: var(--card-hover);
  }

  .class-header h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .class-header span {
    font-size: 1.2rem;
    transition: transform 0.3s;
  }

  .lectures-list {
    display: none;
    gap: 1rem;
    padding: 0 2rem 2rem;
  }

  .lecture-item {
    position: relative;
    padding: 1.2rem 1.5rem 1.2rem 3rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    border-right: 3px solid var(--primary);
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lecture-item:hover {
    background: var(--card-hover);
    transform: translateX(10px);
    box-shadow: var(--shadow);
  }

  .lecture-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .lecture-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    background: transparent;
    flex-shrink: 0;
  }

  .lecture-checkbox.completed {
    background: var(--primary);
    color: white;
  }

  .lecture-checkbox:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(255,111,0,0.3);
  }

  .lecture-title {
    flex-grow: 1;
  }

  .lecture-progress {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-right: 1rem;
  }

  /* Video page */
  .video-page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .video-container {
    position: relative;
    background: black;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-hover);
  }

  .plyr video {
    width: 100%;
    height: auto;
  }

  .video-details {
    background: var(--gradient-card);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
  }

  .video-details h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .video-details p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  /* Materials and Exams */
  .materials-grid, .exams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
  }

  .material-card, .exam-card {
    background: var(--gradient-card);
    padding: 2rem;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
  }

  .material-card::before, .exam-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .material-card:hover, .exam-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
  }

  .material-card:hover::before, .exam-card:hover::before {
    transform: scaleX(1);
  }

  .material-img, .exam-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    transition: transform 0.3s;
  }

  .material-card:hover .material-img, .exam-card:hover .exam-img {
    transform: scale(1.05);
  }

  .material-title, .exam-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .material-subject, .exam-subject {
    color: var(--primary);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .download-btn {
    display: block;
    width: 100%;
    background: var(--gradient-primary);
    color: white;
    text-align: center;
    padding: 1rem;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: 600;
    box-shadow: var(--shadow);
  }

  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  /* Modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    animation: fadeIn 0.3s;
  }

  .modal-content {
    background: var(--gradient-card);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    position: relative;
    max-width: 400px;
    width: 90%;
    box-shadow: var(--shadow-hover);
    animation: slideUp 0.3s;
  }

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modal-content img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid var(--primary);
  }

  .modal-content a {
    display: inline-block;
    background: var(--gradient-primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    margin: 1rem 0.5rem;
    transition: all 0.3s;
    font-weight: 600;
  }

  .modal-content a:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  .close-modal {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .close-modal:hover {
    background: var(--error);
    color: white;
  }

  /* Loading states */
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid var(--border-color);
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
    }

    .site-title {
      font-size: 1.5rem;
    }

    .nav-buttons {
      width: 100%;
      justify-content: center;
      margin: 0;
    }

    .nav-btn {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }

    .search-container {
      width: 100%;
    }

    .teachers-grid, .materials-grid, .exams-grid {
      grid-template-columns: 1fr;
    }

    .teacher-info {
      flex-direction: column;
      text-align: center;
    }

    .teacher-img, .teacher-img-lg {
      width: 120px;
      height: 120px;
    }

    .page {
      padding: 1rem;
    }

    .section-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .site-title {
      font-size: 1.2rem;
    }

    .nav-btn {
      padding: 0.5rem 0.8rem;
      font-size: 0.8rem;
    }

    #searchInput {
      padding: 0.8rem 1rem;
    }

    .teacher-card, .material-card, .exam-card {
      padding: 1.5rem;
    }

    .section-title {
      font-size: 1.5rem;
    }
  }
`;
head.appendChild(style);

// Add the head to the document
doc.documentElement.appendChild(head);

// Create body element
const body = doc.createElement("body");

// Create header
const header = doc.createElement("header");

// Site title
const siteTitle = doc.createElement("h1");
siteTitle.className = "site-title";
siteTitle.onclick = () => navigate("home");
siteTitle.innerHTML = '<i class="fas fa-graduation-cap"></i> منصة Sads Help';
header.appendChild(siteTitle);

// Navigation buttons
const navButtons = doc.createElement("div");
navButtons.className = "nav-buttons";

const lecturesBtn = doc.createElement("button");
lecturesBtn.className = "nav-btn active";
lecturesBtn.onclick = () => loadContent("lectures");
lecturesBtn.innerHTML = '<i class="fas fa-play-circle"></i> المحاضرات';
navButtons.appendChild(lecturesBtn);

const materialsBtn = doc.createElement("button");
materialsBtn.className = "nav-btn";
materialsBtn.onclick = () => loadContent("materials");
materialsBtn.innerHTML = '<i class="fas fa-book"></i> الملازم';
navButtons.appendChild(materialsBtn);

const examsBtn = doc.createElement("button");
examsBtn.className = "nav-btn";
examsBtn.onclick = () => loadContent("exams");
examsBtn.innerHTML = '<i class="fas fa-clipboard-check"></i> الامتحانات';
navButtons.appendChild(examsBtn);

header.appendChild(navButtons);

// Search container
const searchContainer = doc.createElement("div");
searchContainer.className = "search-container";

const searchInput = doc.createElement("input");
searchInput.type = "text";
searchInput.id = "searchInput";
searchInput.placeholder = "ابحث عن مدرس أو مادة...";
searchContainer.appendChild(searchInput);

const searchButton = doc.createElement("button");
searchButton.id = "searchButton";
searchButton.innerHTML = '<i class="fas fa-search"></i> بحث';
searchContainer.appendChild(searchButton);

header.appendChild(searchContainer);

// Theme toggle
const themeToggle = doc.createElement("button");
themeToggle.id = "themeToggle";
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
header.appendChild(themeToggle);

body.appendChild(header);

// Create pages
const homePage = doc.createElement("div");
homePage.id = "homePage";
homePage.className = "page active";

const teachersSection = doc.createElement("div");
teachersSection.className = "teachers-section";

const sectionTitle = doc.createElement("h2");
sectionTitle.className = "section-title";
sectionTitle.textContent = "اختر مدرسك المفضل";
teachersSection.appendChild(sectionTitle);

const teachersGrid = doc.createElement("div");
teachersGrid.id = "teachersGrid";
teachersGrid.className = "teachers-grid";

const loading = doc.createElement("div");
loading.className = "loading";
loading.innerHTML = '<div class="spinner"></div>';
teachersGrid.appendChild(loading);

teachersSection.appendChild(teachersGrid);
homePage.appendChild(teachersSection);
body.appendChild(homePage);

// Classes page
const classesPage = doc.createElement("div");
classesPage.id = "classesPage";
classesPage.className = "page";

const classesPageContainer = doc.createElement("div");
classesPageContainer.className = "classes-page";

const backButton = doc.createElement("button");
backButton.className = "back-button";
backButton.onclick = () => navigate("home");
backButton.innerHTML = '<i class="fas fa-arrow-right"></i> الرجوع للمدرسين';
classesPageContainer.appendChild(backButton);

const teacherInfo = doc.createElement("div");
teacherInfo.className = "teacher-info";

const teacherImg = doc.createElement("img");
teacherImg.id = "teacherImage";
teacherImg.className = "teacher-img-lg";
teacherImg.alt = "صورة المدرس";
teacherInfo.appendChild(teacherImg);

const teacherDetails = doc.createElement("div");
teacherDetails.className = "teacher-details";

const teacherName = doc.createElement("h2");
teacherName.id = "teacherName";
teacherDetails.appendChild(teacherName);

const teacherSubject = doc.createElement("p");
teacherSubject.id = "teacherSubject";
teacherDetails.appendChild(teacherSubject);

teacherInfo.appendChild(teacherDetails);
classesPageContainer.appendChild(teacherInfo);

const classesList = doc.createElement("div");
classesList.id = "classesList";
classesList.className = "classes-list";
classesPageContainer.appendChild(classesList);

classesPage.appendChild(classesPageContainer);
body.appendChild(classesPage);

// Video page
const videoPage = doc.createElement("div");
videoPage.id = "videoPage";
videoPage.className = "page";

const videoPageContainer = doc.createElement("div");
videoPageContainer.className = "video-page";

const videoContainer = doc.createElement("div");
videoContainer.className = "video-container";

const videoPlayer = doc.createElement("video");
videoPlayer.id = "player";
videoPlayer.playsInline = true;
videoPlayer.controls = true;
videoContainer.appendChild(videoPlayer);

videoPageContainer.appendChild(videoContainer);

const videoDetails = doc.createElement("div");
videoDetails.className = "video-details";

const videoTitle = doc.createElement("h2");
videoTitle.id = "videoTitle";
videoDetails.appendChild(videoTitle);

const videoDesc = doc.createElement("p");
videoDesc.id = "videoDescription";
videoDetails.appendChild(videoDesc);

const copyButton = doc.createElement("button");
copyButton.className = "copy-button";
copyButton.onclick = copyLectureLink;
copyButton.innerHTML = '<i class="fas fa-copy"></i> نسخ رابط المحاضرة';
videoDetails.appendChild(copyButton);

const backButton2 = doc.createElement("button");
backButton2.className = "back-button";
backButton2.onclick = () => navigate("classes");
backButton2.innerHTML = '<i class="fas fa-arrow-right"></i> العودة للفصول';
videoDetails.appendChild(backButton2);

videoPageContainer.appendChild(videoDetails);
videoPage.appendChild(videoPageContainer);
body.appendChild(videoPage);

// Materials page
const materialsPage = doc.createElement("div");
materialsPage.id = "materialsPage";
materialsPage.className = "page";

const materialsSection = doc.createElement("div");
materialsSection.className = "materials-section";

const materialsTitle = doc.createElement("h2");
materialsTitle.className = "section-title";
materialsTitle.textContent = "الملازم الدراسية";
materialsSection.appendChild(materialsTitle);

const materialsGrid = doc.createElement("div");
materialsGrid.id = "materialsGrid";
materialsGrid.className = "materials-grid";
materialsGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
materialsSection.appendChild(materialsGrid);

materialsPage.appendChild(materialsSection);
body.appendChild(materialsPage);

// Exams page
const examsPage = doc.createElement("div");
examsPage.id = "examsPage";
examsPage.className = "page";

const examsSection = doc.createElement("div");
examsSection.className = "exams-section";

const examsTitle = doc.createElement("h2");
examsTitle.className = "section-title";
examsTitle.textContent = "الامتحانات";
examsSection.appendChild(examsTitle);

const examsGrid = doc.createElement("div");
examsGrid.id = "examsGrid";
examsGrid.className = "exams-grid";
examsGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
examsSection.appendChild(examsGrid);

examsPage.appendChild(examsSection);
body.appendChild(examsPage);

// Telegram modal
const telegramModal = doc.createElement("div");
telegramModal.id = "telegramModal";
telegramModal.className = "modal";
telegramModal.style.display = "none";

const modalContent = doc.createElement("div");
modalContent.className = "modal-content";

const closeModalBtn = doc.createElement("button");
closeModalBtn.className = "close-modal";
closeModalBtn.onclick = closeModal;
closeModalBtn.innerHTML = '<i class="fas fa-times"></i>';
modalContent.appendChild(closeModalBtn);

const modalImg = doc.createElement("img");
modalImg.src = "https://cdn.glitch.global/d472cc04-f40d-483a-8a7d-67c6c1ddaaff/Picsart_25-04-18_07-56-03-508.jpg?v=1744952192982";
modalImg.alt = "قناة التليجرام";
modalContent.appendChild(modalImg);

const modalTitle = doc.createElement("h3");
modalTitle.textContent = "اشترك في قناة التليجرام";
modalContent.appendChild(modalTitle);

const modalText = doc.createElement("p");
modalText.textContent = "تابع آخر التحديثات والمحتوى الجديد";
modalContent.appendChild(modalText);

const telegramLink = doc.createElement("a");
telegramLink.href = "https://t.me/tteiio";
telegramLink.target = "_blank";
telegramLink.innerHTML = '<i class="fab fa-telegram-plane"></i> اذهب للقناة';
modalContent.appendChild(telegramLink);

const modalButton = doc.createElement("button");
modalButton.onclick = closeModal;
modalButton.className = "download-btn";
modalButton.style.marginTop = "1rem";
modalButton.innerHTML = '<i class="fas fa-check"></i> لقد اشتركت';
modalContent.appendChild(modalButton);

telegramModal.appendChild(modalContent);
body.appendChild(telegramModal);

// Add scripts
const hlsScript = doc.createElement("script");
hlsScript.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
body.appendChild(hlsScript);

const plyrScript = doc.createElement("script");
plyrScript.src = "https://cdn.plyr.io/3.7.2/plyr.polyfilled.js";
body.appendChild(plyrScript);

// Add Babel script with all the JavaScript logic
const script = doc.createElement("script");
script.type = "text/babel";
script.textContent = `
  // إعداد الثيم الأولي
  function initializeTheme() {
    const stored = localStorage.getItem('theme');
    const theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  initializeTheme();
  
  document.getElementById('themeToggle').addEventListener('click', function() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  // إدارة حفظ تقدم المستخدم وموضع الفيديو
  let completedLectures = JSON.parse(localStorage.getItem('completedLectures') || '{}');
  let videoProgress = JSON.parse(localStorage.getItem('videoProgress') || '{}');
  
  function saveCompleted() {
    localStorage.setItem('completedLectures', JSON.stringify(completedLectures));
  }
  
  function saveVideoProgress(url, currentTime) {
    videoProgress[url] = currentTime;
    localStorage.setItem('videoProgress', JSON.stringify(videoProgress));
  }
  
  function getVideoProgress(url) {
    return videoProgress[url] || 0;
  }
  
  function markLectureCompleted(url, completed = true) {
    completedLectures[url] = completed;
    saveCompleted();
    if (currentTeacher) renderClasses(currentTeacher.classes);
  }

  function toggleLectureCompletion(url, event) {
    event.stopPropagation();
    const isCompleted = completedLectures[url];
    markLectureCompleted(url, !isCompleted);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return \`\${minutes}:\${remainingSeconds.toString().padStart(2, '0')}\`;
  }

  // إعداد مشغل الفيديو
  let hls;
  const player = new Plyr('#player', {
    controls: ['play-large', 'rewind', 'play', 'fast-forward', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen'],
    settings: ['speed', 'quality'],
    speed: { selected: 1, options: [0.5, 1, 1.25, 1.5, 2] },
    seekTime: 10
  });

  // حفظ تقدم الفيديو كل 5 ثوان
  let progressSaveInterval;
  
  player.on('play', () => {
    progressSaveInterval = setInterval(() => {
      if (currentLectureLink && player.currentTime > 0) {
        saveVideoProgress(currentLectureLink, player.currentTime);
      }
    }, 5000);
  });

  player.on('pause', () => {
    if (progressSaveInterval) {
      clearInterval(progressSaveInterval);
    }
    if (currentLectureLink && player.currentTime > 0) {
      saveVideoProgress(currentLectureLink, player.currentTime);
    }
  });

  // متغيرات عامة
  const pages = {
    home: document.getElementById('homePage'),
    classes: document.getElementById('classesPage'),
    video: document.getElementById('videoPage'),
    materials: document.getElementById('materialsPage'),
    exams: document.getElementById('examsPage')
  };
  
  const teachersGrid = document.getElementById('teachersGrid');
  const materialsGrid = document.getElementById('materialsGrid');
  const examsGrid = document.getElementById('examsGrid');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const navButtons = document.querySelectorAll('.nav-btn');
  
  let teachers = [], currentTeacher = null, currentClassIndex = 0, currentLectureIndex = 0, currentLectureLink = '';
  let materials = [], exams = [];

  // دالة التنقل بين الصفحات
  function navigate(page) {
    window.scrollTo(0, 0);
    if (page !== 'video') {
      player.pause();
      if (progressSaveInterval) {
        clearInterval(progressSaveInterval);
      }
      if (hls) {
        hls.destroy();
        hls = null;
      }
    }
    Object.keys(pages).forEach(k => {
      pages[k].classList.remove('active');
    });
    pages[page].classList.add('active');
  }

  // نسخ رابط المحاضرة
  function copyLectureLink() {
    if (!currentLectureLink) return;
    navigator.clipboard.writeText(currentLectureLink).then(function() {
      // إظهار رسالة النجاح
      const button = document.querySelector('.copy-button');
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
      button.style.background = 'var(--success)';
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'var(--gradient-primary)';
      }, 2000);
    }).catch(() => {
      alert('حدث خطأ أثناء النسخ');
    });
  }

  // عرض المدرسين
  function renderTeachers(list = teachers) {
    if (!list.length) {
      teachersGrid.innerHTML = \`
        <div class="teacher-card" style="grid-column: 1/-1; text-align: center;">
          <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
          <p>لا يوجد نتائج مطابقة</p>
        </div>
      \`;
      return;
    }
    
    teachersGrid.innerHTML = list.map(teacher => \`
      <div class="teacher-card" onclick="showTeacher('\${teacher.id}')">
        <img src="\${teacher.image}" alt="\${teacher.name}" class="teacher-img" loading="lazy">
        <h3 class="teacher-name">\${teacher.name}</h3>
        <p class="teacher-subject">\${teacher.subject}</p>
      </div>
    \`).join('');
  }

  // عرض معلومات المدرس والفصول
  function showTeacher(id) {
    currentTeacher = teachers.find(t => t.id == id);
    if (!currentTeacher) return;
    
    document.getElementById('teacherImage').src = currentTeacher.image;
    document.getElementById('teacherName').textContent = currentTeacher.name;
    document.getElementById('teacherSubject').textContent = currentTeacher.subject;
    renderClasses(currentTeacher.classes);
    navigate('classes');
  }

  // عرض الفصول والمحاضرات
  function renderClasses(classesData) {
    document.getElementById('classesList').innerHTML = classesData.map((cls, ci) => {
      const lectures = cls.lectures.map((lec, li) => {
        const isCompleted = completedLectures[lec.url];
        const progress = getVideoProgress(lec.url);
        const progressText = progress > 0 ? \`(\${formatTime(progress)})\` : '';
        
        return \`
          <div class="lecture-item" onclick="playVideo(\${ci},\${li},'\${lec.url.replace(/'/g,"\\\\'")}','\${lec.title.replace(/'/g,"\\\\'")}','\${lec.description.replace(/'/g,"\\\\'")}')">
            <div class="lecture-content">
              <div class="lecture-checkbox \${isCompleted ? 'completed' : ''}" 
                   onclick="toggleLectureCompletion('\${lec.url.replace(/'/g,"\\\\'")}', event)">
                \${isCompleted ? '<i class="fas fa-check"></i>' : ''}
              </div>
              <span class="lecture-title">\${li + 1}. \${lec.title}</span>
              \${progressText ? \`<span class="lecture-progress">\${progressText}</span>\` : ''}
            </div>
          </div>
        \`;
      }).join('');
      
      return \`
        <div class="class-card">
          <div class="class-header" onclick="toggleLectures(this)">
            <h3><i class="fas fa-folder"></i> \${cls.name}</h3>
            <span><i class="fas fa-chevron-down"></i></span>
          </div>
          <div class="lectures-list">\${lectures}</div>
        </div>
      \`;
    }).join('');
  }

  // تبديل عرض المحاضرات
  function toggleLectures(element) {
    const list = element.parentElement.querySelector('.lectures-list');
    const arrow = element.querySelector('span i');
    
    if (!list.style.display || list.style.display === 'none') {
      list.style.display = 'grid';
      arrow.className = 'fas fa-chevron-up';
    } else {
      list.style.display = 'none';
      arrow.className = 'fas fa-chevron-down';
    }
  }

  // تشغيل الفيديو
  function playVideo(ci, li, url, title, desc) {
    currentClassIndex = ci;
    currentLectureIndex = li;
    currentLectureLink = url;
    const video = document.getElementById('player');
    
    if (url.endsWith('.m3u8')) {
      if (hls) hls.destroy();
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          // استعادة موضع الفيديو المحفوظ
          const savedTime = getVideoProgress(url);
          if (savedTime > 0) {
            player.currentTime = savedTime;
          }
          player.play();
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', () => {
          const savedTime = getVideoProgress(url);
          if (savedTime > 0) {
            player.currentTime = savedTime;
          }
          player.play();
        });
      } else {
        alert('هذا المتصفح لا يدعم بث الفيديو بهذا الصيغة');
        return;
      }
    } else {
      player.source = {
        type: 'video',
        sources: [{ src: url, type: 'video/mp4' }]
      };
      
      // استعادة موضع الفيديو بعد تحميل المصدر
      player.on('ready', () => {
        const savedTime = getVideoProgress(url);
        if (savedTime > 0) {
          player.currentTime = savedTime;
        }
      });
      
      player.play();
    }
    
    document.getElementById('videoTitle').textContent = title;
    document.getElementById('videoDescription').textContent = desc;
    navigate('video');
  }

  // الانتقال التلقائي للمحاضرة التالية
  player.on('ended', () => {
    markLectureCompleted(currentLectureLink);
    const classes = currentTeacher.classes;
    let ci = currentClassIndex;
    let li = currentLectureIndex;
    
    if (li < classes[ci].lectures.length - 1) {
      li++;
    } else if (ci < classes.length - 1) {
      ci++;
      li = 0;
    } else return;
    
    const nextLecture = classes[ci].lectures[li];
    playVideo(ci, li, nextLecture.url, nextLecture.title, nextLecture.description);
  });

  // البحث
  function handleSearch() {
    const term = searchInput.value.trim().toLowerCase();
    const filteredTeachers = teachers.filter(t => 
      t.name.toLowerCase().includes(term) || 
      t.subject.toLowerCase().includes(term)
    );
    renderTeachers(filteredTeachers);
  }

  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(handleSearch, 300);
  });
  searchButton.addEventListener('click', handleSearch);

  // تحميل المحتوى
  function loadContent(type) {
    // تحديث الأزرار النشطة
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(\`.nav-btn[onclick="loadContent('\${type}')"]\`).classList.add('active');
    
    switch(type) {
      case 'lectures':
        navigate('home');
        break;
      case 'materials':
        loadMaterials();
        navigate('materials');
        break;
      case 'exams':
        loadExams();
        navigate('exams');
        break;
    }
  }

  // تحميل الملازم
  function loadMaterials() {
    if (materials.length > 0) {
      renderMaterials();
      return;
    }
    
    fetch('ma.js')
      .then(response => response.text())
      .then(text => {
        try {
          const dataMatch = text.match(/window\.materialsData\\s*=\\s*({[\\s\\S]*?});/);
          if (dataMatch && dataMatch[1]) {
            const data = eval(\`(\${dataMatch[1]})\`);
            materials = [...data.summaries, ...data.ministerials, ...data.assignments, ...data.focused];
            renderMaterials();
          } else {
            throw new Error('لا يمكن العثور على البيانات');
          }
        } catch (error) {
          materialsGrid.innerHTML = \`
            <div class="material-card" style="grid-column: 1/-1; text-align: center;">
              <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--warning); margin-bottom: 1rem;"></i>
              <p>لا يمكن تحميل بيانات الملازم</p>
            </div>
          \`;
        }
      })
      .catch(error => {
        console.error('خطأ في تحميل الملازم:', error);
        materialsGrid.innerHTML = \`
          <div class="material-card" style="grid-column: 1/-1; text-align: center;">
            <i class="fas fa-wifi" style="font-size: 3rem; color: var(--error); margin-bottom: 1rem;"></i>
            <p>حدث خطأ أثناء تحميل الملازم</p>
            <button onclick="loadMaterials()" class="download-btn" style="margin-top: 1rem;">إعادة المحاولة</button>
          </div>
        \`;
      });
  }

  // عرض الملازم
  function renderMaterials() {
    materialsGrid.innerHTML = materials.map(material => \`
      <div class="material-card">
        <img src="\${material.image}" alt="\${material.title}" class="material-img" loading="lazy">
        <h3 class="material-title">\${material.title}</h3>
        <p class="material-subject">\${material.subject}</p>
        <a href="\${material.downloadUrl}" target="_blank" class="download-btn">
          <i class="fas fa-download"></i>
          تحميل الملزمة
        </a>
      </div>
    \`).join('');
  }

  // تحميل الامتحانات
  function loadExams() {
    if (exams.length > 0) {
      renderExams();
      return;
    }
    
    fetch('ex.js')
      .then(response => response.text())
      .then(text => {
        try {
          const dataMatch = text.match(/window\.examsData\\s*=\\s*({[\\s\\S]*?});/);
          if (dataMatch && dataMatch[1]) {
            const data = eval(\`(\${dataMatch[1]})\`);
            exams = [];
            data.subjects.forEach(subject => {
              subject.chapters.forEach(chapter => {
                chapter.exams.forEach(exam => {
                  exams.push({
                    title: exam.title,
                    subject: subject.name,
                    chapter: chapter.name,
                    description: exam.description,
                    downloadUrl: exam.downloadUrl
                  });
                });
              });
            });
            renderExams();
          } else {
            throw new Error('لا يمكن العثور على البيانات');
          }
        } catch (error) {
          examsGrid.innerHTML = \`
            <div class="exam-card" style="grid-column: 1/-1; text-align: center;">
              <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--warning); margin-bottom: 1rem;"></i>
              <p>لا يمكن تحميل بيانات الامتحانات</p>
            </div>
          \`;
        }
      })
      .catch(error => {
        console.error('خطأ في تحميل الامتحانات:', error);
        examsGrid.innerHTML = \`
          <div class="exam-card" style="grid-column: 1/-1; text-align: center;">
            <i class="fas fa-wifi" style="font-size: 3rem; color: var(--error); margin-bottom: 1rem;"></i>
            <p>حدث خطأ أثناء تحميل الامتحانات</p>
            <button onclick="loadExams()" class="download-btn" style="margin-top: 1rem;">إعادة المحاولة</button>
          </div>
        \`;
      });
  }

  // عرض الامتحانات
  function renderExams() {
    examsGrid.innerHTML = exams.map(exam => \`
      <div class="exam-card">
        <h3 class="exam-title">\${exam.title}</h3>
        <p class="exam-subject">\${exam.subject} - \${exam.chapter}</p>
        <p style="margin-bottom: 1.5rem;">\${exam.description}</p>
        <a href="\${exam.downloadUrl}" target="_blank" class="download-btn">
          <i class="fas fa-download"></i>
          تحميل الامتحان
        </a>
      </div>
    \`).join('');
  }

  // تحميل البيانات الأولية
  function loadData() {
    fetch('data.json')
      .then(response => {
        if (!response.ok) throw new Error('فشل تحميل البيانات');
        return response.json();
      })
      .then(data => {
        teachers = data.teachers;
        renderTeachers();
        console.log('تم تحميل البيانات بنجاح:', data);
      })
      .catch(error => {
        console.error('خطأ في تحميل البيانات:', error);
        teachersGrid.innerHTML = \`
          <div class="teacher-card" style="grid-column: 1/-1; text-align: center;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--error); margin-bottom: 1rem;"></i>
            <h3>حدث خطأ في تحميل البيانات</h3>
            <p>يرجى التأكد من وجود ملف data.json</p>
            <button onclick="location.reload()" class="download-btn" style="margin-top: 1rem;">
              <i class="fas fa-redo"></i>
              إعادة تحميل الصفحة
            </button>
          </div>
        \`;
      });
  }

  // إغلاق النافذة المنبثقة
  function closeModal() {
    document.getElementById('telegramModal').style.display = 'none';
  }

  // منع النقر بالزر الأيمن والتحديد
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('selectstart', e => e.preventDefault());

  // تهيئة التطبيق
  document.addEventListener('DOMContentLoaded', () => {
    loadData();
  });

  // تحميل البيانات عند تحميل الصفحة
  loadData();
`;
body.appendChild(script);

// Add the body to the document
doc.documentElement.appendChild(body);

// Output the complete HTML
console.log(doc.documentElement.outerHTML);
