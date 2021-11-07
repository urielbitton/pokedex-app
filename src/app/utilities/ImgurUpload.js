import axios from "axios";

export default function ImgurUpload(file) {

  const data = new FormData();
  data.append("image", file);
  const config = {
    headers: {
      Authorization: "Client-ID 5796866069f81cd",
    },
  };
  axios.post("https://api.imgur.com/3/image/", data, config)
  .then((res) => {
    console.log(res);
  }).catch(err => {
    console.log(err)
  });

}