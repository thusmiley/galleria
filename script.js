// Handle masonary grid
function resizeGridItem(item) {
  grid = document.getElementsByClassName("gallery-grid")[0];
  rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-gap")
  );
  rowSpan = Math.ceil(
    (item.querySelector(".card-content").getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  allItems = document.getElementsByClassName("card");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance) {
  item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("card");
for (x = 0; x < allItems.length; x++) {
  imagesLoaded(allItems[x], resizeInstance);
}

//View image (lightbox)
const lightbox = document.querySelector('.overlay')
function viewImage() {
  lightbox.classList.add('active');
}
function closeImage() {
  lightbox.classList.remove('active');
}
