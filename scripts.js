
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('youtube-videos');
  // Placeholder for API fetch — replace YOUR_API_KEY and CHANNEL_ID
  const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"];
  videoIds.forEach(id => {
    const div = document.createElement('div');
    div.innerHTML = `
      <a href="https://www.youtube.com/watch?v=${id}" target="_blank">
        <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Vanguard Video">
      </a>
    `;
    container.appendChild(div);
  });
});
