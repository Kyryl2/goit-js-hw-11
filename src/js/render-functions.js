export function createGallaryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallery-item">
        <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"></a>
        <div class = "under-photo">
        <h3>Likes</h3>
        
      <p>${image.likes}</p>
      <h3>Views</h3>
      <p>${image.views}</p>
      <h3>Comments</h3>
      <p>${image.comments}</p>
      <h3>Downloads</h3>
      <p>${image.downloads}</p>
</div>


      </li>`
    )
    .join('');
}
