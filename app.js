const JSON_URL = "https://raw.githubusercontent.com/urnjoya/WebCore/refs/heads/main/data.json";
fetch(JSON_URL)
  .then(response => response.json())
  .then(data => {
    generateAppCards(data);
    // You can add code here to dynamically generate app cards based on the fetched data
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching JSON data:", error);
  });

function generateAppCards(apps) {
  const contentSection = document.getElementById('content');
  contentSection.innerHTML = ''; // Clear existing content

  apps.forEach(app => {
    const appCard = document.createElement('section');
    appCard.className = 'app_card';

    appCard.innerHTML = `
                        <section class="logo">
                            <img src="${app.icon}" alt="${app.title} Logo" width="100" height="100" />
                        </section>
                        <section class="app_name">
                            <data value="${app.title}">${app.title}</data>
                        </section>
                        <section class="app_version">
                            <data value="${app.version}" id="app_version">${app.version}</data>
                        </section>
                        <section class="release_date">
                            <time datetime="${app.release_date}">${new Date(app.release_date).toLocaleDateString()}</time>
                        </section>
                        <section class="install_button" onclick="window.location.href='${app.download_url}';">
                            <button class="pwa_install">Install</button>
                        </section>
                    `;

    contentSection.appendChild(appCard);
  });
}