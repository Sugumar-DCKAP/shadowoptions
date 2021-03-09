function shadowoptions(options) {
  let images = document.querySelectorAll('.shadows');
  if (options.shadow_type === 'soft') {
    options.shadow_type = '0px';
  } else {
    options.shadow_type = '15px';
  }

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px #000`;

    if (options.padding) {
      image.style.padding = '1em';
    }
  })
}

module.exports.shadowoptions = shadowoptions;