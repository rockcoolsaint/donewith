import client from "./client";
import axios from "axios";
const FormData = global.FormData;

const endpoint = '/listings';
const getListings = () => client.get(endpoint);

const addListing = async listing => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image
  }));

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  // return await client.post(endpoint, JSON.stringify(data), {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   }
  // });
  const config = {
    method: "post",
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: data
  }

  return await fetch(`http://192.168.8.159:9000/api/listings`, config);
}

export default {
  addListing,
  getListings
}