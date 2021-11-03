function normalizeProducts(products) {
  let result = []
  for (let p of products.data.products.edges) {
    result.push(normalizeProduct(p));
  }

  return result;
}

function normalizeProduct(product) {
  let images = []
  for (let img of product.node.images.edges) {
    images.push(img.node.src)
  }

  const { price } = product;

  let variants = []
  if (product.node.variants) {
    for (let v of product.node.variants.edges) {
      let variant = {
        id: v.node.id,
        image: v.node.image.src,
        price: v.node.price,
        title: v.node.title
      }
      variants.push(variant)
    }
  }
console.log(product);
  return {
    id: product.node.id,
    description: product.node.description != "" ? product.node.description : null,
    title: product.node.title,
    price: price,
    images: images,
    variants: variants,
    selectedImage: images[0],
    availableForSale: product.node.availableForSale
  }
}


export {
  normalizeProduct,
  normalizeProducts,
}
