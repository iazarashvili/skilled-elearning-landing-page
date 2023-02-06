function changeImageResolution(imageUrl, width) {
  const url = new URL(imageUrl);
  if (width <= 400) {
    url.searchParams.set("w", width);
    return url.toString();
  }
  return imageUrl;
}
